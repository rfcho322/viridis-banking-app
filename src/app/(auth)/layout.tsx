'use client'
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between">
            <div className="w-full h-screen sticky top-0 flex items-center justify-center max-lg:hidden bg-gradient-to-r from-blue-500 to-green-400">
                {/* <Image
                    src="/images/bg-gradient.svg"
                    alt="gradient background"
                    fill
                    className="object-cover"
                /> */}
                <Image
                    src="/images/viridis-showcase2.webp"
                    alt="viridish dashboard preview"
                    width={800}
                    height={800}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    className="z-10"
                />
            </div>
            {children}
        </main>
    );
}