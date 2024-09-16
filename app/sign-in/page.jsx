'use client'
import Link from "next/link"
import { doCredentialLogin } from "../actions/signInAction"
import { doLogout } from "../actions/signInAction"
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const router = useRouter();

    async function handleFormSubmit (event){
        event.preventDefault();

            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            console.log('response is ' + response);

            if (!!response){
                console.log('correct login')
                router.push('/dashboard/books')
            }else {
                console.log(response.error)
                router.push('/sign-in');
            }

        
    }
    return (
        <section className="p-5 h-[67.5vh]">
            <div className="bg-gray-200 p-5 mx-auto w-full max-w-[800px]">
                <form onSubmit={handleFormSubmit}>
                    <h1 className="text-xl text-primary"> تسجيل الدخول </h1>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="email" className="text-lg text-secondary w-full"> الأيميل ( <span className="text-primary">email</span> ) : </label>
                        <input type="email" name="email" id="email" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <div className=" flex-col p-3 ">
                        <label htmlFor="password" className="text-lg text-secondary w-full"> كلمة المرور ( <span className="text-primary">password</span> ) : </label>
                        <input type="password" name="password" id="password" className="p-3 bg-gray-100 rounded-2xl w-full text-gray-800 focus:outline-none border border-primary shadow-primary text-md mt-3" required/>
                    </div>
                    <button type="submit" className="w-[200px] text-center block mx-auto bg-secondary p-2 rounded-full text-gray-50 hover:bg-opacity-80 mt-4">
                        تسجيل دخول
                    </button>
                    
                </form>
                
            </div>
        </section>
    )
}

export default SignInPage
