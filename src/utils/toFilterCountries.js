const toFilterCountries = (allCountries, searchedValue) => {
    const filteredCountries = !allCountries
    ? null
    : allCountries.filter(({ country_name }) => country_name.toLowerCase().includes(searchedValue.toLowerCase()));

    const countries = !searchedValue
    ? allCountries
    : filteredCountries;

    return countries;
};

export default toFilterCountries;
