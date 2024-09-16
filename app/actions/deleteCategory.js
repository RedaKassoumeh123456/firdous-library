"use server";
// import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";
import Book from "@/models/Book";
async function deleteCategory (categoryId){

    const category = await Category.findById(categoryId);

    if (category.name === 'غير مصنف') {
        console.log("Can't delete this category");
        return;
    }

    if (!category)throw new Error('Category Not Found');

    const books = await Book.find({category:category._id});
    
    books.map(async (book)=>{

        const newCategory = Category.find({name:'غير مصنف'})

        const bookData = {
            bookName:book.bookName,
            authorName:book.authorName,
            description:book.description,
            summary:book.summary,
            category:newCategory._id,
            available:book.availabe,
        }
        if (book.img)bookData.img=book.img;
        const updatedBook = await Book.findByIdAndUpdate(book._id,bookData)
    });

    await category.deleteOne();

    revalidatePath('/','layout');

}

export default deleteCategory;
