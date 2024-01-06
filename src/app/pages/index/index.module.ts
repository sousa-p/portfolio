import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { SectionHomeComponent } from 'src/app/components/section-home/section-home.component';
import { SectionAboutComponent } from 'src/app/components/section-about/section-about.component';
import { SectionProjectsComponent } from 'src/app/components/section-projects/section-projects.component';
import { SectionTechComponent } from 'src/app/components/section-tech/section-tech.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IndexPageRoutingModule],
  declarations: [
    IndexPage,
    SectionHomeComponent,
    SectionAboutComponent,
    SectionProjectsComponent,
    SectionTechComponent,
  ],
})
export class IndexPageModule {}
