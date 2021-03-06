import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Microservice, IConfig, InvalidInput } from '../helpers/const';
import { BandInput, DeleteResponse } from '../graphql';

@Injectable()
export class BandsService {
    constructor(private readonly http: HttpService) {}

    findAll(limit: number, offset: number): Observable<AxiosResponse<any>> {
        return this.http
            .get(Microservice.bands, {
                params: { limit, offset },
            })
            .pipe(
                catchError(() => {
                    throw InvalidInput;
                }),
            );
    }

    findOneById(id: string): Observable<AxiosResponse<any>> {
        return this.http.get(`${Microservice.bands}/${id}`).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    createBand(band: BandInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.post(`${Microservice.bands}`, band, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    updateBand(id: string, band: BandInput, config: IConfig): Observable<AxiosResponse<any>> {
        return this.http.put(`${Microservice.bands}/${id}`, band, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }

    deleteBand(id: string, config: IConfig): Observable<AxiosResponse<DeleteResponse>> {
        return this.http.delete(`${Microservice.bands}/${id}`, config).pipe(
            catchError(() => {
                throw InvalidInput;
            }),
        );
    }
}
