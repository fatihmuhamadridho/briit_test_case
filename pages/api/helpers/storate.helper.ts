/* eslint-disable import/no-anonymous-default-export */
import Cookies from "js-cookie"

export default {
    // SESSIONSTORAGE //

    getSession: (name: string) => {
        const storage = sessionStorage.getItem(name)

        return storage ? JSON.parse(storage) : null
    },
    setSession: (name: string, value: any) => {
        return sessionStorage.setItem(name, JSON.stringify(value))
    },
    removeSession: (name: string) => {
        return sessionStorage.removeItem(name)
    },
    removeAllSession: () => {
        return sessionStorage.clear();
    },

    // COOKIES //

    getCookie: (name: string) => {
        const storage = Cookies.get(name)

        return storage ? JSON.parse(storage) : null
    },
    setCookie: (name: string, value: any) => {
        return Cookies.set(name, JSON.stringify(value), { expires: 1 })
    },
    removeCookie: (name: string) => {
        return Cookies.remove(name)
    }
}