import AboutBody from "@/components/about/AboutBody";
import AboutFooter from "@/components/about/AboutFooter";
import AboutNavbar from "@/components/about/AboutNavbar";

export default function AboutPage() {
  return (
    <main className="bg-[#FDFBF7]">
      <AboutNavbar />
      <AboutBody />
      <AboutFooter />
    </main>
  );
}