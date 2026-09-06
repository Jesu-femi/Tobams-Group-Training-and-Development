import { ArrowUpRight } from "lucide-react";

const features = [
	{
		title: "Expert-Led Learning",
		description:
			"Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
	},
	{
		title: "Interactive Workshops",
		description:
			"Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
	},
	{
		title: "Comprehensive Curriculum",
		description:
			"Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
	},
	{
		title: "Global Recognition",
		description:
			"You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
	},
];

export default function TrainingConsultant() {
	return (
		<section className="bg-brand-primary/10 px-6 py-12 md:px-16">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
				<div className="flex flex-col gap-3">
					<h2 className="font-heading text-3xl font-semibold text-brand-primary sm:text-4xl">
						Training The Consultant
					</h2>
					<p className="text-lg font-semibold text-brand-primary">
						Maximise Your Potential as a Certified Trainer:
					</p>
					<p className="text-lg text-brand-text">
						With the help of our Training Consultants program, take a
						revolutionary step toward becoming a distinguished certified
						training consultant. Learn from professionals in the field, immerse
						yourself in a thorough curriculum, and hone your training methods
						through interactive workshops. Participating in our program will
						enable you to gain expertise in diverse courses while also
						developing the abilities to mentor and encourage others in their
						career advancement.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 rounded-lg bg-brand-primary p-6 sm:grid-cols-2 md:p-8">
					{features.map((feature) => (
						<div key={feature.title} className="flex flex-col gap-3">
							<p className="text-lg font-bold text-white">{feature.title}</p>
							<p className="text-lg text-white">{feature.description}</p>
						</div>
					))}
				</div>

				<a
					href="#learn-more"
					className="flex w-fit items-center gap-2 rounded bg-brand-primary px-6 py-[10.5px] font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
					Learn More
					<ArrowUpRight className="size-6" aria-hidden="true" />
				</a>
			</div>
		</section>
	);
}
