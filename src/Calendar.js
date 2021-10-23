import './calendar.css';

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


const d = new Date();
let currentMonth = d.getMonth()
console.log(currentMonth)

function getCurrentMonth () {
    for (let x=0; x<months.length; x++){
            if (x==currentMonth){
                return(months[x]);
        }
    }      
}
getCurrentMonth()

function getNextMonth (){
    for (let x=0; x<months.length; x++){
        if (x==currentMonth){
            console.log("Hi")
            return (months[x+1]);
   
        }   
    }      
}

getNextMonth()


function getPreviousMonth (){
    for (let x=0; x<months.length; x++){
        if (months[x]==currentMonth){
            console.log("Yes")
            return (months[x-1]);
        }   
    }      
}
getPreviousMonth();

//document.getElementById("next").onclick = getNextMonth;

//document.getElementById("prev").onclick = getPreviousMonth;


