import { doLogout } from "@/app/actions/signInAction"

const SignOutButton = () => {
    return (
        <form action={doLogout}>
            <button type="submit" className="w-fil px-3 py-2 text-center block bg-gray-700  p-2 rounded-md text-gray-50 hover:bg-opacity-80 mt-2 md:mt-0">
                تسجيل خروج
            </button>
        </form>
    )
}

export default SignOutButton
