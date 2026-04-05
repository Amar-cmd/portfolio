import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { siteData } from "@/data/siteData";

export default function HomePage() {
  return (
    <main className="page-shell home-shell">
      <Header
        leftLabel={siteData.nav.leftLabel}
        rightLinks={siteData.nav.rightLinks}
        resumeButton={siteData.nav.resumeButton}
        showBrandUnderline
      />

      <Hero data={siteData.hero} />
    </main>
  );
}
