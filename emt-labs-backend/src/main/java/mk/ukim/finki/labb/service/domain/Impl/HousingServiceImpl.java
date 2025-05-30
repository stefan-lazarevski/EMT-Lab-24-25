package mk.ukim.finki.labb.service.domain.Impl;


import mk.ukim.finki.labb.model.domain.Host;
import mk.ukim.finki.labb.model.domain.Housing;
import mk.ukim.finki.labb.model.enums.Category;
import mk.ukim.finki.labb.repository.CountryRepository;
import mk.ukim.finki.labb.repository.HostRepository;
import mk.ukim.finki.labb.repository.HousingCountViewRepository;
import mk.ukim.finki.labb.repository.HousingRepository;
import mk.ukim.finki.labb.service.domain.HousingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HousingServiceImpl implements HousingService {

    private final HousingRepository housingRepository;
    private final HostRepository hostRepository;
    private final HousingCountViewRepository housingCountViewRepository;


    public HousingServiceImpl(HousingRepository housingRepository, HostRepository hostRepository, HousingCountViewRepository housingCountViewRepository) {
        this.housingRepository = housingRepository;
        this.hostRepository = hostRepository;
        this.housingCountViewRepository = housingCountViewRepository;
    }

    @Override
    public List<Housing> findAll() {
        return this.housingRepository.findAll();
    }

    @Override
    public Optional<Housing> findById(Long id) {
        return this.housingRepository.findById(id);
    }

    @Override
    public Optional<Housing> update(Long id, Housing housingDto) {
        return housingRepository.findById(id).map(existingHouse -> {
            if (housingDto.getName() != null) {
                existingHouse.setName(housingDto.getName());
            }
            if (housingDto.getCategory() != null) {
                existingHouse.setCategory(housingDto.getCategory());
            }
            if (housingDto.getHost().getId() != null && hostRepository.findById(housingDto.getHost().getId()).isPresent()) {
                existingHouse.setHost(hostRepository.findById(housingDto.getHost().getId()).get());
            }
            if (housingDto.getNumRooms() != null) {
                existingHouse.setNumRooms(housingDto.getNumRooms());
            }
//            Housing updateHousing = housingRepository.save(existingHouse);
//            this.refreshMaterializedView();
//            return updateHousing;

            return housingRepository.save(existingHouse);
        });
    }

    @Override
    public Optional<Housing> save(Housing housing) {
//        Optional<Host> host = hostRepository.findById(housing.getHost().getId());
//        return host.map(houseHost -> housingRepository.save
//                (new Housing(housing.getName(), housing.getCategory(),hostRepository.findById(housing.getHost().getId()).get(), housing.getNumRooms())));

        if (housing.getHost() !=null && hostRepository.findById(housing.getHost().getId()).isPresent())
            return Optional.of(housingRepository.save(new Housing(housing.getName(), housing.getCategory(), hostRepository.findById(housing.getHost().getId()).get(), housing.getNumRooms())));
        return Optional.empty();
    }

    @Override
    public Optional<Housing> rentHouse(Long houseId) {
        return housingRepository.findById(houseId).map(house -> {
            if (house.getNumRooms() > 0) {
                house.setNumRooms(house.getNumRooms() - 1);
                housingRepository.save(house);
                return house;
            } else {
                throw new IllegalStateException("No available houses left.");
            }
        });
    }

    @Override
    public List<Housing> searchByName(String name) {
        return housingRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Housing> searchByCategory(Category category) {
        return housingRepository.findByCategory(category);
    }

    @Override
    public List<Housing> searchByHost(Long hostId) {
        return hostRepository.findById(hostId)
                .map(host -> housingRepository.findByHost_NameContainingIgnoreCaseOrHost_SurnameContainingIgnoreCase(host.getName(), host.getSurname()))
                .orElse(List.of());
    }

    @Override
    public List<Housing> searchByNumRooms(Integer numRooms) {
        return housingRepository.findByNumRooms(numRooms);
    }


    @Override
    public void deleteById(Long id) {
        housingRepository.deleteById(id);
    }


//    @Override
//    public List<Housing> findByFilters(String name, Category category, Long hostId, Integer numRooms) {
//        return housingRepository.findByFilters(name, category, hostId, numRooms);
//    }

    @Override
    public void refreshMaterializedView() {
            housingCountViewRepository.refreshMaterializedView();
    }
}
