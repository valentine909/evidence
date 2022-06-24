import {IsArray, IsDate, IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {Prop} from "@nestjs/mongoose";

export class CreateTrackDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    albumId: string;

    @IsArray()
    @IsOptional()
    bandsIds: string[];

    @IsArray()
    @IsOptional()
    artistsIds: string[];

    @IsInt()
    duration; number;

    @IsInt()
    released: number;

    @IsArray()
    genresIds: string[];
}