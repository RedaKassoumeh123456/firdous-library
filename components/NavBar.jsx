import Link from "next/link"

const NavBar = () => {
    return (
        <nav className='bg-primary p-3 pr-5'>
            {/* links */}
            <div className='links '>
                <span className="txt-white">
                    <Link href="/">المكتبة</Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar


