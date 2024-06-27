import SideBar from "@/components/SideBar";

export default function RootLayout({ // root is route group i.e. (root) so no need to include 'root' in link
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = { firstName: "Lawrence", lastName: "Wang" };
    return (
      <main className="flex h-screen w-full font-inter">
          <SideBar user={loggedIn}/>
          {children}
      </main>
    );
  }