import React, { useState } from 'react';
import { Box, Button, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AddHousingDialog from "../../components/housings/HousingDialog/AddHousingDialog/AddHousingDialog.jsx";
import useHousings from "../../../hooks/useHousings.js";
import HousingsGrid from "../../components/housings/HousingsGrid/HousingsGrid.jsx";
import { useCategories } from "../../../hooks/useCategories.js";

const HousingsPage = () => {
    const { housings, loading, onAdd, onEdit, onDelete } = useHousings();
    const categories = useCategories();
    const [addHousingDialogOpen, setAddHousingDialogOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event, newCategory) => {
        setSelectedCategory(newCategory);
    };

    const filteredHousings = selectedCategory
        ? housings.filter(h => h.category === selectedCategory)
        : housings;

    return (
        <>
            <Box className="housings-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress />
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                            <ToggleButtonGroup
                                color="primary"
                                value={selectedCategory}
                                exclusive
                                onChange={handleCategoryChange}
                                aria-label="housing category"
                            >
                                {categories.map(category => (
                                    <ToggleButton key={category} value={category}>
                                        {category}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                            <Button variant="contained" color="primary" onClick={() => setAddHousingDialogOpen(true)}>
                                Add Housing
                            </Button>
                        </Box>
                        <HousingsGrid housings={filteredHousings} onEdit={onEdit} onDelete={onDelete} />
                    </>}
            </Box>
            <AddHousingDialog
                open={addHousingDialogOpen}
                onClose={() => setAddHousingDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default HousingsPage;
