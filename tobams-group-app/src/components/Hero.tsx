import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center gap-10 overflow-hidden px-6 py-16 md:px-16 lg:py-28">
			<Image
				src="/hero.jpg"
				alt="A woman reviewing data on a laptop, surrounded by abstract charts and graphics"
				fill
				priority
				className="object-cover -z-20"
			/>
			<div className="absolute inset-0 -z-10 bg-black/70" />

			<div className="flex flex-col items-center gap-3 text-center">
				<span className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white sm:px-12">
					WHAT WE DO
				</span>
				<h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
					Training and Development
				</h1>
				<p className="max-w-3xl text-base font-semibold text-white sm:text-lg">
					Our comprehensive range of programs and resources is designed to
					enhance skills, broaden knowledge, and propel careers forward in
					today&apos;s ever-evolving landscape.
				</p>
			</div>

			<a
				href="#book-a-consultation"
				className="flex h-12 items-center justify-center rounded bg-brand-primary px-6 font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
				Book a Consultation
			</a>
		</section>
	);
}
