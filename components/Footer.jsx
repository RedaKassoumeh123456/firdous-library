import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLink = ({ text, link }) => {
    return (
        <Link className="text-secondary " href={link}>
            {text}
        </Link>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // return (
    //     <footer className='p-5 bg-secondary w-full min-h-14 bg-opacity-[80%] mt-20'>
    //         <p className='text-center text-white '>
    //             جميع الحقوق محفوظة لموقع
    //             <span className='text-primary '>  مكتبة الفردوس </span>
    //             &copy; {currentYear}
    //         </p>
    //     </footer>
    // )

    return (
        <footer className="flex flex-col  mt-5 border-t border-primary rounded-t-lg">
            {/* <div className="flex flex-col md:flex-row w-full px-10 py-5">
                <div className="w-1/2 flex flex-col">
                    <Image
                        src="https://via.placeholder.com/500x500"
                        height={250}
                        width={250}
                        className="w-[150px]"
                    />
                    <div className="mt-3">
                        <h3 className="text-xl font-bold text-primary">
                            مكتبة الفردوس
                        </h3>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col gap-2">
                        <FooterLink link="/" text={"الصفحة الرئيسية"} />
                        <FooterLink link="/about" text={"من نحن"} />
                        <FooterLink link="/contact" text={"تواصل معنا"} />
                    </div>
                </div>
            </div> */}
            <div className="bg-secondary bg-opacity-95 py-3">
                <p className="text-center text-white ">
                    جميع الحقوق محفوظة لموقع{" "}
                    <span className="text-primary text-opacity-100"> مكتبة الفردوس </span>
                    &copy; {currentYear}{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
