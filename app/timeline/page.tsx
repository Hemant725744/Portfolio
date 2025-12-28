import TimelineNavbar from "@/components/timeline/TimelineNavbar";
import TimelineBody from "@/components/timeline/TimelineBody";
// 1. Import the new component
// import TimelineProof from "@/components/timeline/TimelineProof";
import TimelineFooter from "@/components/timeline/TimelineFooter";
import TimelineUnified from "@/components/timeline/TimelineUnified";

export default function TimelinePage() {
  return (
    <main className="min-h-screen">
      <TimelineNavbar />
      
      {/* The main timeline line */}
      <TimelineBody />
      
      {/* 2. Add the new Proof section below it */}
      <TimelineUnified />
      <TimelineFooter />
    </main>
  );
}