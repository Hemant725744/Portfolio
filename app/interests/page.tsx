import IntrestsNavbar from "@/components/Interests/InterestsNavbar";
import IntrestsBody from "@/components/Interests/InterestsBody";
import IntrestsFooter from "@/components/Interests/InterestsFooter";


export default function IntrestsPage() {
  return (
    <main className="bg-[#FDFBF7]">
      <IntrestsNavbar />
      <IntrestsBody />
      <IntrestsFooter />
    </main>
  );
}