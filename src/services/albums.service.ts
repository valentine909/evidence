import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Microservice, IConfig, InvalidInput } from '../helpers/const';
import { AlbumInput, DeleteResponse } from '../graphql';

@Injectable()
export class AlbumsService {
    constructor(private readonly http: HttpService) {}

    findAll(limit: number, offset: number): Observable<AxiosResponse<any>> {
        return this.http
            .get(Microservice.albums, {
                params: { limit, offset },
            })
            .pipe(
                catchError(() => {
                    throw InvalidInput;
                }),
            );
    }

    findOneById(id: string): Observable<AxiosResponse<any>> {
        return this.http.get(`${Microservice.albums}/${id}`).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    createAlbum(album: AlbumInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.post(`${Microservice.albums}`, album, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    updateAlbum(id: string, album: AlbumInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.put(`${Microservice.albums}/${id}`, album, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    deleteAlbum(id: string, config: IConfig): Observable<AxiosResponse<DeleteResponse>> {
        return this.http.delete(`${Microservice.albums}/${id}`, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }
}
