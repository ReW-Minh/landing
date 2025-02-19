import type { IBaseResponse, IPodcastDetail, IPodcastPaging } from '~/types/types';

const podcastEpisodes = useState<IPodcastPaging>('podcastEpisodes')
const podcastEpisodeDetail = useState<IPodcastDetail>('podcastEpisodeDetail')

export const syncPodbeanData = () => apiGet('/syncPodbeanData')

export const getPodcastEpisodes = async (page?: number) => {
    const res: IBaseResponse<IPodcastPaging> = await apiGet('/getPodcastEpisodes', { query: { page: page || 1, per_page: page ? PODCAST_EP_PAGE_LIMIT : 999 } })

    if (!res?.success)
        return

    podcastEpisodes.value = res.data
}

export const getPodcastEpisodeDetail = async (permalink: string) => {
    const res: IBaseResponse<IPodcastDetail> = await apiGet('/readPodcastEpisode', { query: { permalink } })

    podcastEpisodeDetail.value = res?.data

    return res?.success
}