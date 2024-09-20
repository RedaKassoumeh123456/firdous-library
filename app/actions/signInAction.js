'use server';

import { signIn,signOut } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export async function doCredentialLogin (formData) {
    console.log(formData)
    // signIn();
        console.log('hello')
        const response = await  signIn('credentials',{
            email:formData.get('email'),
            password:formData.get('password'),
            // redirect:false,
        });
        
        console.log('response2 is '+ response);

        return response;
        // return 'hello';

} 

export async function redirectToSignIn (){
    redirect('/sign-in?err=true')
}

export async function doLogout() {
    console.log('hello')
    await signOut({ redirectTo: "/" });
}
