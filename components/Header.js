import {MenuIcon, SearchIcon, HeartIcon, MailIcon, UserAddIcon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="flex w-full absolute justify-between top-4 px-4">
            <div className="place-items-center flex">
                <MenuIcon className="h-10 hover:bg-gray-200 rounded-full p-2 cursor-pointer" />
            </div>
            <div className="border-gray-200 max-w-lg border-2 p-2 mr-20 ml-20 flex w-full rounded-full">
                <input type="text" className="pl-2" placeholder="Search for Yah-glorifying content" className=" pl-3  flex flex-grow focus-within:outline-none"></input>
                <SearchIcon className="h-6" />
            </div>
            <div className="align-center flex space-x-4 text-center">
                <HeartIcon className="h-6 hover:text-red-500 transition hover:scale-110 cursor-pointer" />
                <MailIcon className="h-6 hover:text-blue-500 transition hover:scale-110 cursor-pointer" />
                <UserAddIcon className="h-6 transition hover:scale-110 cursor-pointer" />
            </div>
        </header>
    )
}

export default Header
