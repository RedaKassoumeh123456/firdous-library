"use server";
import fs from "node:fs/promises"
import connectDB from "@/config/database";
import Book from "@/models/Book";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unlink } from "node:fs";



async function updateBook(bookId,formData){
    // console.log(formData)
    await connectDB();

    const public_path = (path)=>{
        // return `${process.env.NEXT_PUBLIC_PATH}${path}`
        return `./public${path}`;
    }

    // console.log(public_path('/images/default.jpeg'))
    // const u = public_path('/images/default.jpeg');

    const existingBook = await Book.findById(bookId);
    
    const bookData = {
        bookName:formData.get('bookName'),
        authorName:formData.get('authorName'),
        description:formData.get('description'),
        summary:formData.get('summary'),
        category:formData.get('category'),
    }


    
    const available = formData.get('available') == 'true'?true:false;
    // console.log(formData.get('available'))

    bookData.available = available;

    const deletePrev = formData.get('deleteImage') == 'true'?true:false;


    // const newBook = new Book(bookData);

    // console.log(formData.get('img'))

    const img = formData.get('img');

    // console.log(img);

    // console.log('delete '+ deletePrev);



    if (img.name !== 'undefined'){
        // console.log('one');
        if (existingBook.img){
            const deleteImgUrl=existingBook.img;
            unlink(public_path(deleteImgUrl),(err)=>{
                if (err)console.log('Error : ' + err)
                else console.log('img deleted successfully')
            });
        }
        const file = formData.get("img");
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        // console.log('helloooo')
        await fs.writeFile(`./public/images/${existingBook._id}`,buffer)
        
        bookData.img=`/images/${existingBook._id}`;
    }else if (existingBook.img && !deletePrev){
        bookData.img=existingBook.img;
    }else {
        console.log('hello')
        bookData.img=null;
        if (existingBook.img){
            const deleteImgUrl=existingBook.img;
            unlink(public_path(deleteImgUrl),(err)=>{
                if (err)console.log('Error : ' + err)
                else console.log('img deleted successfully')
            });
        }
    }

    const updatedBook = await Book.findByIdAndUpdate(bookId,bookData)

    revalidatePath('/','layout');

    redirect(`/dashboard/books/${updatedBook._id}`);
}

export default updateBook