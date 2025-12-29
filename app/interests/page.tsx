import IntrestsNavbar from "@/components/interests/InterestsNavbar";
import IntrestsBody from "@/components/interests/InterestsBody";
import IntrestsFooter from "@/components/interests/InterestsFooter";


export default function IntrestsPage() {
  return (
    <main className="bg-[#FDFBF7]">
      <IntrestsNavbar />
      <IntrestsBody />
      <IntrestsFooter />
    </main>
  );
}