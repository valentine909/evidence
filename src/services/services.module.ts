import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersService } from './users.service';
import { AlbumsModule } from '../artists/albums.module';
import { TracksModule } from '../tracks/tracks.module';


@Module({
    imports: [HttpModule],
    providers: [
        UsersService,
        AlbumsModule,
        TracksModule,
    ],
    exports: [
        UsersService,
    ],
})
export class ServicesModule {}
