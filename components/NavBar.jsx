import Link from "next/link"

const NavBar = () => {
    return (
        <nav className='bg-secondary  p-3 pr-5 h-16 w-full '>
            {/* links */}
            <div className='links flex items-center justify-start h-full gap-4'>
                <span className="h-full">
                    <Link href="/" className="h-full w-full flex items-center gap-2">
                        <img src="https://placeholder.com/250x250" className="h-full"  alt="" />
                        <span className="text-primary txt-7xl">مكتبة الفردوس</span>
                    </Link>
                </span>
                <span className="txt-white">
                    <Link href="/">المكتبة</Link>
                </span>
                <span className="txt-white">
                    <Link href="/">المكتبة</Link>
                </span>
                <span className="txt-white">
                    <Link href="/">المكتبة</Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar


