export default function Cta() {
	return (
		<section className="px-6 py-16 md:px-16 lg:py-28">
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 rounded-lg bg-brand-primary px-6 py-8 md:px-16">
				<p className="text-center text-xl font-semibold tracking-wide text-white">
					Want to accelerate professional growth and development at your
					organisation? See how we can help.
				</p>
				<a
					href="#book-a-consultation"
					className="flex h-12 items-center justify-center rounded border border-brand-primary bg-white px-6 font-semibold text-brand-primary hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
					Book a Consultation
				</a>
			</div>
		</section>
	);
}
