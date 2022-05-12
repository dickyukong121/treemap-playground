import DATA from "../example.data";

function Calculation() {

    //sort the data first
    DATA.sort((a,b)=>{
        return b['weight'] - a['weight'];
    })

    const arrayLength = DATA.length();
    
}
