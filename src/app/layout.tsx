import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Beavr Policy Management",
  description: "An application to manage policies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root"></div>
        {children}
      </body>
    </html>
  );
}
