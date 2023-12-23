import { createGlobalStyle } from "styled-components";



 export const Globalstyle = createGlobalStyle`
body {
    margin: 0;
    direction: ltr;
    font-family: "sora";
    background: #000;
    color:#fff;
}
.font {
    font-size:15px;
}
.container {
    width: 1100px;
    margin: 0 auto;
}
.content{
    padding: 106px 0 50px 0; 
}


ul , ol {
    padding: 0;
    margin: 0;
    list-style: none;
}
a {
    text-decoration: none;
}
.flex {
    display:flex;
}
.space-between {
    justify-content: space-between; 
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.justify-center{

    justify-content:center;
}
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.gap-15 {
    gap: 15px;
}
.gap-20 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
.h-full {
    height:100%;
}
.relative {
    position: relative;
}
`;