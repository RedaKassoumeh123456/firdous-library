import "@/assets/styles/global.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
});

const MainLayout = ({ children }) => {
  return (
    <html lang="ar" dir="rtl">
      <body className={alexandria.className} lang="ar">
        <NavBar /> 
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;
