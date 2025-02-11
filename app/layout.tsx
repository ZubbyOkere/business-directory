export const metadata = {
  title: "Business Directory app",
  description: "Created by Zubby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
