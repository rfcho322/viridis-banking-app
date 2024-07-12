import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between">
            {children}
            <div className="w-full h-screen sticky top-0 flex items-center justify-center max-lg:hidden">
                <Image
                    src="/images/bg-gradient.svg"
                    alt="gradient background"
                    fill
                    className="object-cover"
                />
                {/* TODO: TEMPORARILY ADDED DASHBOARD PREVIEW, CHANGE LATER AND ADD MOBILE PREVIEW */}
                <Image
                    src="/images/viridis-dashboard.webp"
                    alt="viridish dashboard preview"
                    width={1000}
                    height={1000}
                    className="z-10"
                />
            </div>
        </main>
    );
}