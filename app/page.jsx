
// import books from '@/books.json'
import BookCard from '@/components/BookCard';
import Book from '@/models/Book';
import connectDB from '@/config/database';
import Category from  '@/models/Category'
import BookSearchForm from '@/components/BookSearchForm';
import MainPagePagination from '@/components/MainPagePagination';


const MainPage = async ({searchParams:{page = 1,pageSize = 6}}) => {

  await connectDB();

  const skip = (page-1)*pageSize;
  const total = await Book.countDocuments({});

  let books = await Book.find().skip(skip).limit(pageSize).populate('category','name').lean();

  const categories = await Category.find().lean();

  // const newBooks = books.skip(skip).limit(pageSize);

  const showPagination = total > pageSize;
  
  return (
    <>
      {/* Search Boxes */}
      <BookSearchForm categories={JSON.parse(JSON.stringify(categories))}/>
      {/* Books */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mx-12 justify-evenly text-center">
        {
          books.map((book)=>{
            return (
              <BookCard key={book._id} book={book} />
            )
          })
        }
      </section>
      {showPagination &&(
        <MainPagePagination page={parseInt(page)} pageSize={parseInt(pageSize)} totalItems={total}/>
      )}
    </>
  )
};

export default MainPage;
