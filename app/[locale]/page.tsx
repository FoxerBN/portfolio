import DottedDivider from "@/components/DottedDivider";
import Info from "@/sections/Info";
import Interests from "@/sections/Interests";
import Skills from "@/sections/Skills";
import Tools from "@/sections/Tools";

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
    </div>
  );
}
