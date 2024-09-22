import connectDB from "@/config/database"
import Book from "@/models/Book"
import Category from "@/models/Category"
import { convertToSerializableObject } from "@/utils/convertToObject"
import Link from "next/link"
import AdminBookSearchForm from "@/components/AdminBookSearchForm"
import { FaArrowAltCircleRight } from "react-icons/fa"
import AdminSearchPagePagination from "@/components/AdminSearchPagePagination"
import DeleteBookButton from "@/components/DeleteBookButton"


const AdminSearchResultPage = async ({searchParams:{name,bookType,page=1,pageSize = 5}}) => {
    await connectDB();

    const categories = await Category.find();

    const namePattern = new RegExp(name,'i');

    let query ={
        $or:[
            {authorName:namePattern},
            {bookName:namePattern},
        ]
    }

    const skip = (page-1)*pageSize;
    // console.log('skip '+skip);
    let total = 0;
    
    let booksQueryResults ;
    
    if (bookType && bookType !== 'All'){
        const category = await Category.findById(bookType);
        
        booksQueryResults = await Book.find(query).populate('category','name').lean();
        booksQueryResults=booksQueryResults.filter((book)=>{
            // console.log(book.category.name +' ' +category.name);
            if (book.category.name == category.name) return true;
            else return false;
        });
        // console.log(booksQueryResults)
        total=booksQueryResults.length;
        let firstIndex=skip+1;
        let lastIndex=Math.min(skip+pageSize,total);
        let counter=0;
        booksQueryResults = booksQueryResults.filter((book)=>{
            counter++;
            // console.log(counter);
            if (counter >=firstIndex&&counter<=lastIndex)return true;
            else return false;
        })
        // console.log(firstIndex+' '+lastIndex);
    }else {
        booksQueryResults = await Book.find(query).skip(skip).limit(pageSize).populate('category','name').lean();
        total= await Book.countDocuments(query);
    }

    const showPagination = total > pageSize;

    const books = convertToSerializableObject(booksQueryResults);


    return (
        <>
            <AdminBookSearchForm categories={JSON.parse(JSON.stringify(categories))}/>
            <Link href='/dashboard/books' className='p-3  text-primary text-opacity-70 hover:text-opacity-100 font-bold flex transition bg-gray-200 w-full'>
                <FaArrowAltCircleRight className='ml-2 mt-[4px]'/><span>عودة إلى صفحة الكتب </span> 
            </Link>
            <section className="p-6 md:p-10 h-[67.5vh]">
                <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                    <div className="flex justify-between items-center border-b border-black pb-3">
                        <h1 className="text-2xl text-primary ">الكتب :</h1>
                        {/* <Link href='/dashboard/books/add' className="bg-secondary hover:bg-opacity-85 transition flex px-4 pt-2 pb-1 w-fit rounded-xl text-gray-300 font-bold">إضافة<span className="mr-1 text-2xl mt-[-5px] font-semibold">+</span></Link> */}
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
                            <h1 className="text-lg text-secondary block p-4 mx-auto text-center">للأسف لا يوجد نتائج لهذا البحث حاليا </h1>
                        )}
                    </div>
                </div>
            </section>
            {showPagination &&(
                <AdminSearchPagePagination page={parseInt(page)} pageSize={parseInt(pageSize)} totalItems={total} name={name} bookType={bookType}/>
            )}
        </>
    )
}

export default AdminSearchResultPage
