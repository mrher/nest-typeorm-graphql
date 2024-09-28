import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { Photo as PhotoDto } from './photo.dto';
import { CreatePhotoInput } from './create.photo.input.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  createPhoto(input: CreatePhotoInput): Promise<PhotoDto> {
    const newPhoto = this.photoRepository.create(input);
    return this.photoRepository.save(newPhoto);
  }

  getPhotos(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async addView(id: number): Promise<Photo> {
    const photo = await this.photoRepository.findOneBy({ id });

    if (photo) {
      photo.views += 1;
    }

    return this.photoRepository.save(photo);
  }

  async deletePhoto(id: number) {
    await this.photoRepository.delete({ id });
    return 'Photo deleted!';
  }
}
