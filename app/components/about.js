import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function About() {

  return(
    <div id="about" className="w-full h-screen py-5 px-32">
      <div className="flex flex-col gap-8 mt-32 mb-5">
        <div className="font-bold text-5xl text-center mb-2">
          i&apos;m <span className="text-green">chu lin</span>.
        </div>
        <div className="flex flex-col gap-2">
          <p>Hello! I&apos;m a software engineer.</p>
          <p className="text-justify">
            Since writing my first lines of code and delving into complex algorithms, I&apos;ve been captivated by technology&apos;s ability to solve problems and enhance digital experiences for everyone. Throughout my journey, I&apos;ve dedicated myself to mastering this craft, continually pushing the boundaries of what&apos;s possible. My portfolio showcases not just my technical expertise but also my passion for creating impactful solutions that make a difference. Join me as I strive to innovate and improve the digital landscape, one line of code at a time.
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