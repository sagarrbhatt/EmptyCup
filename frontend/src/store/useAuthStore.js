import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/Check");
            set({authUser: res.data});
        } catch (error) {
            console.log("Error in checkAuth: ", error)
            set({authUser: null});
        } finally {
            set({isCheckingAuth: false});
        }

    },

    signUp: async (formdata) => {
        try {
            set({ isSigningUp: true });

            const { fullName, email, password } = formdata;

            const res = await axiosInstance.post("/auth/signup", {
            fullName,
            email,
            password,
            });

            if (res.data) {
            set({ authUser: res.data.user });
            toast.success("Account created successfully!");
            }
        } catch (error) {
            toast.error("Error in Signing Up");
            console.error("Signup error:", error);

        } finally {
            set({ isSigningUp: false });
        }
    },

    logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Error logging out");
      console.error("Logout error:", error);
    }
  },

    login: async (formdata) => {
            try {
                set({ isLoggingIn: true });

                const { email, password } = formdata;

                const res = await axiosInstance.post("/auth/login", {
                email,
                password,
                });

                if (res.data) {
                set({ authUser: res.data.user });
                toast.success("Account logged in successfully!");
                return true;
                // Navigate("/");
                }
            } catch (error) {
                toast.error("Error in Login Up");
                console.error("Login error:", error);
                return false;

            } finally {
                set({ isLoggingIn: false });
            }
        },

    updateProfile: async (formdata) => {
        try {
            set({ isUpdatingProfile: true });

            const res = await axiosInstance.put("/auth/update-profile", formdata);

            if (res.data) {
            set({ authUser: res.data });
            toast.success("Profile updated successfully!");
            }
        } catch (error) {
            toast.error("Failed to update profile");
            console.error("Update profile error:", error);
        } finally {
            set({ isUpdatingProfile: false });
        }
        },



}))