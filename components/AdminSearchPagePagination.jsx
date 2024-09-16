import Link from "next/link";

const AdminSearchPagePagination = ({page,pageSize,totalItems,name,bookType}) => {
    const totalPages = Math.ceil(totalItems/pageSize);

    const query = `name=${name}&bookType=${bookType}&`;


    return (
        <section className='container mx-auto flex justify-center items-center my-8'>
            {page>1 ?(
                <Link href={`/dashboard/books/search-results?${query}page=${page-1}`} className="mr-2 px-2 py-1 border border-primary rounded">
                    السابق
                </Link>
            ):null}
            
            <span className="mx-2 text-secondary">الصفحة {page} من {totalPages}</span>
            {page<totalPages ?(
            <Link href={`/dashboard/books/search-results?${query}page=${page+1}`} className="ml-2 px-2 py-1 border border-primary rounded">
                التالي
            </Link>
            ):null}
        </section>
    )
}

export default AdminSearchPagePagination
