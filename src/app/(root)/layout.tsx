import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = await getLoggedInUser()

    if (!loggedIn) redirect('/sign-in')

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