const CountryInfo = ({country}) => {
    return (
        <div>
            <h2>{country.name.common} {country.flag}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Capital: </td><td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area: </td><td>{country.area} km²</td>
                    </tr>
                    <tr>
                        <td>Population: </td><td>{country.population}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Languages</h3>
            <ul>
                {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
            </ul>
        </div>
        
    )
}

export default CountryInfo