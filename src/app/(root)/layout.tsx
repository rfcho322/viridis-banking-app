import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full">
            <Sidebar />
            <div className="flex size-full flex-col">
                <Navbar />
                {children}
            </div>
        </main>
    )
}