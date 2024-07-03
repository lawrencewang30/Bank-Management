import Image from "next/image";

export default function RootLayout({ // auth is route group i.e. (auth) so no need to include 'auth' in link
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children} {/* no sidebar component unlike layout.tsx in root, children contain sign-in or sign-up layout depending on link*/}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image.svg" 
            alt="Authorization image" 
            width={600} 
            height={600} />
        </div>
      </div>
    </main>
  );
}
