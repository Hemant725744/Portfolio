import ProjectsNavbar from "@/components/projects/ProjectsNavbar";
import ProjectsBody from "@/components/projects/ProjectsBody";
import ProjectsFooter from "@/components/projects/ProjectsFooter";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <ProjectsNavbar />
      <ProjectsBody />
      <ProjectsFooter />
    </main>
  );
}