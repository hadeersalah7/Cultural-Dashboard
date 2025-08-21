export interface ILogin {
    email: string;
    password: string;
}

export interface IIntialLoginState {
    id: number | null;
    email: string;
    password: string;
    loading: boolean;
    error: null;
    token: string;
}

export type User = {
    password: string;
    id: number;
    email: string;
};


export type IPublicUser = Omit<User, "password">

export interface IEvent {
    name: string;
    date: string;
}