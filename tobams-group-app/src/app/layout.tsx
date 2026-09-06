import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
	weight: ["600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Tobams Group | Training & Development",
	description:
		"Tobams Group's Training and Development programs: leadership development, management coaching, and career growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${nunito.variable} ${nunitoSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col font-sans">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
