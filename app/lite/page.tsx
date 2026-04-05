import LiteHero from "@/components/LiteHero";
import { siteData } from "@/data/siteData";

export default function LitePage() {
  return (
    <main className="lite-page-shell lite-shell">
      <LiteHero data={siteData.liteHero} />
    </main>
  );
}
