import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import AddCountryDialog from "../../components/countries/CountryDialog/AddCountryDialog/AddCountryDialog.jsx";
import useCountries from "../../../hooks/useCountries.js";
import CountryGrid from "../../components/countries/CountryGrid/CountryGrid.jsx";

const CountriesPage = () => {
    const {countries, loading, onAdd, onEdit, onDelete} = useCountries();
    const [addCountryDialogOpen, setAddCountryDialogOpen] = useState(false);

    return (
        <>
            <Box className="country-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddCountryDialogOpen(true)}>
                                Add Country
                            </Button>
                        </Box>
                        <CountryGrid countries={countries} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddCountryDialog
                open={addCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CountriesPage;
