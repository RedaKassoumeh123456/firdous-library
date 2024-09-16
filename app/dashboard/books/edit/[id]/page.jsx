import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import Category from "@/models/Category"
import connectDB from "@/config/database"
import Book from "@/models/Book"
import { convertToSerializableObject } from "@/utils/convertToObject"
import Image from "next/image"
import updateBook from "@/app/actions/updateBook"
const EditBookPage = async ({params}) => {

    await connectDB();

    const categories = await Category.find();
    // const categoryies = []

    const book= await Book.findById(params.id).populate('category','_id').lean();

    let defalutCategoryValue ;
    if (book.category )defalutCategoryValue = book.category._id ;
    else defalutCategoryValue = '0';
    // const book = convertToSerializableObject(bookDoc);
    const updateBookById = updateBook.bind(null,params.id);


    let imgUrl =(book.img ? book.img : '/images/default.jpeg');

    return (
        <section className="p-5 ">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <form action={updateBookById}>
                    <h1 className="text-xl text-primary">تعديل كتاب :</h1>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="bookName" className="text-lg text-secondary w-full">اسم الكتاب  : </label>
                        <input defaultValue={book.bookName} type="text" name="bookName" id="bookName" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="authorName" className="text-lg text-secondary w-full">اسم المؤلف  : </label>
                        <input defaultValue={book.authorName} type="text" name="authorName" id="authorName" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="description" className="text-lg text-secondary w-full">وصف الكتاب  : </label>
                        <textarea defaultValue={book.description} type="text" name="description" id="description" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 " />
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="summary" className="text-lg text-secondary w-full">ملخص الكتاب  : </label>
                        <textarea defaultValue={book.summary} type="text" name="summary" id="summary" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3 h-28"/>
                    </div>
                    <div className="flex-col p-3">
                        <label htmlFor="category" className="text-lg text-secondary w-full">تصنيف الكتاب  : </label>
                        <select
                            id="category"
                            name="category"
                            defaultValue={book.category?JSON.parse(JSON.stringify(book.category._id)):'0'}
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
                            defaultChecked={book.available?true:false}
                        />
                        <label htmlFor="available" className="text-primary text-lg">متاح للإستعارة</label>
                    </div>
                    {imgUrl !== '/images/default.jpeg' && (
                        <>
                            <Image 
                                src={imgUrl} 
                                width={400} 
                                height={400}
                                className='w-full block rounded-md'
                            />
                            <div className="flex py-2 px-4">
                                <input
                                    type="checkbox"
                                    id="deleteImage"
                                    name="deleteImage"
                                    value={true}
                                    className="ml-2"
                                    defaultChecked={false}
                                />
                                <label htmlFor="deleteImage" className="text-primary text-lg">إزالة الصورة السابقة</label>
                            </div>
                        </>
                    )}
                    <div className="flex flex-col md:flex-row md:items-center p-3">
                        <label htmlFor="img" className="text-lg text-secondary w-full"
                            >تغيير صورة الكتاب  ( <span className="text-primary">صورة واحدة</span> ) :</label
                        >
                        <input
                            type="file"
                            id="img"
                            name="img"
                            className="border bg-primary rounded-lg text-gray-300 w-full sm:w-1/2 md:w-full py-2 px-3 mt-2 md:mt-0 mr-auto"
                            accept="image/*"
                        />
                    </div>
                    <button type="submit" className="w-[200px] text-center block mx-auto bg-secondary p-2 rounded-full text-gray-50 hover:bg-opacity-80 mt-4">
                        تعديل الكتاب
                    </button>
                </form>
            </div>
            
            <Link href='/dashboard/books' className='p-3  text-primary text-opacity-70 hover:text-opacity-100 font-bold w-full max-w-[800px] mx-auto flex transition'>
                <FaArrowRight className='ml-2 mt-[6px]'/><span>عودة إلى الكتب </span> 
            </Link>
        </section>
    )
}

export default EditBookPage
