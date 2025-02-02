import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Button } from "./ui/button";

const NavBar = () => {
    return (
        <header className="fixed w-full top-0 left-0 z-50">
            <nav className="w-full backdrop-blur-md bg-white bg-opacity-30  h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12">
                <Link href="/" className="flex gap-3">
                    <Image
                        src='/images/logo.svg'
                        alt="ConvertMaster logo"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                    <h1 className="">Convert Master</h1>
                </Link>

                <Link href='https://github.com/Ragesh-A/ConvertMaster'>
                    <Button
                        variant='default'
                        className="rounded-full w-fit hidden md:flex gap-2 "
                    >
                        <span>Github Repo</span>
                        <BsGithub className="text-xl" />
                    </Button>
                </Link>
            </nav>
        </header>
    )
}

export default NavBar;