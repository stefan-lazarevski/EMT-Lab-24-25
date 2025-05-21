package mk.ukim.finki.labb.dto;

import mk.ukim.finki.labb.model.domain.Country;
import mk.ukim.finki.labb.model.domain.Host;

import java.util.List;

public record CreateHostDto (String name, String surname, Long countryId) {

    public static CreateHostDto from(Host host) {
        return new CreateHostDto(host.getName(), host.getSurname(), host.getCountry().getId());
    }

    public Host toHost(Country country){
        return new Host(name, surname, country);
    }

    public static List<CreateHostDto> from(List<Host> hosts) {
        return hosts.stream().map(CreateHostDto::from).toList();
    }
}
