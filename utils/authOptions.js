import NextAuth from'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { redirect } from 'next/navigation';


export const {
    handlers ={GET,POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    session:{
        strategy:'jwt',
    },
    providers:[
        CredentialsProvider({
            name:'Credentials',
            async authorize(credentials,req){
                console.log('credentials is ')
                console.log(credentials)
                if (credentials === null)return null;
                    const Admin = {
                        email:'admin1@gmail.com',
                        password:'admin@123admin',
                    }
                    
                    if (credentials.email == Admin.email && credentials.password == Admin.password){
                        return Admin;
                    }else {
                        redirect(`/sign-in`);
                    }

                    // if (user){
                    //     const isMatch = user?.password === credentials?.password;

                    //     if(isMatch){
                    //         return user;
                    //     }else {
                    //         throw new Error('Check your password')
                    //     }
                    // } else {
                    //     throw new Error("User not found")
                    // }
                
            }
        })
    ],
    callbacks:{
        async session({session}){
            return session;
        },
    }
})