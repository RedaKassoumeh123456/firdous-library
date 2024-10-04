"use server";

import { signIn, signOut, auth } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export async function doCredentialLogin(formData) {
    console.log(formData);
    // signIn();
    // console.log('hello')
    const response = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
    });

    return response;
    // const hello = 'hello';
    // hello.includes()
    // redirect('/');
    // const responseString=response;
    // console.log(responseString.includes('/sign-in?err=true'))
    // if (responseString.includes('/sign-in?err=true'))redirect('/dashboard/books');
    // else redirect('/sign-in?err=true')
    // return response;
}

export async function redirectToSignIn() {
    redirect("/sign-in?err=true");
}

export async function doLogout() {
    console.log("hello");
    await signOut({ redirectTo: "/" });
}

export async function isLogIn() {
    const user = await auth();
    if (user) return true;
    else return false;
}
