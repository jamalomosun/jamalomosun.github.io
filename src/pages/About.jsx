import { FaSpaceShuttle, FaTerminal, FaCode } from 'react-icons/fa';
import { BiMath } from 'react-icons/bi';
import { IoSparkles } from 'react-icons/io5';

export default function About() {
  return (
    <div>
      <h1> About Me</h1>
      <p><FaTerminal /> I am a recent graduate from Carleton College with degrees in Mathematics and Computer Science. 
      I love solving complex problems at the intersection of math <BiMath /> , computer science <FaCode /> , political science, and policy.</p>
      <p>I am currently seeking opportunities to apply my skills and knowledge in a dynamic environment.</p>
        <p><IoSparkles /> I am passionate about using my skills to make a positive impact in the world, whether it's through research, data analysis, or software development.</p>
        <p><FaSpaceShuttle /> In my free time, I enjoy exploring new technologies, reading about the latest advancements in AI and machine learning, and working on personal projects that challenge me to learn and grow.</p>
    </div>
  );
}