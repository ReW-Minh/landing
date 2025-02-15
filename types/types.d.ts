import type { CONTACT_TYPE } from '~/utils/constant';

export interface IProfileContact {
    type: CONTACT_TYPE,
    link: string
}

export interface IProfile {
    content: string;
    id: number;
    name: string;
    picture: string;
    title: string;
    contact: IProfileContact[]
}

export interface IAdminAuth {
    logged: boolean;
    token: string | null;
}