import ChiefCard from "./ChiefCard";

export default function ChiefSection(){
 const chiefs = [
{
    name: "Juan Carlos",
    img: "/img/top-chiefs/img_1 (2).jpg",
    recipesCount: "10",
    cuisine: "Mexican"
},

{
    name: "Juan Doe",
    img: "/img/top-chiefs/img_2 (2).jpg",
    recipesCount: "05",
    cuisine: "Japanese"
},

{
    name: "Erich Maria",
    img: "/img/top-chiefs/img_3 (2).jpg",
    recipesCount: "13",
    cuisine: "Italian"
},

{
    name: "Chris Brown",
    img: "/img/top-chiefs/img_4 (2).jpg",
    recipesCount: "08",
    cuisine: "American"
},

{
    name: "Ben stokes",
    img: "/img/top-chiefs/img_5 (2).jpg",
    recipesCount: "09",
    cuisine: "French"
},

{
    name: "Blake Carlos",
    img: "/img/top-chiefs/img_6 (2).jpg",
    recipesCount: "04",
    cuisine: "Indian"
}

 ]


    return(
        <div className="section chiefs" >
            <h1 className="title" > Our Top Chiefs</h1>
            <div className="top-chiefs-container" >
                
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
               
            </div>
        </div>
    )
}