
// import books from '@/books.json'
import BookCard from '@/components/BookCard';
import Book from '@/models/Book';
import connectDB from '@/config/database';
import Category from  '@/models/Category'

const MainPage = async () => {

  await connectDB();

  const books = await Book.find().populate('category','name').lean();

  const categories = await Category.find().lean();
  
  return (
    <>
      {/* Search Boxes */}
      <section className=" text-lg bg-secondary">
        <form className="p-5  w-full flex flex-col md:flex-row items-center justify-between max-w-[900px] mx-auto">
          <p className="w-full md:w-1/5 text-white text-xl pr-auto">إبحث عما تريد :</p>
          <div className='w-full flex flex-col sm:flex-row items-center gap-3 max-w-[700px]'>
            <input type="text"  id="book-name" className="bg-white p-5 h-10 rounded-md text-secondary focus:outline-none mt-3 md:mt-0 text-lg w-full " placeholder='اسم الكتاب أو اسم الكاتب'/>
            <select
              id="category"
              name="category"
              defaultValue='All'
              className="p-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none  text-md mt-3 md:mt-0 w-full  sm:w-2/5"
          >
              <option key={'0'} value='All'>الكل</option>
              {categories.length > 0 && categories.map((category)=>(
                  <option  key={JSON.parse(JSON.stringify(category._id))} value={JSON.parse(JSON.stringify(category._id))} >{category.name}</option>
              ))}
          </select>
          </div>
        </form>
      </section>
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
    </>
  )
};

export default MainPage;
