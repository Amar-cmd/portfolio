import Header from "@/components/Header";
import PortfolioHome from "@/components/PortfolioHome";
import { siteData } from "@/data/siteData";

export default function HomePage() {
  return (
    <main className="page-shell home-shell portfolio-shell">
      <Header
        leftLabel={siteData.nav.leftLabel}
        rightLinks={siteData.nav.rightLinks}
        resumeButton={siteData.nav.resumeButton}
        showBrandUnderline
      />
      <PortfolioHome />
    </main>
  );
}
