import Image from "next/image";
import Link from "next/link";
import Book from "@/models/Book";
import Category from "@/models/Category";

const categories = ["كتب جن", "كتب سحر وشعوذة"];
const BookCard = async ({ book }) => {
    let description = book.description;
    if (book.description) {
        description = book.description;
    } else
        description =
            "هذا الكتاب غني عن التعريف وغني عن أي وصف يمكن أن يوضع له";

    let category = book.category ? book.category.name : "غير مصنف";

    let imgUrl = book.img ? book.img : "/images/default.jpeg";

    return (
        <Link
            href={`/books/${book._id}`}
            className="flex flex-col p-5 shadow-secondary shadow-md bg-gray-200 rounded-lg min-h-[350px] h-full w-[300px] sm:w-[270px] md:w-[300px] mx-auto"
        >
            <Image
                src={imgUrl}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-[160px] sm:h-[150px] md:h-[160px] rounded-xl mb-3"
            />
            {/* <img src={book.img} alt="" className="w-full rounded-xl mb-4"/> */}
            <div className="flex justify-between items center mb-4">
                <span className="flex items-center text-primary pr-2 text-lg">
                    {category}
                </span>
                <span
                    className={`px-3 py-2 ${
                        book.available ? "text-green-600" : "text-red-600"
                    } rounded-md text-sm font-light`}
                >
                    {book.available ? " متاح" : " غير متاح"}
                </span>
            </div>
            <h3 className="text-center text-secondary text-xl border-y-[1px] border-primary p-2 mb-4">
                {book.bookName}
            </h3>
            <p className="text-center text-sm">
                {description.length >= 100
                    ? description.slice(0, 96) + "..."
                    : description}
            </p>
        </Link>
    );
};

export default BookCard;
