import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {TracksService} from "./services/tracks.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {UpdateTrackDto} from "./dto/update-track.dto";
import {Track} from "./schemas/track.schema";

@Controller('v1/tracks')
export class AppController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  all(@Query() query: any): Promise<Track[]> {
    const { limit = 5, offset = 0, ...filter } = query;
    return this.tracksService.findAll({ limit, offset }, filter);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Track> {
    return this.tracksService.findOne(id);
  }

  @Post()
  create(@Body() createGenreDto: CreateTrackDto): Promise<Track> {
    return this.tracksService.create(createGenreDto);
  }

  @Put(':id')
  update(@Param(':id') id: string, @Body() updateTrackDto: UpdateTrackDto): Promise<Track>{
    return this.tracksService.update(id, updateTrackDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<any> {
    return this.tracksService.delete(id);
  }
}
