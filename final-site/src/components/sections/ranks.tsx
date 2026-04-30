import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Ranks } from "@/components/sections/ranks";

export default function RanksPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Ranks />
      </div>
      <Footer />
    </main>
  );
}
