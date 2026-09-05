"use client";

import { useState } from "react";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
	{ label: "About", href: "#about", hasDropdown: true },
	{ label: "What We Do", href: "#what-we-do", hasDropdown: true },
	{ label: "Jobs", href: "#jobs", hasDropdown: true },
	{ label: "Projects", href: "#projects" },
	{ label: "TG Academy", href: "#tg-academy" },
	{ label: "Strategic Partnership", href: "#strategic-partnership" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Book a Consultation", href: "#book-a-consultation" },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="w-full bg-white">
			<div className="flex h-26 items-center justify-between border-b border-brand-border px-6 py-6 lg:px-16">
				<a href="#top">
					<Logo />
				</a>

				<div className="hidden items-center gap-6 lg:flex">
					<a
						href="#account"
						className="flex items-center gap-3 rounded border border-brand-primary bg-brand-primary px-4 py-2 text-white hover:bg-brand-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
						<User className="size-5" aria-hidden="true" />
						<span className="flex items-center gap-1 font-semibold">
							Account
							<ChevronDown className="size-4" aria-hidden="true" />
						</span>
					</a>
					<a
						href="#take-assessment"
						className="rounded bg-brand-secondary px-5 py-[10.5px] font-semibold text-white hover:bg-brand-secondary/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
						Take Assessment
					</a>
				</div>

				<button
					type="button"
					className="flex items-center justify-center rounded p-2 lg:hidden focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					onClick={() => setIsMenuOpen((open) => !open)}>
					{isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
				</button>
			</div>

			<nav
				aria-label="Primary"
				className="hidden justify-center gap-8 border-b border-brand-border px-16 py-5 lg:flex">
				<ul className="flex items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								aria-current={link.label === "About" ? "page" : undefined}
								className={`flex items-center gap-1 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
									link.label === "About"
										? "border-b border-brand-primary pb-0.5 font-semibold text-brand-primary"
										: "text-brand-text hover:text-brand-primary"
								}`}>
								{link.label}
								{link.hasDropdown && <ChevronDown className="size-5" />}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{isMenuOpen && (
				<nav
					id="mobile-nav"
					aria-label="Primary"
					className="flex flex-col gap-4 border-b border-brand-border px-6 py-6 lg:hidden">
					<ul className="flex flex-col gap-4">
						{navLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className={`flex items-center gap-1 text-lg ${
										link.label === "About"
											? "font-semibold text-brand-primary"
											: "text-brand-text"
									}`}
									onClick={() => setIsMenuOpen(false)}>
									{link.label}
									{link.hasDropdown && <ChevronDown className="size-5" />}
								</a>
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-3 pt-2">
						<a
							href="#account"
							className="flex items-center justify-center gap-3 rounded border border-brand-primary bg-brand-primary px-4 py-2 font-semibold text-white">
							<User className="size-5" />
							Account
						</a>
						<a
							href="#take-assessment"
							className="rounded bg-brand-secondary px-5 py-[10.5px] text-center font-semibold text-white">
							Take Assessment
						</a>
					</div>
				</nav>
			)}
		</header>
	);
}
