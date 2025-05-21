package mk.ukim.finki.labb.dto;

import mk.ukim.finki.labb.model.domain.Host;
import mk.ukim.finki.labb.model.domain.Housing;
import mk.ukim.finki.labb.model.enums.Category;

import java.util.List;

public record CreateHousingDto(String name, Category category, Long hostId, Integer numRooms) {

    public static CreateHousingDto from(Housing housing) {
        return new CreateHousingDto(housing.getName(), housing.getCategory(), housing.getHost().getId(), housing.getNumRooms());
    }

    public Housing toHousing(Host host){
        return new Housing(name, category, host, numRooms);
    }

    public static List<CreateHousingDto> from(List<Housing> housings) {
        return housings.stream().map(CreateHousingDto::from).toList();
    }
}
