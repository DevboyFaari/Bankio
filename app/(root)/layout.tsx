import Image from "next/image";
import SideBar from "../components/SideBar";
import MobileNavbar from "../components/ui/MobileNavbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await getLoggedInUser();
   if (!isLoggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={isLoggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/bank-logo.jpg"
            width={34}
            height={34}
            alt="menu icon"
          />
          <div>
            <MobileNavbar user={isLoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
