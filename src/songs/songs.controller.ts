import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  // Create new song
  @Post() 
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO)
  }

  // Get all songs
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  // Get one song
  @Get(':id')
  findOne() {
    return 'fetch song by id'
  }

  // Update (PUT) song
  @Put(':id')
  update() {
    return 'update song by id'
  }

  // Delete song
  @Delete(':id')
  delete() {
    return 'delete song by id'
  }
}
