export default function BlogContentRenderer({ content }) {
  return (
    <div>
      {content.map((section, index) => {
        const { __component } = section;

        if (__component === "content.paragraph") {
          return <p key={index}>{section.text}</p>;
        }

        if (__component === "content.image" && section.image?.url) {
          return (
            <img
              key={index}
              src={`http://localhost:1337${section.image.url}`}
              alt={section.image.alternativeText || "Image"}
              style={{ maxWidth: "100%", margin: "20px 0" }}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
