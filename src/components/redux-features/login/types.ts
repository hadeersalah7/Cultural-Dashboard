export interface ILogin {
    email: string;
    password: string;
}

export interface IIntialLoginState {
    email: string;
    password: string;
    loading: boolean;
    error: null;
    token: string
}