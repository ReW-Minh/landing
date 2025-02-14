const blogs = useState('blogs')
const blogDetail = useState('blogDetail')

export const getAllBlogs = async page => {
    const res = await apiGet('/blog/getAll', { query: { page, per_page: BLOG_PAGE_LIMIT } })

    if (!res?.success)
        return

    blogs.value = res.data

    blogs.value.blogs?.forEach((item, index) => {
        item.index = index + 1 + (page - 1) * BLOG_PAGE_LIMIT
    })
}

export const getPublishedBlogs = async page => {
    const res = await apiGet('/blog/getPublished', { query: { page, per_page: BLOG_PAGE_LIMIT } })

    if (!res?.success)
        return

    blogs.value = res.data
}

export const getBlogDetail = async route => {
    const res = await apiGet('/blog/get', { query: { route } })

    if (!res?.success)
        return

    blogDetail.value = res.data
}

export const addBlog = body => apiPost('/blog/add', { body })

export const updateBlog = body => apiPost('/blog/update', { body })

export const publishBlog = body => apiPost('/blog/publish', { body })

export const deleteBlog = body => apiPost('/blog/delete', { body })

