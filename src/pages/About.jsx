import { FaSpaceShuttle, FaTerminal, FaCode } from 'react-icons/fa';
import { BiMath } from 'react-icons/bi';
import { IoSparkles } from 'react-icons/io5';

export default function About() {
  return (
    <div>
      <h1><IoSparkles /> About Me</h1>
      <p><FaTerminal /> I love solving complex problems at the intersection of math <BiMath /> and computer science <FaCode />.</p>
    </div>
  );
}