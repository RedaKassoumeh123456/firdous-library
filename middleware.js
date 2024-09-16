// import { withAuth } from 'next-auth/middleware';


// export default withAuth();

// export { default } from "next-auth/middleware"

// import { withAuth } from "next-auth/middleware"

// export default withAuth({
//   // Matches the pages config in `[...nextauth]`
//   // pages: {
//   //       signIn: "/signIn",
//   //       // error: "/error",
//   //   },
//   })

// export const config = {
//     matcher: ['/home'],
// };

// middleware.ts
import { auth } from '@/utils/authOptions'

export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, "/sign-in");
    return Response.redirect(url);
  }
});


export const config = {
	matcher: ['/dashboard/books','/dashboard/books/add','/dashboard/books/edit','/dashboard/search-results','/dashboard/books/[id]',
            '/dashboard/categories','/dashboard/categories/add','/dashboard/categories/edit','/dashboard'],
}