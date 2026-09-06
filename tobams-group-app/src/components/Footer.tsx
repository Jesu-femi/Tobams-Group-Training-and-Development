import { Mail, Phone, X } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const whatWeDo = [
	"Sustainability Services",
	"Strategy Planning and Implementation",
	"Tech Talent Solutions",
	"Training and Development",
	"IT Consulting Services",
	"Social Impact",
	"Talent Recruitment",
];

const company = [
	"About",
	"Jobs",
	"Projects",
	"Our Founder",
	"Business Model",
	"The Team",
	"Contact Us",
	"Blog",
	"FAQs",
	"Testimonials",
];

const solution = [
	"Tobams Group Academy",
	"Help a Tech Talent",
	"Campus Ambassadors Program",
	"Join Our Platform",
	"Pricing",
	"Book a Consultation",
	"Join Our Slack Community",
];

function FooterLinkColumn({
	title,
	links,
}: {
	title: string;
	links: string[];
}) {
	return (
		<nav aria-label={title}>
			<p className="font-heading text-xl font-bold text-white">{title}</p>
			<ul className="mt-4 flex flex-col gap-3">
				{links.map((link) => (
					<li key={link}>
						<a
							href="#"
							className="text-base text-white hover:underline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							{link}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default function Footer() {
	return (
		<footer className="bg-brand-darkest px-6 py-8 md:px-16">
			<div className="flex flex-col gap-10 py-5 lg:flex-row lg:justify-between">
				<div className="flex flex-col gap-6">
					<Logo />
					<p className="max-w-89 text-base text-[#f8f8f8]">
						Tobams Group is an innovative consultancy firm reshaping the future
						of tech talent development in Africa, specializing in talent
						acquisition, internships, and skill development with a global
						perspective.
					</p>
					<div className="flex gap-5">
						<a
							href="#"
							aria-label="Tobams Group on LinkedIn"
							className="flex size-10 items-center justify-center rounded-full bg-[#0A66C2] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							<FaLinkedin className="size-5" aria-hidden="true" />
						</a>

						<a
							href="#"
							aria-label="Tobams Group on Instagram"
							className="flex size-10 items-center justify-center rounded-full bg-brand-secondary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							<FaInstagram className="size-5" aria-hidden="true" />
						</a>

						<a
							href="#"
							aria-label="Tobams Group on X"
							className="flex size-10 items-center justify-center rounded-full bg-white text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
							<X className="size-5" aria-hidden="true" />
						</a>
					</div>
				</div>

				<FooterLinkColumn title="What We Do" links={whatWeDo} />
				<FooterLinkColumn title="Company" links={company} />
				<FooterLinkColumn title="Solution" links={solution} />
			</div>

			<div className="flex flex-col gap-6 rounded-lg bg-white/6 p-6 md:flex-row">
				<div className="flex flex-1 flex-col gap-4 border-b border-white/20 pb-6 md:flex-row md:border-b-0 md:border-r md:pb-0 md:pr-6">
					<div className="flex-1">
						<p className="font-heading text-xl font-bold text-white">
							Registered Offices
						</p>
						<p className="mt-2 text-base text-white">
							<span className="font-semibold text-brand-secondary">
								United Kingdom
							</span>
							<br />
							07451196 (Registered by Company House)
							<br />
							Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
							RM1 4QA
						</p>
					</div>
					<div className="flex-1">
						<p className="font-semibold text-brand-secondary">Nigeria</p>
						<p className="mt-2 text-base text-white">
							RC 1048722 (Registered by the Corporate Affairs Commission)
							<br />
							4, Muaz Close, Angwar-Rimi
						</p>
					</div>
				</div>

				<div className="flex-1 md:pl-6">
					<p className="font-heading text-xl font-bold text-white">
						Contact Information
					</p>
					<div className="mt-4 flex flex-col gap-3">
						<a
							href="mailto:theteam@tobamsgroup.com"
							className="flex items-center gap-4 text-base text-white hover:underline">
							<Mail className="size-6" aria-hidden="true" />
							theteam@tobamsgroup.com
						</a>

						<a
							href="tel:+447886600748"
							className="flex items-center gap-4 text-base text-white hover:underline">
							<Phone className="size-6" aria-hidden="true" />
							+447886600748
						</a>
					</div>
				</div>
			</div>

			<div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-6 text-white sm:flex-row sm:items-center sm:justify-between">
				<p>Copyright © Tobams Group, 2024. All rights reserved.</p>
				<div className="flex flex-wrap gap-6">
					<a href="#" className="underline hover:no-underline">
						Terms and Conditions
					</a>
					<a href="#" className="underline hover:no-underline">
						Privacy Policy
					</a>
					<a href="#" className="underline hover:no-underline">
						Cookies Policy
					</a>
				</div>
			</div>
		</footer>
	);
}
