const podcastEpisodes = useState('podcastEpisodes')
const podcastEpisodeDetail = useState('podcastEpisodeDetail')

export const syncPodbeanData = () => apiGet('/syncPodbeanData')

export const getPodcastEpisodes = async () => {
    const res = await apiGet('/getPodcastEpisodes')

    if (!res?.success)
        return

    podcastEpisodes.value = res.data
}

export const getPodcastEpisodeDetail = async permalink => {
    const res = await apiGet('/readPodcastEpisode', { query: { permalink } })

    podcastEpisodeDetail.value = res?.data
    
    return res?.success
}