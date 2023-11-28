import api from "@/api/api";
import { create } from "zustand";
import { authRes, login, userRes } from "@/utils/types";

export interface AuthContextProps {
  login: (credentials: login) => Promise<authRes | undefined>;
  logout: () => void;
  token: () => string | undefined;
  user: userRes | undefined;
  permission: string;
  setUser: (user: userRes | undefined) => void;
  setPermission: (permission: string) => void;
  getUser: () => void;
}

const useAuth = create<AuthContextProps>()((set, get) => ({
  token: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token ? token : "";
    }
  },
  login: async (credentials: login) => {
    try {
      const { data }: authRes = await api.post(
        "/auth",
        {
          email: credentials.email,
          password: credentials.password,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
        return {
          data: {
            token: data.token,
            user: data.user,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }

    set({ user: undefined });
    set({ permission: "" });
  },
  user: undefined,
  setUser: (user: userRes | undefined) => set({ user }),
  permission: "",
  setPermission: (permission: string) => set({ permission }),
  getUser: () => {
    const userID = localStorage.getItem("userId");

    async function getUser() {
      const response = await api.get(`/user/${userID}`, {
        headers: {
          "x-api-key": "YOUR_API_KEY",
        },
      });
      get().setUser(response.data);
    }

    if (userID) {
      getUser().then(async () => {
        await api
          .get(`/permission/${get().user?.permissionId}`, {
            headers: {
              "x-api-key": "YOUR_API_KEY",
            },
          })
          .then((response) => {
            get().setPermission(response.data.name);
          });
      });
    }
  },
}));

export default useAuth;
