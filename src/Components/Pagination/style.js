import styled from "styled-components";

export const Style=styled.div`

ul{
    margin: 36px 30px;
    li{
        a{
            background-color: rgba(255,255,255);
            padding-left: 8px;
            padding-right: 8px;
            display: block;
            color:#000;
        }
       &.selected{
        a{
            background: #fe601f;
        }
       } 
    }
}


`;