import Hero from "@/components/Hero";
import LmsBlock from "@/components/LmsBlock";
import TrainingPrograms from "@/components/TrainingPrograms";

export default function Home() {
	return (
		<main id="top" className="flex-1">
			<Hero />
			<LmsBlock />
			<TrainingPrograms />
		</main>
	);
}
