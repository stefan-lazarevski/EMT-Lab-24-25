import { useEffect, useState } from "react";
import hostRepository from "../repository/hostRepository.js";
import countryRepository from "../repository/countryRepository.js";

const useHostDetails = (id) => {
    const [state, setState] = useState({
        host: null,
        country: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Step 1: Fetch host by id
                const hostResponse = await hostRepository.findById(id);
                const host = hostResponse.data;

                // Defensive check if countryId exists on host
                if (!host.countryId) {
                    throw new Error("Host data missing countryId");
                }

                // Step 2: Fetch country by host.countryId
                const countryResponse = await countryRepository.findById(host.countryId);
                const country = countryResponse.data;

                // Step 3: Set state with host and country
                setState({ host, country });
            } catch (error) {
                console.error("Failed to load host details:", error);
                setState({ host: null, country: null });  // or handle error state explicitly
            }
        };

        if (id) { // make sure id is valid before fetching
            fetchData();
        }
    }, [id]);

    return state;
};

export default useHostDetails;