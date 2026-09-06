"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Logo from "./Logo";

type NavLink = { label: string; href: string; dropdownItems?: string[] };

const navLinks: NavLink[] = [
	{
		label: "About",
		href: "#about",
		dropdownItems: ["Our Founder", "The Team", "Business Model", "Projects"],
	},
	{
		label: "What We Do",
		href: "#what-we-do",
		dropdownItems: [
			"Sustainability Services",
			"Strategy Planning and Implementation",
			"Tech Talent Solutions",
			"Training and Development",
			"IT Consulting Services",
			"Social Impact",
			"Talent Recruitment",
		],
	},
	{
		label: "Jobs",
		href: "#jobs",
		dropdownItems: [
			"Open Positions",
			"Internships",
			"Campus Ambassadors Program",
		],
	},
	{ label: "Projects", href: "#projects" },
	{ label: "TG Academy", href: "#tg-academy" },
	{ label: "Strategic Partnership", href: "#strategic-partnership" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Book a Consultation", href: "#book-a-consultation" },
];

function NavDropdown({
	label,
	items,
	isActive,
}: {
	label: string;
	items: string[];
	isActive?: boolean;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		function handleClickOutside(event: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		function handleEscape(event: KeyboardEvent) {
			if (event.key === "Escape") setIsOpen(false);
		}

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen]);

	return (
		<div ref={containerRef} className="relative">
			<button
				type="button"
				aria-haspopup="true"
				aria-expanded={isOpen}
				aria-current={isActive ? "page" : undefined}
				onClick={() => setIsOpen((open) => !open)}
				className={`flex items-center gap-1 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
					isActive
						? "border-b border-brand-primary pb-0.5 font-semibold text-brand-primary"
						: "text-brand-text hover:text-brand-primary"
				}`}>
				{label}
				<ChevronDown
					className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
					aria-hidden="true"
				/>
			</button>

			{isOpen && (
				<div
					role="menu"
					className="absolute left-0 top-full z-10 mt-2 flex w-64 flex-col gap-1 rounded-lg border border-brand-border bg-white p-2 shadow-lg">
					{items.map((item) => (
						<a
							key={item}
							href="#"
							role="menuitem"
							className="rounded px-3 py-2 text-base text-brand-text hover:bg-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
							{item}
						</a>
					))}
				</div>
			)}
		</div>
	);
}

function MobileNavAccordionItem({
	label,
	items,
	isActive,
	onNavigate,
}: {
	label: string;
	items: string[];
	isActive?: boolean;
	onNavigate: () => void;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col gap-2">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls={`mobile-submenu-${label}`}
				onClick={() => setIsOpen((open) => !open)}
				className={`flex w-full items-center justify-between gap-1 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
					isActive ? "font-semibold text-brand-primary" : "text-brand-text"
				}`}>
				{label}
				<ChevronDown
					className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
					aria-hidden="true"
				/>
			</button>
			{isOpen && (
				<ul id={`mobile-submenu-${label}`} className="flex flex-col gap-2 pl-4">
					{items.map((item) => (
						<li key={item}>
							<a
								href="#"
								className="text-base text-brand-text/80"
								onClick={onNavigate}>
								{item}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

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
						className="flex items-center gap-3 rounded border border-brand-primary bg-brand-primary px-4 py-2 text-white hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
						<User className="size-5" aria-hidden="true" />
						<span className="flex items-center gap-1 font-semibold">
							Account
							<ChevronDown className="size-4" aria-hidden="true" />
						</span>
					</a>

					<a
						href="#take-assessment"
						className="rounded bg-brand-secondary px-5 py-[10.5px] font-semibold text-white hover:bg-brand-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
						Take Assessment
					</a>
				</div>

				<button
					type="button"
					className="flex items-center justify-center rounded p-2 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
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
							{link.dropdownItems ? (
								<NavDropdown
									label={link.label}
									items={link.dropdownItems}
									isActive={link.label === "About"}
								/>
							) : (
								<a
									href={link.href}
									className="flex items-center gap-1 text-lg text-brand-text hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
									{link.label}
								</a>
							)}
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
						{navLinks.map((link) =>
							link.dropdownItems ? (
								<li key={link.label}>
									<MobileNavAccordionItem
										label={link.label}
										items={link.dropdownItems}
										isActive={link.label === "About"}
										onNavigate={() => setIsMenuOpen(false)}
									/>
								</li>
							) : (
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
									</a>
								</li>
							),
						)}
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
