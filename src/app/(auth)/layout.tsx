import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between">
            {children}
            {/* TODO: MAYBE ADD SCREENSHOT OF THE APP'S DASHBOARD */}
            <div className="w-full h-screen sticky top-0 flex items-center justify-center max-lg:hidden">
                <Image
                    src="/images/bg-gradient.svg"
                    alt="gradient background"
                    fill
                    className="object-cover"
                />
            </div>
        </main>
    );
}