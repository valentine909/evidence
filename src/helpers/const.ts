export enum Microservice {
    users = 'http://localhost:3004/v1/users',
    resister = 'http://localhost:3004/v1/users/register',
    login = 'http://localhost:3004/v1/users/login',
    verify = 'http://localhost:3004/v1/users/verify',
    artists = 'http://localhost:3002/v1/artists',
    tracks = 'http://localhost:3006/v1/tracks',
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

export const PaginationSettings = {
    limit: 5,
    offset: 0,
};
