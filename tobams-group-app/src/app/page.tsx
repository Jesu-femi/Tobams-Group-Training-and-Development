import Hero from "@/components/Hero";
import LmsBlock from "@/components/LmsBlock";
import TrainingPrograms from "@/components/TrainingPrograms";
import ManagementProgram from "@/components/ManagementProgram";

export default function Home() {
	return (
		<main id="top" className="flex-1">
			<Hero />
			<LmsBlock />
			<TrainingPrograms />
			<ManagementProgram />
		</main>
	);
}
