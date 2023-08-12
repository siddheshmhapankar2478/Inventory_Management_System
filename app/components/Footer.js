import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { name,mail,linkedin,github } from '@/app/config';

const Footer = () => {
  return (
    <div className="flex flex-wrap bg-[#36454F] text-white justify-center mt-auto">
        <div className="flex xs:flex-col">
          <h1 className="py-4 xs:py-2">This website is created by  &nbsp;</h1> 
          <h1 className='font-bold xs:block xs:text-center py-4 xs:py-2'> {name}</h1>
        </div>    
      <div className="flex flex-wrap mt-auto justify-center">
          <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={`mailto:${mail}`}><MailOutlineIcon></MailOutlineIcon></a>
          <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={linkedin}><LinkedInIcon></LinkedInIcon></a>
          <a className="p-2 border rounded-full m-2 hover:text-[#F8781D] hover:border-[#F8781D]" target='_blank' href={github}><GitHubIcon></GitHubIcon></a>
      </div>
    </div>
  );
};

export default Footer;
