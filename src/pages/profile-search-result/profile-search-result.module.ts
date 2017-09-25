import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ProfileSearchResultPage } from './profile-search-result';


@NgModule({
  declarations: [
    ProfileSearchResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultPage),
    ComponentsModule
  ],
})
export class ProfileSearchResultPageModule {}
