import { useEffect } from "react";
import HeroMovie from "../../Components/HeroMovie";
import PrimaryLayout from  "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";




const HeroData = {
    poster: "https://us-thumbnail.s3-us-west-1.amazonaws.com/1/7/mm/p6izb_tnl_1920x1080.jpg?ts=20231122192623",
    title:"Black Friday",
    age:"14",
    genres:["drama","comedy" ,"sport"],
    playLink:"https://www.filimo.com/m/33374",
    infoLink:"",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};





 export default function HomePage() {
    return(
<PrimaryLayout>
 
 <HeroMovie data={HeroData}>

 
 </HeroMovie> 
 <MovieList title="Spotlight" url="movies"/>
 <MovieList title="New On Crackle " url="movies?page=3"/>
 <MovieList title="PopularTV" url="movies?page=4"/>
</PrimaryLayout>

    );
       
    
}