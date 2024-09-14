import BookDetails from "@/components/BookDetails"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
const ClientBookPage = ({params}) => {
    return (
        <section className="p-6 md:p-10">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <BookDetails bookId = {params.id}/>
                <Link href='/' className='p-3  text-secondary text-opacity-70 hover:text-opacity-100 font-bold w-full max-w-[800px] mx-auto flex transition'>
                    <FaArrowRight className='ml-2 mt-[6px]'/><span>عودة إلى صفحة الكتب </span> 
                </Link>
            </div>
        </section>
    )
}

export default ClientBookPage
