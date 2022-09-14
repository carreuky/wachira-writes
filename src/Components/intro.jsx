import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";


export default function Intro() {

    let iconStyles = { fontSize: "1.1em" };
  return (
    <div>
        <div className='p-2 text-white flex flex-wrap justify-between bg-slate-900'>
            <div>
            <p className='pl-4'>EMPOWERING PEOPLE</p>
            </div>
            <div className='flex px-2 flex-wrap'>
                <p className=' hover:text-amber-400 px-2'>+254704775938</p>
                <p className=' hover:text-amber-400 px-2 pt-1 text-xs'>WACHIRAMUTATHI@GMAIL.COM</p>
                <ul className='flex  flex-wrap p-1 px-2'>
                    <li className='px-2 '><a className='hover:text-amber-400' href='http://web.facebook.com/IamDMWachira' target="_blank"><FaFacebook style={iconStyles}/></a></li>
                    <li className='px-2'><a className='hover:text-amber-400 icon' href='https://twitter.com/mutathiwachira' target="_blank"><FaTwitter style={iconStyles}/></a></li>
                    <li className='px-2'><a className='hover:text-amber-400 icon' href='https://www.instagram.com/iamdmwachira' target="_blank"><FaInstagram style={iconStyles}/></a></li>
                    <li className='px-2'><a className='hover:text-amber-400 icon' href='http://www.linkedin.com/in/mutathi-wachira-716bb8195' target="_blank"><FaLinkedinIn style={iconStyles}/></a></li>

                </ul>
                

            </div>
        </div>
    </div>
  )
}
