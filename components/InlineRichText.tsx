type InlineRichTextProps = {
  text: string;
};

export default function InlineRichText({ text }: InlineRichTextProps) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
        }

        return part;
      })}
    </>
  );
}
