import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


const Country = () => {
  let { slug } = useParams();
  const [data, setData] = useState(null)
  const [Border, setBorder] = useState(null)
  let history = useHistory()
  let goBack = () => {
    history.goBack()
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {

    fetch(`https://restcountries.com/v2/alpha/${slug}`).then((e) => {

      e.json().then((d) => {
        let url = ''
        if (d.borders) {


          d.borders.map((e) => {
            url += e + ','
          })
          let arr = []

          fetch(`https://restcountries.com/v2/alpha?codes=${url}`).then((e) => {
            e.json().then((ef) => {
              ef.map((er) => {
                arr.push(er.name);
              })
              setBorder(arr)
              setData(d)
            })
          })
        }
        else{
          setData(d)
        }
        })
    
   })
})

return (
  <>
    <div className="btnLayer">
      <div className="btn" onClick={goBack}>
        <i className="bi bi-arrow-left"></i>Back
      </div>
    </div>
    {(data) ? (<>

      <div className="mainArea">
        <div className="flagArea">
          <img className="flag" src={data.flags.png} alt="" />
        </div>
        <div className="content">
          
          <div className="wrapp">
          <h1 className="title">{data.name}</h1>
            <div className="col-1">
              <p>
                <span className="strong">Native Name:</span>{numberWithCommas(data.nativeName)}
              </p>
              <p>
                <span className="strong">Population:</span>{numberWithCommas(data.population)}
              </p>
              <p>
                <span className="strong">Region:</span>{data.region}
              </p>
              <p>
                <span className="strong">Sub Region:</span>{data.subregion}
              </p>
              <p>
                <span className="strong">Capital:</span>{data.capital}
              </p>


            </div>
            <div className="col-2">
              <p>
                <span className="strong">Top Level Domain:</span>{data.topLevelDomain[0]}
              </p>
              <p>
                <span className="strong">Currencies:</span> {data.currencies.map((e, i) => {
                  return `${e.name}${(data.currencies.length - 1 == i) ? '' : ','} `
                })}
              </p>
              <p>
                <span className="strong">Languages:</span>{data.languages.map((e, i) => {
                  return `${e.name}${(data.languages.length - 1 == i) ? '' : ','} `
                })}
              </p>
            </div>
            <div className="bottomArea2">
           {Border ? ( <div className="b-wrap">
              <span  className="strong">Border Countries:</span>
              {Border.map((e, i) => {
                return <div  className="btn small">{e}</div>
              })}
            </div>) : <></>}
          </div>
          </div>
          <div className="bottomArea1">
           {Border ? ( <div className="b-wrap">
              <span  className="strong">Border Countries:</span>
              {Border.map((e, i) => {
                return <div  className="btn small">{e}</div>
              })}
            </div>) : <></>}
          </div>
        </div>
      </div>


    </>) : <h1 style={{textAlign:'center'}}>Loading<span className="loadingdots"></span></h1>}

  </>
);
};

export default Country;
