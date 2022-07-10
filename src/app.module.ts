import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogInterceptor } from './log-interceptor.service';
import { UsersModule } from './users/users.module';
import { TracksModule } from './tracks/tracks.module';
import { GenresModule } from './genres/genres.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
    imports: [
        UsersModule,
        ArtistsModule,
        TracksModule,
        GenresModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
            },
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: LogInterceptor,
        },
    ],
})
export class AppModule {}
