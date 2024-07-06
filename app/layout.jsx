import "@/assets/styles/global.css";

import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
});

const MainLayout = ({ children }) => {
  return (
    <html lang="ar">
      <body className={alexandria.className}>{children}</body>
    </html>
  );
};

export default MainLayout;
