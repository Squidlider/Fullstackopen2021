function CountryInfo({data}) {
    
    return (
        <div>
            {data.map(country => {
                return(
                    <>
                    <h1>{country.name}</h1>
                    <p>Capital {country.capital}</p>
                    <p>Capital {country.population}</p>
                    <h2>Languages:</h2> {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                    <img src={country.flag} max-width="150px" height="100px" alt={'flag of ' + country.name}/>
                    </>
                )
            })}
        </div>
    )
}

export default CountryInfo