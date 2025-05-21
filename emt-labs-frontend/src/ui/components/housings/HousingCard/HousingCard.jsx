import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditHousingDialog from "../HousingDialog/EditHousingDialog/EditHousingDialog.jsx";
import DeleteHousingDialog from "../HousingDialog/DeleteHousingDialog/DeleteHousingDialog.jsx";
import {useNavigate} from "react-router";

const HousingCard = ({housing, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [editHousingDialogOpen, setEditHousingDialogOpen] = useState(false);
    const [deleteHousingDialogOpen, setDeleteHousingDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{housing.name}</Typography>
                    <Typography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda blanditiis cum
                        ducimus enim modi natus odit quibusdam veritatis.
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: "right"}}>{housing.numRooms} number of rooms available</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/housings/${housing.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditHousingDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteHousingDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditHousingDialog
                open={editHousingDialogOpen}
                onClose={() => setEditHousingDialogOpen(false)}
                housing={housing}
                onEdit={onEdit}
            />
            <DeleteHousingDialog
                open={deleteHousingDialogOpen}
                onClose={() => setDeleteHousingDialogOpen(false)}
                housing={housing}
                onDelete={onDelete}
            />
        </>
    );
};

export default HousingCard;