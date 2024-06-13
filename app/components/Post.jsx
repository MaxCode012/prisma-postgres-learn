export default function Post({ id, title, content, authorName }) {
  return (
    <div
      style={{
        border: "1px solid black",
        paddingLeft: "15px",
        margin: "10px 0",
      }}
    >
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
