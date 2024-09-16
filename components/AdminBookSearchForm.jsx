'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";


const AdminBookSearchForm = ({categories}) => {
    const[name,setName] = useState('');
    const[bookType,setBookType] = useState('All');

    const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (name === '' && bookType === 'All'){
            router.push('/');
        }else {
            const query = `?name=${name}&bookType=${bookType}`;
            router.push(`/dashboard/books/search-results${query}`)
        }
    }

    return (
        <section className=" text-lg bg-secondary">
            <form
            onSubmit={handleSubmit}
            className="p-5  w-full flex flex-col md:flex-row items-center justify-between max-w-[900px] mx-auto">
            <p className="w-full md:w-1/5 text-white text-xl pr-auto">إبحث عما تريد :</p>
            <div className='w-full flex flex-col sm:flex-row items-center gap-3 max-w-[700px]'>
                <input defaultValue={name} onChange={(e)=>setName(e.target.value)} type="text"  id="book-name" className="bg-white p-5 h-10 rounded-md text-secondary focus:outline-none mt-3 md:mt-0 text-lg w-full " placeholder='اسم الكتاب أو اسم الكاتب'/>
                <select
                id="category"
                name="category"
                defaultValue={bookType}
                onChange={(e)=>setBookType(e.target.value)}
                className="p-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none  text-md mt-3 md:mt-0 w-full  sm:w-2/5"
            >
                <option key={'0'} value='All'>الكل</option>
                {categories.length > 0 && categories.map((category)=>(
                    <option  key={JSON.parse(JSON.stringify(category._id))} value={JSON.parse(JSON.stringify(category._id))} >{category.name}</option>
                ))}
            </select>
            <button type='submit' className='p-2 pt-1 mt-auto bg-primary hover:bg-opacity-80 text-md rounded-md w-2/5 text-gray-200'>بحث</button>
            </div>
            </form>
        </section>
    )
}

export default AdminBookSearchForm
