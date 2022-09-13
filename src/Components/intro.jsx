import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";


export default function Intro() {

    let iconStyles = { fontSize: "1.1em" };
  return (
    <div>
        <div className='p-2 text-white flex flex-wrap justify-between bg-slate-800'>
            <div>
            <p className='pl-4'>EMPOWERING PEOPLE</p>
            </div>
            <div className='flex px-2 flex-wrap'>
                <p className=' px-2'>+254704775938</p>
                <p className=' px-2 pt-1 text-xs'>WACHIRAMUTATHI@GMAIL.COM</p>
                <ul className='flex  flex-wrap p-1 px-2'>
                    <li className='px-2 '><a href='http://web.facebook.com/IamDMWachira' target="_blank"><FaFacebook style={iconStyles}/></a></li>
                    <li className='px-2'><a className='icon' href=''><FaTwitter style={iconStyles}/></a></li>
                    <li className='px-2'><a className='icon' href=''><FaInstagram style={iconStyles}/></a></li>
                    <li className='px-2'><a className='icon' href=''><FaLinkedinIn style={iconStyles}/></a></li>

                </ul>
                

            </div>
        </div>
    </div>
  )
}
