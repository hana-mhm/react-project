import styled from "styled-components";
import { Pallete } from "../../../Them";

export const Style = styled.div`
padding-bottom: 60px;

.title {
    text-transform: capitalize;
    color:${Pallete.whiteColor1}
}
  
ul{
    li{
        a{
            text-transform: capitalize;
            color:#9da1a4;
            display:block;
            padding:8px 4px;
            &:hover{
               color:#fff; 
            }

        }
    }
}

`;