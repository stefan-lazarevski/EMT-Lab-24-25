import {useCallback, useEffect, useState} from "react";
import housingRepository from "../repository/housingRepository.js";

const initialState = {
    "housings": [],
    "loading": true,
};

const useHousings = () => {
    const [state, setState] = useState(initialState);

    const fetchHousings = useCallback(() => {
        setState(initialState);
        housingRepository
            .findAll()
            .then((response) => {
                setState({
                    "housings": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        housingRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new housing.");
                fetchHousings();
            })
            .catch((error) => console.log(error));
    }, [fetchHousings]);

    const onEdit = useCallback((id, data) => {
        housingRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the housing with ID ${id}.`);
                fetchHousings();
            })
            .catch((error) => console.log(error));
    }, [fetchHousings]);

    const onDelete = useCallback((id) => {
        housingRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the housing with ID ${id}.`);
                fetchHousings();
            })
            .catch((error) => console.log(error));
    }, [fetchHousings]);

    useEffect(() => {
        fetchHousings();
    }, [fetchHousings]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
};

export default useHousings;
