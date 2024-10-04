import connectDB from "@/config/database";
import Book from "@/models/Book";

export default async function sitemap() {
    await connectDB();

    const books = await Book.find({});

    const booksArray = books.map((book) => {
        return {
            url: "https://firdous-library2.vercel.app/books/" + book._id,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        };
    });

    console.log(booksArray);

    return [
        {
            url: "https://firdous-library2.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://firdous-library2.vercel.app/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://firdous-library2.vercel.app/about",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
        ...booksArray,
    ];
}
