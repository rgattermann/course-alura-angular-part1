import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotosListModule } from './photo-list/photos-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotosListModule,
    PhotoFormModule
  ]
})

export class PhotosModule {

}
