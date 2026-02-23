import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "THE CUT — Premium Steakhouse",
  description:
    "Premium steakhouse restaurant - Experience the finest cuts, aged 28 days for perfection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${bebasNeue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
