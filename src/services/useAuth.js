import axios from '../utils/axios.js'

import { fetchPost } from '../utils'
import { useAuthStore } from '../store/auth.js'

const login = async ({ username, password }) => {
    const { setIsLoggedIn } = useAuthStore()
    
    const res = await fetchPost('login', { username, password })

    if (!res?.success)
        return

    axios.defaults.headers.common = {
        Authorization: `Bearer ${res.data.token}`
    }

    sessionStorage.setItem('accessToken', res.data.token)

    setIsLoggedIn(true)

    return res
}

const logout = () => {
    const { setIsLoggedIn } = useAuthStore()

    delete axios.defaults.headers.common['Authorization']
    sessionStorage.removeItem('accessToken')
    setIsLoggedIn(false)
}

export const useAuth = () => ({
    login,
    logout
})