
// import books from '@/books.json'
import BookCard from '@/components/BookCard';
import Book from '@/models/Book';
import connectDB from '@/config/database';
import '@/models/Category'

const MainPage = async () => {

  await connectDB();

  const books = await Book.find();
  // books.map((book)=>{
  //   if (book.category)return book.populate('category','name');
  // })

  // books.map((book)=>{
  //   if (book.category)console.log(book.category.name);
  // })

  return (
    <>
      {/* Search Boxes */}
      <section className="flex flex-col md:flex-row items-center justify-evenly  mt-8 mx-12 gap-5 md:gap-0 text-lg">
        <form className="p-5 bg-primary rounded-xl flex flex-col items-center justify-between gap-4 w-4/5 md:w-[45%]">
          <p className="w-full text-white text-xl pr-auto">ابحث عن اسم كتاب :</p>
          <input type="text"  id="book-name" className="bg-white p-5 h-10 w-full rounded-xl text-secondary focus:outline-none"/>
        </form>
        <form className="p-5 bg-secondary rounded-xl flex flex-col items-center justify-between gap-4 w-4/5 md:w-[45%]">
          <p className="w-full text-white text-xl pr-auto">ابحث عن اسم كتاب :</p>
          <input type="text"  id="book-name" className="bg-white p-5 h-10 w-full rounded-xl text-primary focus:outline-none"/>
        </form>
      </section>
      {/* Books */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mx-12 justify-evenly text-center">
        {
          books.map((book)=>{
            return (
              <BookCard key={book._id} bookId={book._id} />
            )
          })
        }
      </section>
    </>
  )
};

export default MainPage;
