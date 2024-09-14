import addCategory from '@/app/actions/addCategory'
import Link from 'next/link'
import {FaArrowRight} from "react-icons/fa"
const AddCategoryPage = () => {
    // await connectDB();
    return (
        <section className="p-5 h-[67.5vh]">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <form action={addCategory}>
                    <h1 className="text-xl text-primary">إضافة تصنيف للكتب</h1>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="name" className="text-lg text-secondary w-full">اسم التصنيف : </label>
                        <input type="text" name="name" id="name" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <button type="submit" className="w-[200px] text-center block mx-auto bg-secondary p-2 rounded-full text-gray-50 hover:bg-opacity-80 mt-4">
                        إضافة تصنيف
                    </button>
                </form>
            </div>
            
            <Link href='/dashboard/categories' className='p-3  text-primary text-opacity-70 hover:text-opacity-100 font-bold w-full max-w-[800px] mx-auto flex transition'>
                <FaArrowRight className='ml-2 mt-[6px]'/><span>عودة إلى التصنيفات </span> 
            </Link>
        </section>
        
    )
}

export default AddCategoryPage
