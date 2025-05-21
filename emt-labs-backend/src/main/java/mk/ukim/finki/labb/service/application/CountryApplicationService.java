package mk.ukim.finki.labb.service.application;


import mk.ukim.finki.labb.dto.CreateCountryDto;
import mk.ukim.finki.labb.dto.DisplayCountryDto;


import java.util.List;
import java.util.Optional;

public interface CountryApplicationService {

    List<DisplayCountryDto> findAll();

    Optional<DisplayCountryDto> save(CreateCountryDto country);

    Optional<DisplayCountryDto> findById(Long id);

    Optional<DisplayCountryDto> update(Long id, CreateCountryDto country);

    void deleteById(Long id);
}
