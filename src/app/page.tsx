import Heading from "../../components/heading";
import Paragraph from "../../components/paragraph";
import SubHeading from "../../components/subheading";


export default function Home() {
  return (
    <div> 

      <h1 style={{background:"lightyellow" , color:"green", textDecoration:"underline"}}>DYNAMIC COMPONENTS IN NEXT.JS-13</h1> 
      <Heading name="John" qualification="Future Web developer and AI Engineer"/>  
      <Heading name="Zainab" qualification="AI Engineer"/>
      
      <Heading name="Tahir" qualification="Future Web developer"/>

      <Paragraph text="We are learning Next.js 13 in Quarter 2 and are able to build interactive websites soon" style={{color:"red"}}/>

<SubHeading text ="Lets Innovate The Country...." style={{color:"blue"}}/>
      
    </div>
  );
}
//rendering component with arguments and remembered that component becomes dynamic in page.tsx with passsing different arguments in page.tsx
      