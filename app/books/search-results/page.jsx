import connectDB from "@/config/database"
import Book from "@/models/Book"
import Category from "@/models/Category"
import { convertToSerializableObject } from "@/utils/convertToObject"
import Link from "next/link"
import BookCard from "@/components/BookCard"
import BookSearchForm from "@/components/BookSearchForm"
import { FaArrowAltCircleRight } from "react-icons/fa"
import ClientSearchPagePagination from "@/components/ClientSearchPagePagination"

const SearchResultPage = async ({searchParams:{name,bookType,page=1,pageSize = 6}}) => {
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
            <BookSearchForm categories={JSON.parse(JSON.stringify(categories))}/>
            <Link href='/' className='p-3  text-primary text-opacity-70 hover:text-opacity-100 font-bold flex transition bg-gray-200 w-full'>
                <FaArrowAltCircleRight className='ml-2 mt-[4px]'/><span>عودة إلى صفحة الكتب </span> 
            </Link>
            <section className="p-5">
                <div className="m-auto">
                    <h1 className="text-xl mb-5 mr-6 text-secondary">
                        نتائج البحث :
                    </h1>
                    {books.length === 0 ?(<p className="p-3 mr-5 mb-32"> للأسف لا يوجد نتائج للبحث الذي تم اجراؤه </p>):(
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {books.map((book)=>(
                                <BookCard key={book._id} book={book}/>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {showPagination &&(
                <ClientSearchPagePagination page={page} pageSize={pageSize} totalItems={total} name={name} bookType={bookType}/>
            )}
        </>
    )
}

export default SearchResultPage
