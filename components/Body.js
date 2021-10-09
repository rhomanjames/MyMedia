import Image from 'next/image'
import Videos from "../components/Videos";
import Articles from "../components/Articles";
import Recipes from "../components/Recipes";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Home from "../components/Home";
import Kids from "../components/Kids";
import Music from "../components/Music";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon, CodeIcon } from '@heroicons/react/solid'

function Body() {
    return (
            <div className="flex w-full flex-grow justify-top z-0 justify-center bg-gray-50">
            <Modal id="mymodal" className="z-20"/>
                {/*Side Drawer*/}
                <div id="menu" className="w-20 hidden fixed z-10 left-0 p-4 shadow-md h-full bg-white">
                    <ul className="space-y-8 text-xs pt-8 text-center justify-center flex flex-col">
                        <li href="#trending" className="items-center flex  text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><FireIcon className="h-6"/><h4>Trending</h4></li>
                        <li className="items-center flex text-gray-500 hover:text-yellow-400 cursor-pointer transition flex-col"><DocumentTextIcon className="h-6"/><h4>Articles</h4></li>                        
                        <li className="items-center flex  text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><CollectionIcon className="h-6"/><h4>Recipes</h4></li>
                        <li className="items-center flex text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><PuzzleIcon className="h-6"/><h4>Kids</h4></li>
                        <li className="items-center flex text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><MusicNoteIcon className="h-6"/><h4>Music</h4></li>                    
                        <li className="items-center flex text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><CodeIcon className="h-6"/><h4>Coding</h4></li>
                        <li className="items-center flex text-gray-500 flex-col hover:text-yellow-400 cursor-pointer transition"><BookmarkIcon className="h-6"/><h4>Scriptures</h4></li>                    
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="flex w-full flex-col">
                        < Home />
                        < Videos/>
                        < Articles className="hidden" />
                        < Recipes/>
                        < Kids className="hidden" />
                        < Music className="hidden" />
                    </div>
                    < Footer className="sticky bottom-0" />
                </div>
            </div>
        )
    }
    
    export default Body