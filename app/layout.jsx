import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import { Alexandria } from "next/font/google";
import MainNavBar from "@/components/MainNavBar";
import AuthProvider from "@/components/AuthProvider";

const alexandria = Alexandria({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // subsets: ["latin","arabic"],
  subsets:["latin"],
});

export const metadata ={
  title:'مكتبة الفردوس',
  description:"مكتبة جامع الفردوس",
  keywords:'مكتبة ,فردوس ,جامع الفردوس',
};

const MainLayout = ({ children }) => {


  return (
    <AuthProvider>
      <html lang="ar" dir="rtl">
        <body className={alexandria.className} lang="ar">
          <MainNavBar /> 
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
