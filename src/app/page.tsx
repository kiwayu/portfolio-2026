import Nav from "@/components/Nav";
import PanelGrid from "@/components/PanelGrid";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <PanelGrid projects={projects} />
    </>
  );
}
