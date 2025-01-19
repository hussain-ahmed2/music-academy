import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "A music academy website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
