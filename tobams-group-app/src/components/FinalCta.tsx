export default function FinalCta() {
	return (
		<div className="flex flex-col items-start gap-6 bg-brand-darker px-6 py-10 md:flex-row md:items-center md:justify-between md:px-16">
			<div className="flex flex-col gap-2 text-white">
				<p className="text-lg">
					Ready to be a part of something extraordinary?
				</p>
				<p className="font-heading text-2xl font-semibold sm:text-3xl">
					Let&apos;s work together to create a difference
				</p>
			</div>
			<a
				href="#get-in-touch"
				className="flex h-12 w-fit shrink-0 items-center justify-center rounded bg-brand-primary px-6 font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
				Get In Touch
			</a>
		</div>
	);
}
