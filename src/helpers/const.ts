export enum Microservice {
    users = 'http://localhost:3004/v1/users',
    resister = 'http://localhost:3004/v1/users/register',
    login = 'http://localhost:3004/v1/users/login',
    verify = 'http://localhost:3004/v1/users/verify'
}

export interface IConfig {
    headers: {
        Authorization: string | undefined;
    };
}

export const Config = {
    headers: { Authorization: undefined },
};

export const InvalidInput = {
    message: 'Invalid input',
};

export const InvalidToken = {
    message: 'Invalid token',
};
