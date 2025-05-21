import React, {useState} from 'react';
import {
    Button, CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField, Typography
} from "@mui/material";
import useCountries from "../../../../../hooks/useCountries.js";

const initialFormData = {
    "name": "",
    "surname": "",
    "country": "",
};

const AddHostDialog = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState(initialFormData);
    // const countries = useCountries();
    const { countries, loading } = useCountries();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Host</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />

                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined">
                        {/*{countries.map((country) => (*/}
                        {/*    <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>*/}
                        {/*))}*/}

                        {loading ? (
                            <MenuItem disabled>Loading countries...</MenuItem>
                        ) : (
                            countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.name}
                                </MenuItem>
                            ))
                        )}

                    </Select>
                </FormControl>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddHostDialog;