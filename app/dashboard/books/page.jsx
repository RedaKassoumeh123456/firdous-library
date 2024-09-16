import Link from "next/link"
import Book from "@/models/Book"
import connectDB from "@/config/database"
import DeleteBookButton from "@/components/DeleteBookButton"
const BooksPage = async () => {

    await connectDB();

    const books = await Book.find();
    // console.log(categories)
    return (
        <section className="p-6 md:p-10 h-[67.5vh]">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <div className="flex justify-between items-center border-b border-black pb-3">
                    <h1 className="text-2xl text-primary ">الكتب :</h1>
                    <Link href='/dashboard/books/add' className="bg-secondary hover:bg-opacity-85 transition flex px-4 pt-2 pb-1 w-fit rounded-xl text-gray-300 font-bold">إضافة<span className="mr-1 text-2xl mt-[-5px] font-semibold">+</span></Link>
                </div>
                <div className="">
                    {books.length > 0 ? books.map((book)=>(
                        <div key={book._id} href={`/dashboard/books/${book._id}`} className="flex flex-col md:flex-row justify-between items-center p-2 border-b border-gray-400 hover:bg-gray-300">
                            <h1 className="text-secondary text-xl ml-auto">{book.bookName}</h1>
                            <div className="flex mt-3 md:mt-0 mr-auto">
                                <Link href={`/dashboard/books/${book._id}`} className="block py-2 px-4 bg-gray-700 rounded-md ml-3 text-gray-200 hover:bg-opacity-85"> تفاصيل</Link>
                                <Link href={`/dashboard/books/edit/${book._id}`} className="block py-2 px-4 bg-secondary rounded-md ml-3 text-gray-200 hover:bg-opacity-85"> تعديل</Link>
                                {/* {const categoryId = cat._id.toString()} */}
                                <DeleteBookButton bookId={JSON.parse(JSON.stringify(book._id))}/>
                            </div>
                        </div>
                    )):(
                        <h1 className="text-2xl text-secondary block p-3 mx-auto text-center">لا يوجد كتب</h1>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BooksPage
