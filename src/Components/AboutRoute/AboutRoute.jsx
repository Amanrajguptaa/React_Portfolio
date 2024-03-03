import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function AboutRoute(){
    return(
        <>
        <section >
            <div className="my-8 px-7 md:my-10 md:px-10 flex flex-col justify-between gap-10 ">
               <div className="flex justify-center items-center"><h3 className="text-4xl md:text-5xl font-bold">ABOUT ME</h3></div>
               <div className="flex flex-col md:flex-row justify-between">
                <div className='md:mt-24'>
                <h2 className="mb-3 text-5xl font-bold">Hi,I'm <span className="text-6xl text-purple-600">AMAN</span></h2>
                <h2 className="mb-3 text-lg md:mb-3 md:text-4xl font-bold">I am a FRONTEND DEVELOPER</h2>
                <p className="mb-3 text-xl font-bold">&#128205;Bangalore</p>
                <p className="mb-3 text-xl font-bold">&#128187;Student</p>
                <p className="mb-3 text-xl font-bold">&#129309;Let's get in touch</p>
                <a href="https://github.com/Amanrajguptaa"target='_blank'><GitHubIcon/> </a>
                <a href="https://www.linkedin.com/in/aman-raj-gupta-/" target='_blank'><LinkedInIcon/> </a>
                <a href="mailto:rajaman9355@gmail.com"><EmailIcon/></a>
                <a href="https://amanrajgupta.hashnode.dev/" target='_blank'><RssFeedIcon/></a>
                <a href="http://#"><InstagramIcon/></a>
                </div>
                 <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709459015/media/3d-rendering-kid-playing-digital-game-removebg-preview_1_tgbzdf.png" alt=""/>
                </div>
            </div>
        </section>
        </>
    );
}