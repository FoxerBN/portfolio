import DottedDivider from "@/components/DottedDivider";
import Info from "@/sections/Info";
import Interests from "@/sections/Interests";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Tools from "@/sections/Tools";

export const generateStaticParams = () => {
  return [
    { locale: 'en' },
    { locale: 'sk' },
  ];
};


export default function HomePage() {
  return (
    <div>
      <Info />
      <DottedDivider />
      <Tools />
      <DottedDivider />
      <Skills />
      <DottedDivider />
      <Interests />
      <DottedDivider />
      <Projects />
    </div>
  );
}
