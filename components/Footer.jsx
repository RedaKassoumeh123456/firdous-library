import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='p-5 bg-secondary w-full min-h-14 bg-opacity-[80%] mt-20'>
            <p className='text-center text-white '>
                جميع الحقوق محفوظة لموقع
                <span className='text-primary '>  مكتبة الفردوس </span>
                &copy; {currentYear}
            </p>
        </footer>
    )
}

export default Footer
