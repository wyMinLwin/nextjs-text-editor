import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Next Text Editor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={
					montserrat.className +
					" w-screen h-screen bg-dark text-light overflow"
				}
			>
				{children}
			</body>
		</html>
	);
}
