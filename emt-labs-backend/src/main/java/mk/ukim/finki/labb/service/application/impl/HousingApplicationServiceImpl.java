package mk.ukim.finki.labb.service.application.impl;

import mk.ukim.finki.labb.dto.CreateHousingDto;
import mk.ukim.finki.labb.dto.DisplayHousingDto;
import mk.ukim.finki.labb.model.domain.Host;
import mk.ukim.finki.labb.model.enums.Category;
import mk.ukim.finki.labb.service.application.HousingApplicationService;
import mk.ukim.finki.labb.service.domain.HostService;
import mk.ukim.finki.labb.service.domain.HousingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HousingApplicationServiceImpl implements HousingApplicationService {

    private final HousingService housingService;
    private final HostService hostService;

    public HousingApplicationServiceImpl(HousingService housingService, HostService hostService) {
        this.housingService = housingService;
        this.hostService = hostService;
    }

    @Override
    public List<DisplayHousingDto> findAll() {
        return housingService.findAll()
                .stream()
                .map(DisplayHousingDto::from)
                .toList();
    }

    @Override
    public Optional<DisplayHousingDto> findById(Long id) {
        return housingService.findById(id)
                .map(DisplayHousingDto::from);
    }

    @Override
    public Optional<DisplayHousingDto> save(CreateHousingDto housing) {
        Optional<Host> host = hostService.findById(housing.hostId());
        if (host.isPresent()){
            return housingService.save(housing.toHousing(host.get())).map(DisplayHousingDto::from);
        }
        return Optional.empty();
    }

    @Override
    public Optional<DisplayHousingDto> update(Long id, CreateHousingDto housing) {
        Optional<Host> host = hostService.findById(housing.hostId());
        return housingService.update(id, housing.toHousing(host.orElse(null))).map(DisplayHousingDto::from);
    }

    @Override
    public Optional<DisplayHousingDto> rentHouse(Long houseId) {
        return housingService.rentHouse(houseId)
                .map(DisplayHousingDto::from);
    }

    @Override
    public void deleteById(Long id) {
        housingService.deleteById(id);
    }

//    @Override
//    public List<DisplayHousingDto> search(String name, Category category, Long hostId, Integer numRooms) {
//        return housingService.findByFilters(name, category, hostId, numRooms)
//                .stream()
//                .map(DisplayHousingDto::from)
//                .toList();
//    }

    @Override
    public List<DisplayHousingDto> searchByName(String name) {
        return housingService.searchByName(name).stream().map(DisplayHousingDto::from).toList();
    }

    @Override
    public List<DisplayHousingDto> searchByCategory(Category category) {
        return housingService.searchByCategory(category).stream().map(DisplayHousingDto::from).toList();
    }

    @Override
    public List<DisplayHousingDto> searchByHost(Long hostId) {
        return housingService.searchByHost(hostId).stream().map(DisplayHousingDto::from).toList();
    }

    @Override
    public List<DisplayHousingDto> searchByNumRooms(Integer numRooms) {
        return housingService.searchByNumRooms(numRooms).stream().map(DisplayHousingDto::from).toList();
    }
}
