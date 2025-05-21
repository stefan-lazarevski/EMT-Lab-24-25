import React from 'react';
import HousingCard from "../HousingCard/HousingCard.jsx";
import {Grid} from "@mui/material";

const HousingsGrid = ({housings, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {housings.map((housing) => (
                <Grid item key={housing.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <HousingCard housing={housing} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default HousingsGrid;
