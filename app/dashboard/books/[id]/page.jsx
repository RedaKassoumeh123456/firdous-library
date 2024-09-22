import BookDetails from "@/components/BookDetails"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import DeleteBookButton from "@/components/DeleteBookButton"


const AdminBookPage = ({params}) => {
    return (
        <section className="p-6 md:p-10">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <BookDetails bookId = {params.id}/>
                <div className="mt-1 flex gap-1">
                    <DeleteBookButton bookId={params.id}/>
                    <Link href={`/dashboard/books/edit/${params.id}`} className="py-2 px-3 w-full text-center bg-secondary text-gray-200 rounded-md hover:bg-opacity-85 transition ">تعديل</Link>
                </div>
                <Link href='/dashboard/books' className='p-3  text-secondary text-opacity-70 hover:text-opacity-100 font-bold w-full max-w-[800px] mx-auto flex transition'>
                    <FaArrowRight className='ml-2 mt-[6px]'/><span>عودة إلى الكتب </span> 
                </Link>
            </div>
        </section>
    )
}

export default AdminBookPage
