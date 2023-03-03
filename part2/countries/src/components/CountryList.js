const CountryList = ({displayedCountries, showCountry, value}) => {

    if(displayedCountries) {
        if(displayedCountries.length < 11)
            return (
                <table>
                    <tbody>
                        {displayedCountries.map(country => 
                            <tr key={country.name.common}>
                                <td>
                                    {country.name.common}
                                </td>
                                <td>
                                    <button onClick={() => showCountry(country)}>show</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
        )
        else if (value) {
            return (
                <p>Too many results.</p>
            )
        }
    }
}

export default CountryList