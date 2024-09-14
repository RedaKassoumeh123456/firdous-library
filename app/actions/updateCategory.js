"use server";
import connectDB from "@/config/database";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updateCategory(categoryId,formData){
    console.log(formData)
    await connectDB();

    const existingCategory = await Category.findById(categoryId);

    const categoryData = {
        name:formData.get('name'),
    }

    const updatedCategory = await Category.findByIdAndUpdate(categoryId,categoryData)

    revalidatePath('/','layout');

    redirect(`/dashboard/categories`);
}

export default updateCategory