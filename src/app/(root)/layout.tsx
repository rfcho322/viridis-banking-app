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

    // console.log(loggedIn)

    return (
        <main className="flex h-screen w-full !max-w-screen-2xl mx-auto bg-[#F5F7FA]">
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col overflow-auto">
                <Navbar user={loggedIn} />
                {children}
            </div>
        </main>
    )
}