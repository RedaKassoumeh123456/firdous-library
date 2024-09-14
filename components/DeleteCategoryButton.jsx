'use client'
import deleteCategory from "@/app/actions/deleteCategory"

const DeleteCategoryButton = ({categoryId}) => {
    console.log(categoryId)
    const handleDeleteCategory = async (catId)=>{
        const confirmed = window.confirm('هل أنت متأكد من أنك تريد حذف هذا التصنيف؟');
        console.log('catId '+ catId)
        if (!confirmed)return ;

        await deleteCategory(catId);

    }
    return (
        <button onClick={()=>handleDeleteCategory(categoryId)} type="button" className="block py-2 px-4 bg-primary rounded-md ml-3 text-gray-200 hover:bg-opacity-85">حذف </button>
    )
}

export default DeleteCategoryButton
