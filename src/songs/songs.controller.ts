import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Hey you by Pink Floyd')
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch song by id'
  }

  @Put(':id')
  update() {
    return 'update song by id'
  }

  @Delete(':id')
  delete() {
    return 'delete song by id'
  }
}
