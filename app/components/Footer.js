import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { name,mail,linkedin,github } from '@/app/config';

const Footer = () => {
  return (
    <div className="flex flex-wrap bg-[#36454F] text-white justify-center mt-auto">
        <h1 className="p-4">This website is created by <span className='font-bold'>{name}</span></h1>
        <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={`mailto:${mail}`}><MailOutlineIcon></MailOutlineIcon></a>
        <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={linkedin}><LinkedInIcon></LinkedInIcon></a>
        <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={github}><GitHubIcon></GitHubIcon></a>
    </div>
  );
};

export default Footer;
