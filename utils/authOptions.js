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
                if (credentials === null)return null;
                try{
                    const Admin = {
                        email:'admin1@gmail.com',
                        password:'admin@123admin',
                    }
                    
                    if (credentials.email ===email && credentials.password === password){
                        return Admin;
                    }else {
                        redirect(`/login`);
                    }

                    if (user){
                        const isMatch = user?.password === credentials?.password;

                        if(isMatch){
                            return user;
                        }else {
                            throw new Error('Check your password')
                        }
                    } else {
                        throw new Error("User not found")
                    }
                }catch (error){
                    throw new Error(error)
                }
            }
        })
    ],
    callbacks:{
        async session({session}){
            return session;
        },
    }
})