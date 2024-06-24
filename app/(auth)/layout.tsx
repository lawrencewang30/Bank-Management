export default function RootLayout({ // auth is route group i.e. (auth) so no need to include 'auth' in link
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children} {/* no sidebar component unlike layout.tsx in root */}
    </main>
  );
}
