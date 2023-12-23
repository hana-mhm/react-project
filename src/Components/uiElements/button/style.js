import styled from "styled-components";
import { Pallete } from "../../../Them";


 function checkSize(props){
if(props.size==="large"){
  return "56px"
}else {
    return "40px"
}
    

 }



export const Style = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: none;
   text-transform: capitalize;
   cursor: pointer;
   height: ${(props) => checkSize(props)};
 a {
    display:${(props)=>(props.block ==="block" ? "block": "flex")};
    justify-content: center;
    text-transform: capitalize;
    align-items: center;
    border-radius: ${Pallete.defaultRadius};

    transition-duration: 70ms;
    transition-timing-function: ease-in-out;
    white-space: nowrap;
    font-weight: 600;
    font-size: ${(props)=>(props.size ==="large"? "15px": "13px")};
    line-height:14px;
    padding: ${(props)=>(props.size ==="large"? "7px 15px": "5px 10px")};
    width: calc(100% - 8px);
    height : ${(props) => (props.size ==="large" ? "48px" : "32px")};
    border:  ${(props) =>
        props.type ==="primary"
        ? "2px solid transparent"
        : props.type ==="dark"
        ?  "2px solid #eaf6ff26"
        : "2px solid transparent"};


    background: ${(props) =>
         props.type ==="primary" ? Pallete.primary 
         : props.type ==="dark"
         ?  "#151515cc"
         : "transparent"};

         color: ${(props) =>
            props.type ==="primary" ? Pallete.dark
            : props.type ==="dark"
            ? Pallete.primary
            : Pallete.defaultBtnColor};
        

   
 
         &:hover {
            width:100%;
            height:100%;
            background: ${(props) =>
                props.type ==="primary"
                 ? Pallete.primary 
                : props.type ==="dark"
                ?  "#151515cc"
                : "#151515cc"};
       
            border-color:
            ${(props) =>
            props.type ==="primary"
            ? "transparent"
            : props.type ==="dark"
            ?  Pallete.primary
            : "#eaf6ff26"};
            }



        }`;

