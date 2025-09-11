import { type CONTACT_TYPE, PROFILE_GROUP } from '~/utils/constant';

export interface IBaseResponse<T> {
    data: T;
    message: string;
    success: boolean
}

export interface IProfileContact {
    type: CONTACT_TYPE;
    link: string
}

export interface IProfile {
    content: string;
    id: number;
    name: string;
    picture: string;
    title: string;
    visible: boolean;
    contact: IProfileContact[],
    group: PROFILE_GROUP
}

export interface IAdminAuth {
    logged: boolean;
    token: string | null;
}

export interface IAdminLogin {
    username: string;
    password: string;
}

export interface IPodcastDetail {
    content: string;
    duration: number;
    episode_number: string;
    id: string;
    logo: string;
    permalink: string;
    player_url: string;
    publish_time: number;
    title: string
}

export interface IPodcastPaging {
    episodes: IPodcastDetail[];
    total: number
}

export interface IBlogDetail {
    content: string;
    author: string;
    title: string;
    id: string;
    index: number;
    route: string;
    publish_time: number;
    created_time: number
}

export interface IBlogPaging {
    blogs: IBlogDetail[];
    total: number
}

export interface IBlogForm {
    content: {
        value: string;
        error: boolean
    };
    author: {
        value: string;
        error: boolean
    };
    title: {
        value: string;
        error: boolean
    };
    id: {
        value: string;
        error: boolean
    };
    route: {
        value: string;
        error: boolean
    };
}

