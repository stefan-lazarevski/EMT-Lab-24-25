package mk.ukim.finki.labb.service.application;
import mk.ukim.finki.labb.dto.CreateHousingDto;
import mk.ukim.finki.labb.dto.DisplayHousingDto;
import mk.ukim.finki.labb.model.enums.Category;

import java.util.List;
import java.util.Optional;

public interface HousingApplicationService {

    List<DisplayHousingDto> findAll();

    Optional<DisplayHousingDto> findById(Long id);

    Optional<DisplayHousingDto> update(Long id, CreateHousingDto housing);

    Optional<DisplayHousingDto> save(CreateHousingDto housing);

    void deleteById(Long id);

    Optional<DisplayHousingDto> rentHouse(Long houseId);

//    List<DisplayHousingDto> search(String name, Category category, Long hostId, Integer numRooms);

    List<DisplayHousingDto> searchByName(String name);
    List<DisplayHousingDto> searchByCategory(Category category);
    List<DisplayHousingDto> searchByHost(Long hostId);
    List<DisplayHousingDto> searchByNumRooms(Integer numRooms);

}
