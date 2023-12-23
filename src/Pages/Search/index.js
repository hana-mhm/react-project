
import { useEffect, useState , useRef} from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { api } from "../../Utills/api";
import { Style } from "./style";
import { useSearchParams, createSearchParams, Link } from "react-router-dom"; 



export default function Search(){
    const input= useRef(null);
    const [searchParams ,setSearchParams] = useSearchParams();
    console.log(searchParams.get("q"));
    const [data,setData] = useState({
        data:[],
        metadata: {
        current_page: 1,
         per_page: 10,
         page_count: 1,
         total_count: 1,
    },
    });
    useEffect(function(){
        if(searchParams.get("q")){
          getApi(searchParams.get("q")); 
        }
       
    },[]);
    useEffect(function(){
        console.log(input.current.focus());
    },[])
    function getApi(search){
        api
        .get("movies", { params : {q: search} })
        .then(function(response){
           setData(response.data);
           })
           .catch(function(error){});
    }
    function typing(event) {
        getApi(event.target.value);
        setSearchParams(createSearchParams({ q: event.target.value }));
    }
    function renderFarm(){
        if(data.data.length === 0) {
            return "Not Found";
        } 
     return data.data.map(({ id,title,poster})=>{
        
    return(
        <li key={id}>
           
         <h2>{title}</h2>
         <img src={poster} style={{width:"150px"}}/>
             

        </li>
    );


     })


    }
    return(
        <PrimaryLayout>
            <Style>
                <div className="container">
        <div className="content">
            <input ref={input} onChange={typing} type="text" value={searchParams.get("q") ? searchParams.get("q") : ""} placeholder="type somthing..."></input>
            </div>
            </div>
            <ul>{renderFarm()}</ul>
            </Style>
        </PrimaryLayout>
    )
}