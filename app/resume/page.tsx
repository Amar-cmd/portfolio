import CardSection from "@/components/CardSection";
import CertificationSection from "@/components/CertificationSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeIntroCard from "@/components/ResumeIntroCard";
import SkillsSection from "@/components/SkillsSection";
import { resumeData } from "@/data/resumeData";
import { siteData } from "@/data/siteData";

export default function ResumePage() {
  return (
    <main className="page-shell resume-shell">
      <Header
        leftLabel={siteData.nav.leftLabel}
        rightLinks={siteData.nav.rightLinks}
        resumeButton={siteData.nav.resumeButton}
      />

      <section className="resume-page-content">
        <ResumeIntroCard data={resumeData.intro} />

        {resumeData.timelineSections.map((section) => (
          <CardSection key={section.id} section={section} />
        ))}

        <SkillsSection data={resumeData.skillsSection} />
        <CertificationSection data={resumeData.certificationSection} />
        <ProjectsSection data={resumeData.projectsSection} />
      </section>
    </main>
  );
}
