export default function RootLayout({ // root is route group i.e. (root) so no need to include 'root' in link
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          SIDEBAR {/* all components that use sidebar */}
          {children}
      </main>
    );
  }