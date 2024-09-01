export const syncPodbeanData = () => apiGet('/syncPodbeanData')

export const getPodcastInfo = async () => {
    const res = await apiGet('/getPodcastInfo')

    console.log(res)
}