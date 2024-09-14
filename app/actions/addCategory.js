"use server";
import connectDB from "@/config/database";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addCategory(formData){
    // console.log(formData)
    await connectDB();

    const categoryData = {
        name:formData.get('name'),
    }

    const newCategory = new Category(categoryData);
    await newCategory.save();

    revalidatePath('/','layout');

    redirect(`/dashboard/categories`);
}

export default addCategory