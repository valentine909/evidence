import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Microservice, IConfig, InvalidInput } from '../helpers/const';
import { GenreInput, DeleteResponse } from '../graphql';

@Injectable()
export class GenresService {
    constructor(private readonly http: HttpService) {}

    findAll(limit: number, offset: number): Observable<AxiosResponse<any>> {
        return this.http
            .get(Microservice.genres, {
                params: { limit, offset },
            })
            .pipe(
                catchError(() => {
                    throw InvalidInput;
                }),
            );
    }

    findOneById(id: string): Observable<AxiosResponse<any>> {
        return this.http.get(`${Microservice.genres}/${id}`).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    createGenre(genre: GenreInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.post(`${Microservice.genres}`, genre, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    updateGenre(id: string, genre: GenreInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.put(`${Microservice.genres}/${id}`, genre, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    deleteGenre(id: string, config: IConfig): Observable<AxiosResponse<DeleteResponse>> {
        return this.http.delete(`${Microservice.genres}/${id}`, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }
}
