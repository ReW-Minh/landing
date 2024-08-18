import axios from './axios.js'

import { toast } from 'vue3-toastify'

const BASE_API_URL = import.meta.env.VITE_URL_API

export const notiToast = str => {
    toast.info(str, {
        icon: false,
        transition: toast.TRANSITIONS.SLIDE,
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: false
    })
}

export const errorToast = str => {
    toast.error(str || 'Unknown Error', {
        icon: false,
        transition: toast.TRANSITIONS.SLIDE,
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: false
    })
}

export const fetchGet = async (route, params = {}) => {
    try {
        const res = await axios.get(`${BASE_API_URL}${route}`, { params })

        if (!res?.data?.success) {
            errorToast(res?.data?.message)
            return null
        }

        return res.data
    }
    catch (err) {
        errorToast(err.message)
    }
}

export const fetchPost = async (route, payload = {}) => {
    try {
        const res = await axios.post(`${BASE_API_URL}${route}`, payload)

        if (!res?.data?.success) {
            errorToast(res?.data?.message)
            return null
        }

        return res.data
    }
    catch (err) {
        errorToast(err.message)
    }
}

export const formatDate = str => {

    if (!str) return '-'

    const local = new Date(str)
    let dateFormat = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }

    return local.toLocaleString('en-US', dateFormat)
}

export const confirmAction = (confirm, { message, accept, reject }) => {
    confirm.require({
        message,
        header: 'Confirmation',
        rejectProps: {
            label: 'No',
            severity: 'secondary',
            size: 'small'
        },
        acceptProps: {
            label: 'Yes',
            size: 'small'
        },
        accept,
        reject
    })
}