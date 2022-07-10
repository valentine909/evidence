
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface LoginInput {
    password: string;
    email: string;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JWT {
    jwt: string;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(login?: Nullable<LoginInput>): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    register(user?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
