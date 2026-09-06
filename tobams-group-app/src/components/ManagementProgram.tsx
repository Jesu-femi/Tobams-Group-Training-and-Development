import Image from "next/image";
import { Zap } from "lucide-react";

const benefits = [
	"Enhanced Leadership Skills",
	"Improved Employee Engagement",
	"Stronger Organisational Culture",
	"Sustainable Growth",
];

export default function ManagementProgram() {
	return (
		<section className="px-6 py-16 md:px-16 lg:py-28">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-2xl bg-brand-dark p-6 md:p-10 lg:flex-row lg:items-stretch lg:gap-12">
				<div className="relative aspect-4/5 w-full overflow-hidden rounded-lg lg:aspect-auto lg:h-auto lg:flex-1">
					<Image
						src="/Managementimage.jpg"
						alt="Three colleagues collaborating over a tablet in a bright office corridor"
						fill
						sizes="(min-width: 1024px) 50vw, 100vw"
						className="object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col items-start gap-8">
					<div className="flex flex-col gap-3">
						<h2 className="font-heading text-3xl font-semibold tracking-wide text-white sm:text-4xl">
							Management Development Program
						</h2>
						<p className="text-lg text-white">
							Tobams Group offers a comprehensive Management Development Program
							designed to equip corporate organisations with the high-performing
							leaders they need to thrive.
						</p>
						<p className="text-lg text-white">
							Our program includes workshops, seminars, coaching sessions,
							online courses, and experiential learning opportunities designed
							to improve leadership, strategic thinking, communication, and
							other essential managerial competencies for corporate
							organisations.
						</p>
					</div>

					<ul className="flex w-full flex-col gap-4">
						{benefits.map((benefit) => (
							<li
								key={benefit}
								className="flex items-center gap-2 rounded-lg bg-brand-tint px-2 py-1">
								<Zap
									className="size-8 shrink-0 fill-white text-white"
									aria-hidden="true"
								/>
								<span className="font-semibold text-white">{benefit}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
