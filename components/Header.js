import {MenuIcon, SearchIcon, HeartIcon, MailIcon, UserAddIcon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="flex w-full z-10 sticky shadow-md bg-white border-gray-200 py-2 top-0 justify-between px-4">
            <div className="place-items-center flex">
                <MenuIcon className="h-10 hover:bg-gray-200 rounded-full p-2 cursor-pointer" />
                <h1 className="font-bold text-lg ml-4">Serving <span className="text-yellow-500">Yah</span></h1>
            </div>
            <div className="border-gray-200 shadow-inset max-w-lg border-2 p-2 mr-20 ml-20 flex w-1/2 rounded-full">
                <input type="text" className="pl-2" placeholder="Search..." className=" pl-3  flex flex-grow focus-within:outline-none"></input>
                <SearchIcon className="h-6" />
            </div>
            <div className="hidden md:flex pt-2 justify-center space-x-4 text-center">
                <HeartIcon className="h-6 text-gray-500 hover:text-red-500 transition hover:scale-110 cursor-pointer" />
                <MailIcon className="h-6 text-gray-500 hover:text-blue-500 transition hover:scale-110 cursor-pointer" />
                <UserAddIcon className="h-6 text-gray-500 transition hover:scale-110 cursor-pointer" />
            </div>
        </header>
    )
}

export default Header
