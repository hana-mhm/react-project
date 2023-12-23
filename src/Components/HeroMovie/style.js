import styled from "styled-components";

 export const Style = styled.div`
.hero-movie {
     width: 100%;
     position: relative;
    
     .children {
        z-index: 2;

     }
    .poster {
       width: 100%;
       height: 360px;
       background-position: top center;
       background-size: cover;
       position: absolute;
       left:0;
       top:0;
    }
    .content{
       z-index: 2;
       padding-top: 77px;
       border-bottom: 2px solid #fe601f;
        .name{
          color:#fff;
          text-transform: capitalize;
          font-size:2rem;
          margin-bottom: 5px;
        }
        .age{
            background:#101010;
            border:1px solid #3a3532;
            border-radius: 4px;
            padding: 5px;
            color:#fff;
            font-weight:600;
            font-size:0.8rem;
             
        }
        .genres {
            color: #fff;
            text-transform: capitalize;


        }
        .btn-group {
            margin-top: 12px;
        }
        .description {
            margin-top: 30px;
            color:#fff;
            max-width:600px;
            p {
              font-weight: 500;
            }
        }
    }
&:after {
    position: absolute;
    content:"";
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.6);
   

}
}

`;