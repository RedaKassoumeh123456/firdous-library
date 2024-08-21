"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
const NavBar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

    const pathName = usePathname();
    return (
        <nav className='bg-white shadow-sm shadow-primary rounded-b-[5px] pr-1 h-16 w-full flex justify-between md:justify-start gap-4 relative'>
            {/* links */}
            <div className="logo h-full flex items-center gap-2">
                <img src="https://placeholder.com/250x250" className="h-full p-3 pl-0"  alt="" />
                <span className="text-secondary text-lg">مكتبة الفردوس</span>
            </div>
            <div className='hidden md:flex links items-center justify-start h-full gap-4'>
                <span className={` ${pathName === "/"? "font-bold bg-secondary bg-opacity-70":"hover:text-secondary"} p-3 text-primary  text-lg transition-colors h-full `}>
                    <Link href="/" className="h-full flex items-center">الكتب</Link>
                </span>
                <span className={` ${pathName === "/about"? "font-bold bg-secondary bg-opacity-70":"hover:text-secondary"} p-3 text-primary  text-lg transition-colors h-full `}>
                    <Link href="/about" className="h-full flex items-center">من نحن</Link>
                </span>
                <span className={` ${pathName === "/contact"? "font-bold bg-secondary bg-opacity-70":"hover:text-secondary"} p-3 text-primary  text-lg transition-colors h-full `}>
                    <Link href="/contact" className="h-full flex items-center">تواصل معنا</Link>
                </span>
            </div>
            <button
                type="button"
                id="mobile-dropdown-button"
                className={` ml-2 relative px-4 inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-400 border-2  ${isMobileMenuOpen?" border-black":"border-white"}   `}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick = {() => setIsMobileMenuOpen((prev)=>!prev)}
                >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <div className={`${isMobileMenuOpen?"flex-col":"hidden"} p-4 pt-0 justify-start gap-4 absolute top-16 -right-[0.25px] w-screen bg-primary bg-opacity-80 `}>
                <span className={`text-secondary text-lg w-full `}>
                    <Link href="/" className="h-full flex items-center p-2 border-b-white border-b-[1px] border-opacity-50">الكتب</Link>
                </span>
                <span className={`text-secondary text-lg w-full `}>
                    <Link href="/about" className="h-full flex items-center p-2 border-b-white border-b-[1px] border-opacity-50">من نحن</Link>
                </span>
                <span className={`text-secondary text-lg w-full `}>
                    <Link href="/contact" className="h-full flex items-center p-2 border-b-white border-b-[1px] border-opacity-50"> تواصل معنا</Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar

