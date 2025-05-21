import {useEffect, useState} from "react";
import housingRepository from "../repository/housingRepository.js";
import hostRepository from "../repository/hostRepository.js";
import {useCategories} from "./useCategories.js"


const useHousingDetails = (id) => {
    const [state, setState] = useState({
        housing: null,
        category: null,
        host: null,
    });

    const categories = useCategories();  // ["ROOM", "HOUSE", ... ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const housingResponse = await housingRepository.findById(id);
                const housing = housingResponse.data;

                // Find category string from enum array, or null if not found
                const category = categories.includes(housing.category)
                    ? housing.category
                    : null;

                // Fetch host info
                const hostResponse = await hostRepository.findById(housing.hostId);

                setState({
                    housing,
                    category,
                    host: hostResponse.data,
                });
            } catch (error) {
                console.error("Failed to load housing details:", error);
            }
        };

        fetchData();
    }, [id, categories]);

    return state;
};

export default useHousingDetails;