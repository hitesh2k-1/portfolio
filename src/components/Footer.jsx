import resume from "../assets/Hitesh_Software_engineer.pdf"
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <div className='mb-8 mt-20' >
      <div className='flex items-center justify-center hover:font-semibold hover:text-yellow-600 cursor-pointer border rounded-2xl py-2 px-4 mb-8 ' >
        <a href={resume} download >
        Download Resume
        </a>
      </div>
      <div className='flex items-center justify-center gap-8' >
{SOCIAL_MEDIA_LINKS.map((link,index)=>(
   <a key={index} href={link.href} target="_blank"
   rel="noopener noreferrer">
    {link.icon}
   </a>
))}
      </div>
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400' >&copy;Copyright. All rights reserved.</p>
    </div>
  )
}

export default Footer
