type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="resume-section-head">
      <h2 className="resume-section-title">{title}</h2>
      <div className="resume-section-divider" />
    </div>
  );
}