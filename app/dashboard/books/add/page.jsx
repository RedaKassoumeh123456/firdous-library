import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import Category from "@/models/Category"
import connectDB from "@/config/database"
import addBook from "@/app/actions/addBook"

const AddBookPage = async () => {

    await connectDB();

    const categories = await Category.find();


    // const categories=[];

    // console.log(categories);

    return (
        <section className="p-5 ">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <form action={addBook}>
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
                        <textarea type="text" name="description" id="description" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 " />
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="summary" className="text-lg text-secondary w-full">ملخص الكتاب  : </label>
                        <textarea type="text" name="summary" id="summary" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 h-28"/>
                    </div>
                    <div className="flex-col p-3">
                        <label htmlFor="category" className="text-lg text-secondary w-full">تصنيف الكتاب  : </label>
                        <select
                            id="category"
                            name="category"
                            defaultValue="0"
                            className="p-3 bg-gray-100 rounded-xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3"
                        >
                            {categories.length > 0 && categories.map((category)=>(
                                <option  key={JSON.parse(JSON.stringify(category._id))} value={JSON.parse(JSON.stringify(category._id))} >{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex py-2 px-4">
                        <input
                            type="checkbox"
                            id="available"
                            name="available"
                            value={true}
                            className="ml-2"
                            defaultChecked
                        />
                        <label htmlFor="available" className="text-primary text-lg">متاح للإستعارة</label>
                    </div>
                    <div className="flex items-center p-3">
                        <label htmlFor="img" className="text-lg text-secondary w-full"
                            >صورة الكتاب  ( <span className="text-primary">صورة واحدة</span> ) :</label
                        >
                        <input
                            type="file"
                            id="img"
                            name="img"
                            className="border bg-primary rounded-lg text-gray-300 w-full py-2 px-3"
                            accept="image/*"
                        />
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
