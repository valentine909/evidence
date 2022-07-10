import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersService } from './users.service';
import { ArtistsModule } from '../artists/artists.module';
import { TracksModule } from '../tracks/tracks.module';


@Module({
    imports: [HttpModule],
    providers: [
        UsersService,
        ArtistsModule,
        TracksModule,
    ],
    exports: [
        UsersService,
    ],
})
export class ServicesModule {}
