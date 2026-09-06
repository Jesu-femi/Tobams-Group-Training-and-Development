import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const skills = [
	"Strategic Career Guidance",
	"Leadership Development",
	"CV Development",
	"Sustainability Leadership",
	"Communication Skills",
	"Business Model",
];

export default function TransformationHub() {
	return (
		<section className="px-6 py-16 md:px-16 xl:py-28">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-2xl bg-brand-secondary/20 p-6 md:p-10">
				<div className="flex flex-col gap-2">
					<p className="font-heading text-xl font-semibold italic text-[#1671d9]">
						Learning With Our CEO:
					</p>
					<h2 className="font-heading text-2xl font-semibold italic text-brand-primary sm:text-3xl">
						Transformation Hub With Jite Newton
					</h2>
					<p className="pt-2 text-lg text-brand-text">
						Transformation Hub with Jite Newton is a flagship webinar series
						curated by the CEO, Dr. Jite Newton. Designed to elevate career
						trajectories and leadership capabilities, this exclusive event
						offers invaluable insights and strategies for personal and
						professional growth. Whether you&apos;re seeking to advance your
						career or enhance your leadership skills, the Transformation Hub
						provides a transformative learning experience to unlock your full
						potential and drive success in your endeavours.
					</p>
				</div>

				<div className="flex w-full flex-col items-stretch gap-8 xl:flex-row">
					<div className="relative aspect-4/3 w-full overflow-hidden rounded-lg xl:aspect-auto xl:h-auto xl:w-140 xl:shrink-0">
						<Image
							src="/TransformationHubImage.jpg"
							alt="A woman standing before a glass wall of glowing data visualizations, moody blue and amber lighting"
							fill
							className="object-cover"
						/>
					</div>

					<div className="flex flex-1 flex-col gap-6 rounded-lg bg-white/30 px-5 py-8">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
							{skills.map((skill) => (
								<div
									key={skill}
									className="flex items-center gap-2.5 rounded-xl bg-white p-4">
									<Zap
										className="size-7 shrink-0 fill-brand-primary text-brand-primary"
										aria-hidden="true"
									/>
									<p className="text-lg text-brand-text">{skill}</p>
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
				</div>
			</div>
		</section>
	);
}
