
import './App.css';

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]



function Month() {
    const d = new Date();
    let currentMonth = d.getMonth()
        for (let x=0; x<months.length; x++){
            if (x===currentMonth){
                return(
                  <div className= "Month">{months[x]}</div>);     
        }
    }          
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="calendar.png" className="Calendar-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React  
         
        </a>
        in <br/>
        <a
        href="calendar.html"
        >
          <Month />
        </a>
      </header>
    </div>

  );
}

export default App;
