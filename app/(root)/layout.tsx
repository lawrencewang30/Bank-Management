import MobileNavBar from "@/components/MobileNavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({ // root is route group i.e. (root) so no need to include 'root' in link
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = { firstName: "Lawrence", lastName: "Wang" };
    return (
      <main className="flex h-screen w-full font-inter">
          <SideBar user={loggedIn}/>

          <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image src="/icons/logo.svg" width={30}
              height={30} alt="lpgo" />
              <div>
                <MobileNavBar user={loggedIn} />
              </div>
            </div>
            {children}
          </div>
      </main>
    );
  }