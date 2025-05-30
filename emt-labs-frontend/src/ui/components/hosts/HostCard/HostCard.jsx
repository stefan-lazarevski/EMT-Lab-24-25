import InfoIcon from '@mui/icons-material/Info';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";

import {useNavigate} from "react-router";
import React, {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditHostDialog from "../HostDialog/EditHostDialog/EditHostDialog.jsx";
import DeleteHostDialog from "../HostDialog/DeleteHostDialog/DeleteHostDialog.jsx";

const HostCard = ({host, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [editHostDialogOpen, setEditHostDialogOpen] = useState(false);
    const [deleteHostDialogOpen, setDeleteHostDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{host.name + " " + host.surname}</Typography>
                    <Typography variant="body1"
                                sx={{textAlign: "right", fontSize: "1.25rem"}}>{host.country?.name ?? "Loading country.."}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/hosts/${host.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditHostDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteHostDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditHostDialog
                open={editHostDialogOpen}
                onClose={() => setEditHostDialogOpen(false)}
                host={host}
                onEdit={onEdit}
            />
            <DeleteHostDialog
                open={deleteHostDialogOpen}
                onClose={() => setDeleteHostDialogOpen(false)}
                host={host}
                onDelete={onDelete}
            />
        </>
    );
};

export default HostCard;