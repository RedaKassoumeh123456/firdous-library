"use server";
// import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";

async function deleteCategory (categoryId){

    const category = await Category.findById(categoryId);

    if (!category)throw new Error('Property Not Found');

    await category.deleteOne();

    revalidatePath('/','layout');

}

export default deleteCategory;
