function TextLimit({ text, maxWords }) {
  const words = text.split(" ");
  const displayText = words.slice(0, maxWords).join(" ");

  return <p className="mx-3 my-2">{displayText}{words.length > maxWords && "..."}</p>;
}

export default TextLimit