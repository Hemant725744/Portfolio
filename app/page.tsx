import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingBody from "@/components/landing/LandingBody";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <LandingNavbar />
      <LandingBody />
      <LandingFooter />
    </main>
  );
}