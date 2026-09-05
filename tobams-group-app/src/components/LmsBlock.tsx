import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const courses = [
	"Business Analysis",
	"Design Thinking",
	"Effective Communication",
	"Entrepreneurship",
	"Career Development",
	"Business Model",
];

export default function LmsBlock() {
	return (
		<section className="flex flex-col items-center bg-brand-primary/10 px-6 py-10 md:px-16 md:py-12">
			<div className="flex w-full max-w-6xl flex-col items-center gap-10 xl:flex-row xl:gap-20">
				<div className="relative aspect-square w-full max-w-sm shrink-0 overflow-hidden rounded-full xl:max-w-md">
					<Image
						src="/LmsImage.jpg"
						alt="Two colleagues, a man and a woman, smiling together in a bright office"
						fill
						className="object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col items-start gap-8">
					<div className="flex flex-col gap-5">
						<h2 className="font-heading text-3xl font-semibold tracking-wide text-brand-primary sm:text-4xl">
							Learning Management System
						</h2>
						<div className="flex flex-col gap-10 rounded-lg bg-brand-primary/10 p-6">
							<p className="text-lg text-brand-text">
								TG Academy is a hub of knowledge and skill-building resources
								designed to empower tech talents on their learning journey. From
								technical courses covering the latest programming languages and
								development frameworks to soft skills training in leadership,
								effective communication and project management, TG Academy
								offers a wide range of courses to cater to diverse learning
								needs. With accessible and interactive learning materials,
								individuals can enhance their skills and stay ahead in
								today&apos;s competitive tech landscape.
							</p>
							<div className="flex flex-col gap-3">
								<p className="font-bold text-brand-primary">
									Some of our courses include:
								</p>
								<ul className="grid grid-cols-1 gap-x-6 gap-y-2 pl-5 text-brand-text sm:grid-cols-3">
									{courses.map((course) => (
										<li key={course} className="list-disc">
											{course}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<a
						href="#learn-more"
						className="flex items-center gap-2 rounded bg-brand-primary px-6 py-[10.5px] font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
						Learn More
						<ArrowUpRight className="size-6" aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	);
}
