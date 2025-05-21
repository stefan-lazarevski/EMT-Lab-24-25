import React from 'react';
import {useNavigate, useParams} from "react-router";
import useHostDetails from "../../../../hooks/useHostDetails.js";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Grid,
    Typography,
    Paper,
    Avatar,
    Stack,
    Rating,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack,
    Category,
    Factory,
    Star,
    ShoppingCart,
    FavoriteBorder,
    Share
} from "@mui/icons-material";

const HostDetails = () => {
    const { id } = useParams();
    const { host, country } = useHostDetails(id);
    const navigate = useNavigate();

    if (!host || !country) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/hosts");
                    }}
                >
                    Hosts
                </Link>
                <Typography color="text.primary">{host.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{ p: 4, borderRadius: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 4,
                            bgcolor: 'background.paper',
                            p: 3,
                            borderRadius: 3,
                            boxShadow: 1
                        }}>
                            <Avatar
                                src={host.image || "/placeholder-host.jpg"}
                                variant="rounded"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                            {host.name}
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {host.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                            <Chip
                                icon={<Factory />}
                                label={`Host ID: ${host.id}`}
                                color="secondary"
                                variant="outlined"
                                sx={{ p: 2 }}
                            />
                            <Chip
                                icon={<Factory />}
                                label={country.name}
                                color="primary"
                                variant="outlined"
                                sx={{ p: 2 }}
                            />
                        </Stack>

                        <Button
                            variant="outlined"
                            startIcon={<ArrowBack />}
                            onClick={() => navigate("/hosts")}
                        >
                            Back to Hosts
                        </Button>
                    </Grid>
                    </Grid>
            </Paper>
        </Box>
    );
};

export default HostDetails;