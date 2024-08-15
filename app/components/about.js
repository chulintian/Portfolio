import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function About() {

  return(
    <div id="about" className="w-full min-h-screen py-5 px-10 md:px-16 lg:px-32">
      <div className="flex flex-col gap-8 mt-32 mb-5">
        <div className="font-bold text-5xl text-center mb-10">
          i&apos;m <span className="text-green">chu lin</span>.
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-justify">
          Hello! I&apos;m a software engineer. <br/><br/>With a strong foundation in both frontend and backend development, I enjoy creating efficient, user-friendly solutions that solve real-world problems. Through my internships and academic projects, I&apos;ve gained hands-on experience with various technologies, including React, Django, AWS, and more. I&apos;m constantly learning and exploring new tools and methodologies to improve my skills. <br/><br/>Welcome to my portfolio, where you can see some of the projects I&apos;ve worked on, showcasing my journey as a developer and my commitment to building impactful software.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <a href="mailto:chulin.tian.2021@scis.smu.edu.sg" target="_blank" rel="noopener noreferrer">
            <MdEmail  size={28} className="flex self-center"/>
          </a>
          <a href="https://github.com/chulintian" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/chu-lin-tian/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;