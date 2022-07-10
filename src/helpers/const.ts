export enum Microservice {
    users = 'http://localhost:3004/v1/users',
    resister = 'http://localhost:3004/v1/users/register',
    login = 'http://localhost:3004/v1/users/login',
    verify = 'http://localhost:3004/v1/users/verify',
    artists = 'http://localhost:3002/v1/artists',
    tracks = 'http://localhost:3006/v1/tracks',
    genres = 'http://localhost:3001/v1/genres',
    albums = 'http://localhost:3005/v1/albums',
    bands = 'http://localhost:3003/v1/bands',
    favourites = 'http://localhost:3007/v1/favourites',
    favouritesAdd = 'http://localhost:3007/v1/favourites/add',
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
