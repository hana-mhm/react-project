import { useParams } from "react-router-dom";
import { Style } from "./style"
import { useEffect, useState } from "react";
import { api } from "../../Utills/api";
import Movies from "../Movies";


export default function SingleMovie(props){
    const {id} = useParams();
    const [data,setData]= useState({});

    useEffect(function (){
    api.get(`/movies/${id}`)
    .then(function(res){
    setData(res.data);
    })
    .catch(function(error){
        
    })
    },[]);
      return(
        <Style> 
        <div className="single">
          
          <img src={data.poster}/>
           <h1 className="font">{data.title}</h1>
           <h2 className="font">{data.year}</h2>
           <h2 className="font">{data.country}</h2>
           <h2 className="font">{data.director}</h2>
           <h2 className="font">{ data.type}</h2>
           <h4 className="font">{data.plot}</h4>
           </div>
           <Movies title="similar"></Movies>
          
       
         </Style>
            
    );
   
    }
 