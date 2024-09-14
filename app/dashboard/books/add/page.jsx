import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
const AddBookPage = () => {
    return (
        <section className="p-5 ">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <form action="">
                    <h1 className="text-xl text-primary">إضافة كتاب :</h1>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="bookName" className="text-lg text-secondary w-full">اسم الكتاب  : </label>
                        <input type="text" name="bookName" id="bookName" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="authorName" className="text-lg text-secondary w-full">اسم المؤلف  : </label>
                        <input type="text" name="authorName" id="authorName" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="description" className="text-lg text-secondary w-full">وصف الكتاب  : </label>
                        <textarea type="text" name="description" id="description" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 " required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="summary" className="text-lg text-secondary w-full">ملخص الكتاب  : </label>
                        <textarea type="text" name="summary" id="summary" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 h-28" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="img" className="text-lg text-secondary w-full">اسم الصورة  : </label>
                        <input type="text" name="img" id="img" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <button type="submit" className="w-[200px] text-center block mx-auto bg-secondary p-2 rounded-full text-gray-50 hover:bg-opacity-80 mt-4">
                        إضافة الكتاب
                    </button>
                </form>
            </div>
            
            <Link href='/dashboard/books' className='p-3  text-primary text-opacity-70 hover:text-opacity-100 font-bold w-full max-w-[800px] mx-auto flex transition'>
                <FaArrowRight className='ml-2 mt-[6px]'/><span>عودة إلى الكتب </span> 
            </Link>
        </section>
    )
}

export default AddBookPage
