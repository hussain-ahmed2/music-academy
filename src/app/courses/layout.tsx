import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Courses",
    description: "A music academy website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
            {children}
        </>
  );
}
