import type { Metadata } from "next";
import "./styles/globals.css";
import { StoreProvider } from "./storeProvider";

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
    <StoreProvider>
      <html lang="en">
        <body>
          <div id="root"></div>

            {children}
        </body>
      </html>
    </StoreProvider>
  );
}
