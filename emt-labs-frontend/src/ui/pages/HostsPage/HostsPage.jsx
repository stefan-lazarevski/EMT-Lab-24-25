import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import AddHostDialog from "../../components/hosts/HostDialog/AddHostDialog/AddHostDialog.jsx";
import useHosts from "../../../hooks/useHosts.js";
import HostGrid from "../../components/hosts/HostGrid/HostGrid.jsx";

const HostsPage = () => {
    const {hosts, loading,onAdd,onEdit,onDelete} = useHosts();
    const [addHostDialogOpen, setAddHostDialogOpen] = useState(false);
    const [countries, setCountries] = useState([]);

    return (
        <>
            <Box className="hosts-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddHostDialogOpen(true)}>
                                Add Hosts
                            </Button>
                        </Box>
                        <HostGrid hosts={hosts} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddHostDialog
                open={addHostDialogOpen}
                onClose={() => setAddHostDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default HostsPage;
