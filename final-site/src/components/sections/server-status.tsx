import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServerStatus } from "@/components/sections/server-status";

export default function ServerStatusPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <ServerStatus />
      </div>
      <Footer />
    </main>
  );
}
