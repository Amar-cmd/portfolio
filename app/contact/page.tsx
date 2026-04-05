import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import { siteData } from "@/data/siteData";

export default function ContactPage() {
  return (
    <main className="page-shell contact-page-shell contact-shell">
      <Header
        leftLabel={siteData.nav.leftLabel}
        rightLinks={siteData.nav.rightLinks}
        resumeButton={siteData.nav.resumeButton}
        activePath="/contact"
      />

      <ContactSection data={siteData.contactPage} />
    </main>
  );
}
