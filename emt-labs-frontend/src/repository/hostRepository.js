import axiosInstance from "../axios/axios.js";

const hostRepository = {
    findAll: async () => {
        return await axiosInstance.get("/hosts");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/hosts/${id}`);
    },
    add: async (data) => {
        return await axiosInstance.post("/hosts/save", data);
    },
    edit: async (id, data) => {
        return await axiosInstance.post(`/hosts/update/${id}`,data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/hosts/delete/${id}`);
    },
};

export default hostRepository;