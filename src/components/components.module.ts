import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results';
import { IonicModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories/repositories';

@NgModule({
  declarations: [SearchResultsComponent,
    RepositoriesComponent],
  imports: [IonicModule],
  exports: [SearchResultsComponent,
    RepositoriesComponent]
})

export class ComponentsModule {

}
