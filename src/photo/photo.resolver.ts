import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Photo } from './photo.dto';
import { CreatePhotoInput } from './create.photo.input.dto';
import { PhotoService } from './photo.service';

@Resolver()
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}
  @Query(() => String)
  helloworld(): string {
    return 'Hello world';
  }
  @Mutation(() => Photo)
  createPhoto(@Args('input') input: CreatePhotoInput) {
    return this.photoService.createPhoto(input);
  }
  @Query(() => [Photo])
  getPhotos(): Promise<Photo[]> {
    return this.photoService.getPhotos();
  }

  @Mutation(() => Photo)
  updateViews(@Args('input') input: CreatePhotoInput) {
    return this.photoService.createPhoto(input);
  }

  @Mutation(() => Photo)
  addView(@Args('id') id: number) {
    return this.photoService.addView(id);
  }

  @Mutation(() => String)
  deletePhoto(@Args('id') id: number) {
    return this.photoService.deletePhoto(id);
  }
}
