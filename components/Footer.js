import {MenuIcon, SearchIcon, MailIcon, UserAddIcon, PlayIcon} from '@heroicons/react/solid';
import {PauseIcon, FastForwardIcon, RewindIcon, HeartIcon} from '@heroicons/react/outline';

function Footer() {

    function mySong (props) {
        document.getElementById('artistName').innerHTML = `${props.title}`}
    return (
        <header className="flex w-full z-10 sticky absolute shadow-md bg-gray-50 border-gray-200 border-t-2 py-2 bottom-0 px-4">
            <div className="place-items-center w-1/4 flex">
                <p className="font-bold">Alive 2020 |</p> <br />
                <p id="artistName">| Darak iBar</p>
            </div>
            <div className="flex justify-center space-x-8 w-1/2">
                <RewindIcon className="h-8 hover:text-yellow-500 transition hover:scale-110 cursor-pointer" />
                <PauseIcon onClick={mySong} className="h-8 hover:text-yellow-500 transition hover:scale-110 cursor-pointer" />
                <FastForwardIcon className="h-8 hover:text-yellow-500 transition hover:scale-110 cursor-pointer" />
            </div>
            <div className="hidden w-1/4 md:flex space-x-4 justify-end">
                <HeartIcon className="h-8 text-black hover:text-red-500 transition hover:scale-110 cursor-pointer" />
            </div>
        </header>
    )
}

export default Footer
