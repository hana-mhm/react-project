import { api } from "../../Utills/api";
import { useEffect,useState } from "react";
import {Style} from "./style";
import { Link } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Pagination from "../../Components/Pagination";

export default function Movies(){

    const [data, setData]= useState({
        data: [],
        metadata: {
        current_page: 1,
        per_page: 10,
        page_count: 25,
        total_count: 250,
    },
    });
    useEffect(function (){
         document.title=  "movies"
          getApi();
        },[]);


   function getApi(page = 1) {
    api.get(`movies?page=${page}`)
    .then(function(res){
    setData(res.data);
    })
    .catch(function(){});
    }
      
function renderFarm(){
    return data.data.map((item)=> {
        const {id , title , poster } = item;
        return (
         
            <li key={id}>
                
            <img src={poster}/>
             <h2>{title}</h2>
             
         
            </li>
           
        );
    });
}

function handlePageClick(e){
   getApi(e.selected + 1);
}
    return(
      <Style>
    
           <ul>
            
                {renderFarm()}
            
            </ul>
            <Pagination
            onPageChange={handlePageClick}
            pageCount={data.metadata.page_count}
            itemsPerPage={10}
            />
           </Style>
    )
        
    }
    