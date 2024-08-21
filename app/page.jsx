
const MainPage = () => {
  return (
    <>
      {/* Search Boxes */}
      <section className="flex-col md:flex justify-evenly items-center">
        <form className="p-5 bg-primary rounded-xl w-auto flex items-center justify-between ">
          <p>ابحث عن اسم كتاب :</p>
          <imput type="text"  id="book-name" className=""/>
        </form>
      </section>
    </>
  )
};

export default MainPage;
