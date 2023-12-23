import { Fragment } from "react";
import { Style } from "./style";
import { Link } from "react-router-dom";

export default function Button(props){
   const {children , className,icon, size="medium" ,type="default", to} = props; 
   function renderFarm() {
    if(icon) {
     return (
        <div className="flex gap-5 align-center">
       <span><i className={icon}/></span>
       <span>{children}</span>

        </div>
     );


    }else {
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
   }
    return(
        <Style size={size} type={type}>
        <Link className={className} to={to}>
            {renderFarm()}
            </Link> 
        </Style> 
    );
}


