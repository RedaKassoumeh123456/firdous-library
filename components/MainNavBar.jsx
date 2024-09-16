'use client'
import NavBar from "./NavBar"
import AdminNavBar from "./AdminNavbar"
import { usePathname } from "next/navigation"
const MainNavBar = () => {
    const pathName = usePathname();

    let isAdmin;



    if (pathName.length > 9){
        const nextPath=pathName.slice(0,10);
        if (nextPath === '/dashboard')isAdmin=true;
        else isAdmin = false;
    }

    return isAdmin?(
        <AdminNavBar />
    ):(
        <NavBar />
    )
}

export default MainNavBar
