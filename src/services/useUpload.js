import { fetchPost } from '../utils/index.js'

const upload = async (formData) => {
    return await fetchPost('uploadImage', formData)
}

export const useUpload = () => ({
    upload
})