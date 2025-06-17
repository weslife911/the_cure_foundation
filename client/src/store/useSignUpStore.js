import { create } from "zustand"
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";

export const useSignUpStore = create((set) => ({
    isLoading: false,
    token: null,
    accountCreated: false,
    registerUser: async(data) => {
        set({ isLoading: true });
        await axiosInstance.post("/auth/signup", data)
        .then((data) => {
            localStorage.setItem("token", data.data.token);
            toast.success(data.data.message);
            set({ accountCreated: true });
        })
        .catch((e) => console.log(e))
        .finally(() => {
            set({ isLoading: false });
        })
    }
}));