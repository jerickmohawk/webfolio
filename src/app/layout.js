import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/provider/ThemeProvider";
import {ThemeContext} from "@/provider/ThemeProvider";
import Header from "@/components/Header";
import Template from "./template";
import { useContext } from "react";

const mont = Montserrat({ 
  subsets: ["latin"] ,
  weight: ['100' ,'300', '400' , '500', '700', '900'],
  variable: '--font-mont'
});

const sans = Open_Sans({ 
  subsets: ["latin"] ,
  weight: ['300', '400' , '500', '600','700', '800'],
  variable: '--font-sans'
});

export const metadata = {
  title: "Jerick",
  description: "This site showcases the projects I've created, highlighting my skills in crafting visually appealing, user-friendly, and high-performing digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${sans.variable} ${mont.variable}`} lang="en">
        <ThemeProvider>
          <Header />
          <Template>
            <main className={`max-w-[1920px] mx-auto `}>
                {children}
            </main>
          </Template>
        </ThemeProvider>
    </html>
  );
}
