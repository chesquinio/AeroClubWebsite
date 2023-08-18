function TextLimit({ text, maxWords }) {
  const words = text.split(" ");
  const displayText = words.slice(0, maxWords).join(" ");
  const textColor = maxWords > 16 ? "text-gray-600" : "text-gray-200";

  return <p className={`text-sm mx-3 my-2 ${textColor}`}>{displayText}{words.length > maxWords && "..."}</p>;
}

export default TextLimit;