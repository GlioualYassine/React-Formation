import React from 'react'
import axios from 'axios'
import { useEffect , useState , useRef } from 'react'
const CountriesList = () => {
    const searchInput = useRef("")
    const searchByRegion = useRef("")
    const [Countries,setCountries] = useState([])
    const [urlSegment,setUrlSegment] = useState("all")

    const getCountries = async ()=>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/${urlSegment}`)
            if(response.status===200){
                 setCountries(response.data)
                 
            }
           
        } catch (error) {
           // console.log(error)
        }
    }
    const SearchCountries = async (e)=>{
        e.preventDefault()
        const search = searchInput.current.value
        if(search === ""){
            alert("please white smth")
            return
        }

        setUrlSegment(`name/${search}`)

    }

    const resetCountries = (e) => {
        e.preventDefault()
        searchInput.current.value = ""
        searchByRegion.current.value = ""
        setUrlSegment("all")
    }

    const searchRegion = ()=>{
        let myRegion = searchByRegion.current.value 
        console.log(myRegion)
        if(myRegion !== ""){
            setUrlSegment(`region/${myRegion}`)
        }
    }


    useEffect(()=>{
        getCountries();
    },[urlSegment])


  return (
    <>
        <div className="row my-5">
            <div className="col-md-8">
                <h1>List of Countries</h1>
            </div>               
            <div className="col-md-4 text-right">
            <form className="d-flex" onSubmit={SearchCountries}>

                <select onChange={searchRegion} className='form-control mx-2' ref={searchByRegion}>
                    <option value="">Select a region</option>
                    <option value="africa">africa</option>
                    <option value="asia">asia</option>
                    <option value="europe">europe</option>
                    <option value="americas">americas</option>
                    <option value="oceania">oceania</option>
                </select>
                <input ref={searchInput} className="form-control me-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                
                {urlSegment !== "all" && (
                    <button onClick={resetCountries} className="btn btn-link my-2 my-sm-0" >Reset</button>
                )}
            </form>
            </div>
        </div>

        <div className="row">
            {Countries.map((Countr,index)=>(
                <div className="col-md-4" key={index}>
                   <div className="card my-2">
                    <img className="card-img-top" src={Countr.flags.png} alt="Title"/>
                    <div className="card-body">
                        <h4 className="card-title">{Countr.name.official}</h4>
                        <p className="card-text">Region : {Countr.region}</p>
                        <p className="card-text">Capital : {Countr.capital}</p>
                    </div>
                   </div>
                </div>
            ))}
            
        </div>
    </>
  )
}

export default CountriesList