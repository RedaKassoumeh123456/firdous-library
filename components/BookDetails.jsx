import Image from 'next/image'
import connectDB from '@/config/database'
import Book from '@/models/Book'
import '@/models/Category'
const BookDetails = async ({bookId}) => {
    await connectDB();

    let book;
    let category;

    const currentBook = await Book.findById(bookId);

    if (currentBook.category){
        book = await Book.findById(bookId).populate('category','name')
        category = book.category.name;
    }else {
        category= 'غير مصنف';
        book = await Book.findById(bookId);
    }
    
    let imgUrl =(book.img ? book.img : '/images/default.jpeg');


    

    return (
        <div className=''>
            <Image 
                src={imgUrl} 
                width={400} 
                height={400}
                className='w-full block rounded-md'
            />
            {book.available?(
                <h3 className={`text-center block py-4 text-md text-green-600 font-light`}> الكتاب متاح للإستعارة</h3>
            ):(
                <h3 className={`text-center block py-4 text-md text-red-600 font-light`}> الكتاب غير متاح للإستعارة</h3>
            )}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between bg-gray-300 p-3'>
                <h1 className='text-primary text-xl'>اسم الكتاب :</h1>
                <p className='text-secondary mt-1 sm:mt-0'>{book.bookName}</p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between bg-gray-300 p-3 mt-1'>
                <h1 className='text-primary text-xl'>اسم الكاتب :</h1>
                <p className='text-secondary mt-1 sm:mt-0'>{book.authorName}</p>
            </div>
            <div className='flex items-center justify-between bg-gray-300 p-3 mt-1'>
                <h1 className='text-primary text-xl'>تصنيف الكتاب :</h1>
                <p className='text-secondary'>{category}</p>
            </div>
            <div className='flex-col items-center justify-between bg-gray-300 p-3 mt-1'>
                <h1 className='text-primary text-xl'>وصف الكتاب :</h1>
                <p className='text-black mt-1'>{book.description?book.description:'لا يتوفر وصف لهذا الكتاب في الوقت الراهن'}</p>
            </div>
            <div className='flex-col items-center justify-between bg-gray-300 p-3 mt-1'>
                <h1 className='text-primary text-xl'>ملخص الكتاب :</h1>
                <p className='text-black mt-1'>{book.summary?book.summary:' لا يتوفر ملخص لهذا الكتاب في الوقت الراهن'}</p>
            </div>
        </div>
    )
}

export default BookDetails
