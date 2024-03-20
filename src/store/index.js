import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import Swal from 'sweetalert2';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "@/service/AuthenticateUser";
const randUrl = "https://projectcapstone.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    packages: null,
    singlePackage: null,
    bookings: null,
    booking:null,

  },
  getters: {

  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setPackages(state, value) {
      state.packages = value
    },
    setSinglePackage(state, value) {
      state.singlePackage = value
    },
    setBookings(state,value){
      state.bookings =value
    },
    setBooking(state, value){
      state.booking = value
    }
  },
  actions: {
    async register(context, payload) {
      try {
        let { msg } = (await axios.post(`${randUrl}users/register`, payload))
          .data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 2000,
          });

          router.push({ name: "login" })
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${randUrl}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Axn error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${randUrl}users/${payload.id}`))
          .data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000
        })
      }
    },
    async updateUser(context, payload) {
      try {
        let { msg } = await axios.patch(`${randUrl}users/update/${payload.id}`)
        if (msg) {
          context.dispatch("fetchUsers")
          sweet({
            title: "Update user",
            text: msg,
            icon: "success",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "success",
          timer: 2000
        })
      }
    },
    async deleteUser(context, payload) {
      try {
        let { msg } = await axios.delete(`${randUrl}users/${payload.id}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Delete user",
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${randUrl}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchPackages(context) {
      try {
        let { results } = (await axios.get(`${randUrl}packages`)).data;
        if (results) {
          context.commit("setPackages", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving Packages.",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchPackage(context, payload) {
      try {
        let { result } = (await axios.get(`${randUrl}packages/${payload.id}`))
          .data;
        if (result) {
          context.commit("setSinglePackage", result)
        } else {
          sweet({
            title: "Retrieving a single Package",
            text: "Package was not found",
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A Package was not found.",
          icon: "error",
          timer: 2000,
        })
      }
    }
  },
  async fetchBookings(context) {
    try {
      let { results } = (await axios.get(`${randUrl}weddingBooking`)).data;
      if (results) {
        context.commit("setBookings", results);
      }else {
        sweet({
          title: "Error",
          text: "No data was retrieved",
          icon: "error",
          timer: 2000,
        });
      }
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when retrieving wedding bookings.",
        icon: "error",
        timer: 2000,
      });
      return { success: false, error: e };
    }
  },

 

  async createBooking(context, payload) {
    try {
      let { msg } = await axios.post(`${randUrl}weddingBooking/create`, payload);
      if (msg) {
        context.dispatch("fetchWeddingBookings");
        sweet({
          title: "Booking Created",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      }
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when creating a wedding booking.",
        icon: "error",
        timer: 2000,
      });
    }
  },

  async updateBooking(context, payload) {
    try {
      let { msg } = await axios.patch(`${randUrl}weddingBooking/update/${payload.id}`, payload.data);
      if (msg) {
        context.dispatch("fetchBookings");
        sweet({
          title: "Booking Updated",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      }
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when updating a booking.",
        icon: "error",
        timer: 2000,
      });
    }
  },

  async deleteBooking(context, payload) {
    try {
      let { msg } = await axios.delete(`${randUrl}bookings/${payload.id}`);
      if (msg) {
        context.dispatch("fetchBookings");
        sweet({
          title: "Booking Deleted",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      }
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when deleting a booking.",
        icon: "error",
        timer: 2000,
      });
    }
  },

  modules: {},
});
