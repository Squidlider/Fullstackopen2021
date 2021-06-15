import CountryInfo from "./CountryInfo";


function CountryList({data}) {
    
    if(data.length === 1) {
        return (
            <>
            <CountryInfo data={data}/>
            </>
        )
    }

    if(data.length > 10) {
        return (
            <div>
                Tarkenna hakuehtoja
            </div>
        )
    } else {
        return <>{data.map((country, i) => <li key={i}>{country.name}</li>)}</>
    }

}

export default CountryList