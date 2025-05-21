package mk.ukim.finki.labb.dto;

import mk.ukim.finki.labb.model.domain.Country;

import java.util.List;

public record CreateCountryDto (String name, String continent) {

    public static CreateCountryDto from(Country country) {
        return new CreateCountryDto(country.getName(), country.getContinent());
    }

    public Country toCountry (){
        return new Country(name, continent);
    }

    public static List<CreateCountryDto> from(List<Country> countries) {
        return countries.stream().map(CreateCountryDto::from).toList();
    }
}
