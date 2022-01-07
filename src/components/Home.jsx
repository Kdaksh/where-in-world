import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom'
const Home = ()=>{
    const [Data, setData] = useState(null)
   let history = useHistory()
  
   let redirectTo = (str)=>{
       history.push(str)
   }

    useEffect(() => {
        fetch('https://restcountries.com/v2/all').then((e)=>{
            e.json().then((d)=>{
                setData(d)
            })
        })
    })
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return <>
    <>
    {/* Search Bar */}
    <div className="searchBar">
        <div className="searchArea"><div className="input-wrapper">
            
            <i className="bi bi-search ico"></i>
            <input type="text" name="" id="" placeholder="Search For A Country" onInput={(e)=>{
                if (!Data);else {
                    
                
let s = e.target.value.toLowerCase().trim()
let array = document.getElementsByClassName('card')

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let v = element.attributes[1].value.toLowerCase().trim()
    if (v.includes(s)) {
        element.style.display = 'block'
    }
    else{
        element.style.display = 'none'
    }
    
}
                }

            }} />
            </div></div>
      
    </div>
    <div className="mainContent">
       {Data ? (
           Data.map((e)=>{
               let url = "/"+(e.alpha2Code.toLowerCase())
               return <>
                 <div className="card" data-name={e.name} onClick={()=>{redirectTo(url)}}>
            <img src={e.flags.png} alt="" className="cardTop" />
        
        <div className="cardMain">
            <div className="cardTxt">{e.name}</div>
            <div className="cardDesc">
                <p><span className="strong">Population:</span>{numberWithCommas(e.population)}</p>
                <p><span className="strong">Region:</span> {e.region}</p>
                <p><span className="strong">Capital:</span> {e.capital}</p>
            </div>
        </div>
        </div>
               </>
           })
       ):  <h1>Loading<span className="loadingdots"></span></h1>}
        
    </div>
    </>
    </>
    }
    
    export default Home