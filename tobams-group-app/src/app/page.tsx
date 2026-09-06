import Hero from "@/components/Hero";
import LmsBlock from "@/components/LmsBlock";
import TrainingPrograms from "@/components/TrainingPrograms";
import ManagementProgram from "@/components/ManagementProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
	return (
		<main id="top" className="flex-1">
			<Hero />
			<LmsBlock />
			<TrainingPrograms />
			<ManagementProgram />
			<TransformationHub />
			<TrainingConsultant />
			<Cta />
			<Testimonials />
			<FinalCta />
		</main>
	);
}
