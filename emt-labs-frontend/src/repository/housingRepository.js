import axiosInstance from "../axios/axios.js";

const housingRepository = {
    findAll: async () => {
        return await axiosInstance.get("/housings");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/housings/${id}`);
    },
    add: async (data) => {
        return await axiosInstance.post("/housings/save", data);
    },
    edit: async (id, data) => {
        return await axiosInstance.post(`/housings/update/${id}`,data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/housings/delete/${id}`);
    },
};

export default housingRepository;