import React from 'react';
import {useNavigate, useParams} from "react-router";
import useHousingDetails from "../../../../hooks/useHousingDetails.js";
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

const HousingDetails = () => {
    const {id} = useParams();
    const {housing, category, host} = useHousingDetails(id);
    const navigate = useNavigate();

    if (!housing || !category || !host) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }


    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/housings");
                    }}
                >
                    Housings
                </Link>
                <Typography color="text.primary">{housing.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4}}>
                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 3}}>
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
                                src={housing.image || "/placeholder-housing.jpg"}
                                variant="rounded"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{xs: 12, md: 9}}>
                        <Box sx={{mb: 3}}>
                            <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                {housing.name}
                            </Typography>

                            {/*<Stack direction="row" spacing={1} alignItems="center" sx={{mb: 2}}>*/}
                            {/*    <Rating*/}
                            {/*        value={housing.rating || 4.5}*/}
                            {/*        precision={0.5}*/}
                            {/*        readOnly*/}
                            {/*        emptyIcon={<Star style={{opacity: 0.55}} fontSize="inherit"/>}*/}
                            {/*    />*/}
                            {/*    <Typography variant="body2" color="text.secondary">*/}
                            {/*        ({housing.reviewCount || '12'} reviews)*/}
                            {/*    </Typography>*/}
                            {/*</Stack>*/}

                            <Typography variant="h4" color="primary.main" sx={{mb: 3}}>
                                {housing.numRooms}
                            </Typography>

                            <Typography variant="body1" sx={{mb: 3}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur culpa
                                doloribus, enim maiores possimus similique totam ut veniam voluptatibus. Adipisci
                                consequatur, cum dolorem eaque enim explicabo fugit harum, id laborum non totam ut!
                                Architecto assumenda deserunt doloribus ducimus labore magnam officiis sunt. Autem culpa
                                eaque obcaecati quasi, quo vitae.
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{mb: 3}}>
                                <Chip
                                    icon={<Category/>}
                                    label={category.name}
                                    color="primary"
                                    variant="outlined"
                                    sx={{p: 2}}
                                />
                                <Chip
                                    icon={<Factory/>}
                                    label={host.name}
                                    color="secondary"
                                    variant="outlined"
                                    sx={{p: 2}}
                                />
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid size={12} display="flex" justifyContent="space-between">
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<ShoppingCart/>}
                                size="large"
                                // onClick={addToCart}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<FavoriteBorder/>}
                            >
                                Wishlist
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<Share/>}
                            >
                                Share
                            </Button>
                        </Stack>
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBack/>}
                            onClick={() => navigate("/housings")}
                        >
                            Back to Housings
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default HousingDetails;
