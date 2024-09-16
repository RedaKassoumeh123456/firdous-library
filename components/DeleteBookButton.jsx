'use client'

import deleteBook from "@/app/actions/deleteBook"

const DeleteBookButton = ({bookId}) => {
    // console.log(categoryId)
    const handleDeleteBook = async (BookId)=>{
        const confirmed = window.confirm('هل أنت متأكد من أنك تريد حذف هذا الكتاب؟');
        // console.log('catId '+ catId)
        if (!confirmed)return ;

        await deleteBook(BookId);

    }
    return (
        <button onClick={()=>handleDeleteBook(bookId)} className="py-2 px-3 text-center bg-primary text-gray-200 rounded-md hover:bg-opacity-85 transition w-fit">حذف</button>
    )
}

export default DeleteBookButton
