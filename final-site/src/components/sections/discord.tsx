import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Discord } from "@/components/sections/discord";

export default function DiscordPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Discord />
      </div>
      <Footer />
    </main>
  );
}
