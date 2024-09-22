import NextAuth from'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { redirect } from 'next/navigation';
import { redirectToSignIn } from '@/app/actions/signInAction';
function goToSignIn () {
    redirectToSignIn();
}


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
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials,req){
                // throw new Error('hello world')
                // console.log('credentials is ')
                // console.log(credentials)
                // console.log(credentials.email)
                // console.log(credentials.password)
                // console.log(req)
                if (credentials == null)return null;
                    
                    const user = {
                        email:credentials.email,
                        password:credentials.password,
                    }
                    return user;
                    /*const Admin = {
                        email:'admin1@gmail.com',
                        password:'admin@123admin',
                    }*/

                    /*if (credentials.email === Admin.email && credentials.password === Admin.password){
                        console.log('hello world ')
                        return Admin;
                    }else {
                        
                        // console.log('hello no world')
                        return user;
                        // throw new Error("User not found")
                        // throw new Error('user not correct')
                        // goToSignIn();
                        // throw new Error('Uncorrect ')
                        // // return null;
                        // redirect(`/sign-in?err=true`);
                        // return null;
                    }*/
                    

                    // if (user){
                    //     const isMatch = user?.password === credentials?.password;

                    //     if(isMatch){
                    //         return user;
                    //     }else {
                    //         throw new Error('Check your password')
                    //     }
                    // } else {
                    // }
                
            }
        })
    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            // console.log('sign-in hello');
            const Admin = {
                email:'admin1@gmail.com',
                password:'admin@123admin',
            }
            if (user.email === Admin.email && user.password === Admin.password){
                // console.log('hello correct sign-in');
                return true;
            }else return '/sign-in?err=yes';
        },
        async session({session}){
            return session;
        },
        // async redirect({ url, baseUrl }) {
        //     console.log('hello redirect'+url)
        //     if (url == '/sign-in' || url == '/sign-in?err=true'){
        //         // redirect('/sign-in?err=true')
        //         return '/sign-in?err=true';
        //     }else return url;
        // },
    }
})