import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full">
            <Sidebar />
            <div className="flex size-full flex-col">
                {children}
            </div>
        </main>
    )
}