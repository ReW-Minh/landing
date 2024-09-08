const podcastEpisodes = useState('podcastEpisodes')
const podcastEpisodeDetail = useState('podcastEpisodeDetail')

export const syncPodbeanData = () => apiGet('/syncPodbeanData')

export const getPodcastEpisodes = async page => {
    const res = await apiGet('/getPodcastEpisodes', { query: { page: page ?? 1, per_page: page ? PODCAST_EP_PAGE_LIMIT : 999 } })

    if (!res?.success)
        return

    podcastEpisodes.value = res.data
}

export const getPodcastEpisodeDetail = async permalink => {
    const res = await apiGet('/readPodcastEpisode', { query: { permalink } })

    podcastEpisodeDetail.value = res?.data

    return res?.success
}