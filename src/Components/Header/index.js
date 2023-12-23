import { Fragment } from "react";
import { Style } from "./style";
import Button from "../uiElements/button";


export default function Header(){
    return(
        <Style className="header" >
          
               
                <div className="container">
                    <div className="header-inner flex space-between">
                        <div className="left flex gap-40 align-center">
                          <div className="logo">
                            <img src="assets/images/logo.svg" />
                          </div>
                         <div className="menu">
                            <ul className="flex align- gap-20">
                                <li>
                                <Button to="/movies" size="large" icon="fa-solid fa-film">
                                movies
                                </Button>
                                </li>
                                
                                <li>
                                <Button size="large" icon="fa-solid fa-tv">
                                tv shows
                                </Button>
                                </li>
                                <li>
                                <Button size="large" icon="fa-solid fa-plus">
                                watchlist
                                </Button>
                                </li>
                                     
                             </ul>
                            </div>                               
                        </div>
                        <div className="right flex gap-10 align-center">
                        <Button to="/search" icon="fa-solid fa-search" type="default">search</Button>    
                       <Button  type="primary">create account</Button>
                       <Button className="bold" type="dark">sign in</Button>
                       
                        </div>
                    </div>
                </div>
            
            </Style>
    )
}