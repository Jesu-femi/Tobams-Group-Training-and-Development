import { Zap } from "lucide-react";

type FeatureBlockProps = {
	title: string;
	description: string;
	bullets: string[];
	imageAlt: string;
	imagePosition?: "left" | "right";
};

export default function FeatureBlock({
	title,
	description,
	bullets,
	imageAlt,
	imagePosition = "left",
}: FeatureBlockProps) {
	return (
		<div className="flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
			<div
				className={`aspect-3/2 w-full shrink-0 rounded-tl-3xl rounded-br-3xl bg-zinc-400 lg:w-1/2 ${
					imagePosition === "right" ? "lg:order-last" : ""
				}`}
				aria-label={imageAlt}
				role="img">
				{/* 🖼️ IMAGE NEEDED: {imageAlt} */}
			</div>

			<div className="flex flex-1 flex-col items-start gap-5">
				<h2 className="font-heading text-3xl font-semibold tracking-wide text-brand-text sm:text-4xl">
					{title}
				</h2>
				<p className="text-lg text-zinc-500">{description}</p>
				<ul className="flex flex-col gap-1.5 pl-2">
					{bullets.map((bullet) => (
						<li key={bullet} className="flex items-center gap-3">
							<Zap
								className="size-4 shrink-0 fill-brand-primary text-brand-primary"
								aria-hidden="true"
							/>
							<span className="text-lg text-zinc-500">{bullet}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
