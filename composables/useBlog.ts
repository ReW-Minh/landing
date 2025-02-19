import type { IBlogDetail, IBlogPaging } from '~/types/types';

const blogs = useState<IBlogPaging>('blogs')
const blogDetail = useState<IBlogDetail>('blogDetail')

export const getAllBlogs = async (page: number) => {
    const res = await apiGet('/blog/getAll', { query: { page, per_page: BLOG_PAGE_LIMIT } })

    if (!res?.success)
        return

    blogs.value = res.data

    blogs.value.blogs?.forEach((item: IBlogDetail, index: number) => {
        item.index = index + 1 + (page - 1) * BLOG_PAGE_LIMIT
    })
}

export const getPublishedBlogs = async (page: number) => {
    const res = await apiGet('/blog/getPublished', { query: { page, per_page: BLOG_PAGE_LIMIT } })

    if (!res?.success)
        return

    blogs.value = res.data
}

export const getBlogDetail = async (route: string) => {
    const res = await apiGet('/blog/get', { query: { route } })

    if (!res?.success)
        return

    blogDetail.value = res.data
}

export const addBlog = (body: IBlogDetail) => apiPost('/blog/add', { body })

export const updateBlog = (body: IBlogDetail) => apiPost('/blog/update', { body })

export const publishBlog = (body: {id: number}) => apiPost('/blog/publish', { body })

export const deleteBlog = (body: {id: number}) => apiPost('/blog/delete', { body })

