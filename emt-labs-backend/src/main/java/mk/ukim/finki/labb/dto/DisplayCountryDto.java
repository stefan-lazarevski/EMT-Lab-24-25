package mk.ukim.finki.labb.dto;

import mk.ukim.finki.labb.model.domain.Country;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayCountryDto (Long id, String name, String continent) {
    public static DisplayCountryDto from(Country country) {
        return new DisplayCountryDto(
                country.getId(),
                country.getName(),
                country.getContinent()
        );
    }
    public  Country toContinent(){
        return new Country(name, continent);
    }

    public static List<DisplayCountryDto> from(List<Country> countries) {
        return countries.stream().map(DisplayCountryDto::from).collect(Collectors.toList());
    }
}
