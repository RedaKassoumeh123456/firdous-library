"use server";
import fs from "node:fs/promises"
import connectDB from "@/config/database";
import Book from "@/models/Book";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addBook(formData){
    // console.log(formData)
    await connectDB();

    
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


    const newBook = new Book(bookData);

    console.log(formData.get('img'))

    const img = formData.get('img');

    if (img.name !== 'undefined'){
        const file = formData.get("img");
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        // console.log('helloooo')
        console.log(file);
        const fileExt=file.type.slice(6);
        await fs.writeFile(`./public/images/${newBook._id}.${fileExt}`,buffer)
        
        newBook.img=`/images/${newBook._id}.${fileExt}`;
    }else newBook.img=null;

    await newBook.save();

    revalidatePath('/','layout');

    redirect(`/dashboard/books/${newBook._id}`);
}

export default addBook