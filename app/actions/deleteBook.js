"use server";
// import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Book from "@/models/Book";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unlink } from "node:fs";


async function deleteBook (bookId){

    const public_path = (path)=>{
        // return `${process.env.NEXT_PUBLIC_PATH}${path}`
        return `./public${path}`;
    }

    const book = await Book.findById(bookId);

    if (!book)console.log('Book not found');

    if (book.img){
        const deleteImgUrl=book.img;
        unlink(public_path(deleteImgUrl),(err)=>{
            if (err)console.log('Error : ' + err)
            else console.log('img deleted successfully')
        });
    }

    await book.deleteOne();

    revalidatePath('/','layout');

    redirect(`/dashboard/books`);

}

export default deleteBook;
