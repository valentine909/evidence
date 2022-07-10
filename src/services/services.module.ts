import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersService } from './users.service';
import { AlbumsService } from './albums.service';
import { TracksService } from './tracks.service';
import { ArtistsService } from './artists.service';
import { BandsService } from './bands.service';
import { FavouritesService } from './favourites.service';
import { GenresService } from './genres.service';


@Module({
    imports: [HttpModule],
    providers: [
        UsersService,
        AlbumsService,
        TracksService,
        ArtistsService,
        BandsService,
        GenresService,
        FavouritesService,
    ],
    exports: [
        UsersService,
        AlbumsService,
        TracksService,
        ArtistsService,
        BandsService,
        GenresService,
        FavouritesService,
    ],
})
export class ServicesModule {}
