"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Aisha Yusuf",
		role: "Founder, CraftHub NG",
		quote:
			"Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
		image: "/Testimonia1.jpg",
	},
	{
		name: "John Davies",
		role: "Marketing Manager, E-Commerce Emporium",
		quote:
			"Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
		image: "/Testimonia2.jpg",
	},
	{
		name: "Chinonso Nwankwo",
		role: "HR Director, FutureTech Solutions",
		quote:
			"Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
		image: "/Testimonia3.jpg",
	},
	{
		name: "Rita Ahmed",
		role: "Creative Director, ArtInnovate Studios",
		quote:
			"The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
		image: "/Testimonia4.jpg",
	},
	{
		name: "David Johnson",
		role: "Small Business Owner",
		quote:
			"Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
		image: "/Testimonia5.jpg",
	},
	{
		name: "Femi Adekunle",
		role: "IT Professional",
		quote:
			"As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable.",
		image: "/Testimonia6.jpg",
	},
];

export default function Testimonials() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		scrollRef.current?.scrollBy({
			left: direction === "left" ? -400 : 400,
			behavior: "smooth",
		});
	};

	return (
		<section className="border-b border-zinc-300/30 px-6 py-16 md:px-16">
			<div className="flex flex-col gap-10">
				<h2 className="text-center font-heading text-3xl font-bold text-brand-text sm:text-4xl">
					Testimonials
				</h2>

				<div
					ref={scrollRef}
                    tabIndex={0}
					className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="flex w-full shrink-0 snap-start flex-col gap-6 rounded-2xl border-l-2 border-brand-secondary bg-white px-6 py-5 shadow-sm sm:w-93.5">
							<div className="flex items-center gap-5">
								{testimonial.image ? (
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										width={44}
										height={44}
										className="size-11 shrink-0 rounded-full object-cover"
									/>
								) : (
									<div className="size-11 shrink-0 rounded-full bg-zinc-400" />
								)}
								<div className="flex flex-col">
									<p className="text-base font-semibold text-brand-text">
										{testimonial.name}
									</p>
									<p className="text-sm text-[#696969]">{testimonial.role}</p>
								</div>
							</div>
							<p className="text-lg text-brand-text">{testimonial.quote}</p>
						</div>
					))}
				</div>

				<div className="flex items-center justify-end gap-3">
					<button
						type="button"
						aria-label="Scroll testimonials left"
						onClick={() => scroll("left")}
						className="flex size-8 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary hover:bg-brand-secondary/30  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
						<ChevronLeft className="size-5" aria-hidden="true" />
					</button>
					<button
						type="button"
						aria-label="Scroll testimonials right"
						onClick={() => scroll("right")}
						className="flex size-8 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary hover:bg-brand-secondary/30  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
						<ChevronRight className="size-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</section>
	);
}
