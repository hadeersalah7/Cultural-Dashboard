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
    id: string;
    name: string;
    date: string;
}

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponseBody = {
  token: string;
  user: {
    id: number;
    password: string;
    email: string;
  };
};