import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src="/logo.svg"
			alt="Tobams Group logo"
			width={166}
			height={64}
			priority
		/>
	);
}
