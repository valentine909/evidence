
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<string[]>;
    bands?: Nullable<string[]>;
    tracks?: Nullable<string[]>;
    genres?: Nullable<string[]>;
    image?: Nullable<string>;
}

export interface ArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<string[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface BandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genres?: Nullable<string[]>;
}

export interface FavouriteInput {
    type: string;
    id: string;
}

export interface GenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface TrackInput {
    title: string;
    album?: Nullable<string>;
    artists?: Nullable<string[]>;
    bands?: Nullable<string[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<string[]>;
}

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

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Favourite> | Promise<Nullable<Favourite>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(login?: Nullable<LoginInput>): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(album?: Nullable<AlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, album?: Nullable<AlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    createArtist(artist?: Nullable<ArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, artist?: Nullable<ArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    createBand(band?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    addArtistToFavourites(input?: Nullable<FavouriteInput>): Nullable<Favourite> | Promise<Nullable<Favourite>>;
    addBandToFavourites(input?: Nullable<FavouriteInput>): Nullable<Favourite> | Promise<Nullable<Favourite>>;
    addGenreToFavourites(input?: Nullable<FavouriteInput>): Nullable<Favourite> | Promise<Nullable<Favourite>>;
    addTrackToFavourites(input?: Nullable<FavouriteInput>): Nullable<Favourite> | Promise<Nullable<Favourite>>;
    createGenre(genre?: Nullable<GenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, genre?: Nullable<GenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    createTrack(track?: Nullable<TrackInput>): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, track?: Nullable<TrackInput>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    register(user?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface DeleteResponse {
    acknowledged: boolean;
    deletedCount: number;
}

export interface Member {
    artist: Artist;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Favourite {
    id: string;
    user?: Nullable<User>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
    id: string;
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
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

type Nullable<T> = T | null;
