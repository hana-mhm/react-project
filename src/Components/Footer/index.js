import FooterMenu from "./FooterMenu";
import { Style } from "./style"

const learnMore = [
    {
        name:"about crackle",
        link:"#",

     },
     {
        name:"supported deviced",
        link:"#",

     },
     {
        name:"careers",
        link:"#",

     },
     {
        name:"advertise with us",
        link:"#",

     },
];
const getHelp = [
    {
        name:"FAQS",
        link:"#",

     },
     {
        name:"submit a request",
        link:"#",

     },
     
];
const stayLegal = [
    {
        name:"ad choices",
        link:"#",

     },
     {
        name:"privacy policy",
        link:"#",

     },
     {
        name:"terms of service",
        link:"#",

     },
     {
        name:"accessibilty",
        link:"#",

     },
];
export default function Footer() {
  return(
    <Style>
    <div className="footer">
        <div className="container">
            <div className="flex space-between">
              <FooterMenu menuTitle="learn more" items={learnMore} />
              <FooterMenu menuTitle="get help" items={getHelp} />  
              <FooterMenu menuTitle="stay legal" items={stayLegal} />  
            </div>
            <div className="social">
                <ul className="flex justify-center gap-20">
                    <li><a><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a><i className="fa-brands fa-youtube"></i></a></li>
                    <li><a><i className="fa-brands fa-linkdin"></i></a></li>
                </ul>
            </div>
            <div className="copyright">
                
            <p>2023 crackle plus,llc,all rights reserved.</p>
           
            </div>
          
        </div>
        <div className="bottom-footer"></div>
        
    </div>
    </Style>
  );

}
    