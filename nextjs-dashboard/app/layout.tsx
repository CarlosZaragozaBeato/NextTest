import { montserrat } from "./ui/font";
import "./ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}> 
        {children}

        <footer className="py-10 flex justify-center item-center">GAUCHO WEB</footer>
        </body>
    </html>
  );
}
