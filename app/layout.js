import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google"
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const inter =Inter({subsets : ["latin"]});

export const metadata = {
  title: "TaskVault",
  description: "Project Managment App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:shadesOfPurple,
      variables : {
        colorPrimary : "#3b82f6",
        colorBackground : "#1a202c",
        colorInputBackground : "#2D3748",
        colorInputText : "#f3f4f6",
      },
      elements: {
        formButtonPrimary: "text-white",
        card : "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gray-400",
      }
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}
      > 
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made by team TaskVault</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}