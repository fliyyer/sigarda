import axios from "axios"

export const setTokenRemember = (val) => {
    localStorage.setItem("remember_sigarda", String(val))
}

export const setUserLogin = (val) => {
    localStorage.setItem("user_sigarda", JSON.stringify(val))
}

export const getUserLogin = () => {
    const user = localStorage.getItem("user_sigarda")
    return JSON.parse(user)
}

export const deleteToken = () => {
    localStorage.removeItem("remember_sigarda")
}

export const setTokenSession = (val) => {
    sessionStorage.setItem("session_sigarda", String(val))
}

export const getToken = () => {
    const tokenSession = sessionStorage.getItem("user_sigarda")
    const tokenRemember = localStorage.getItem("remember_sigarda")
    return tokenSession || tokenRemember
}

const baseUrl = "http://api.sigarda.fliyyer.skom.id"

const header = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}

const handleSuccess = (resp) => {
    const { data } = resp
    return data
}

const apiGet = async (url, arg) => {
    try {
        const response = await axios.get(`${baseUrl}${url}`)
        const {
            data
        } = response
        if (data.status === "error") {
            throw data
        }
        return handleSuccess(response)
    } catch (error) {
        console.log(error)
        throw error
    }
}
const apiPost = async (url, arg) => {
    try {
        const response = await axios.post(`${baseUrl}${url}`, arg)
        const {
            data
        } = response
        if (data.status === "error") {
            throw data
        }
        return handleSuccess(response)
    } catch (error) {
        console.log(error)
        throw error
    }
}
const apiPut = async (url, arg) => {
    try {
        const response = await axios.put(`${baseUrl}${url}`, {
            ...arg
        })
        const {
            data
        } = response
        if (data.status === "error") {
            throw data
        }
        return handleSuccess(response)
    } catch (error) {
        console.log(error)
        throw error
    }
}
const apiDelete = async (url, arg) => {
    try {
        const response = await axios.delete(`${baseUrl}${url}`)
        const {
            data
        } = response
        if (data.status === "error") {
            throw data
        }
        return handleSuccess(response)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const api = {
    get: (url, data) => apiGet(url, data),
    post: (url, data) => apiPost(url, data),
    put: (url, data) => apiPut(url, data),
    delete: (url, data) => apiDelete(url, data),
}

export default api