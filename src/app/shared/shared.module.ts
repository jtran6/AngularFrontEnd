import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
// PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {SlideMenuModule} from 'primeng/slidemenu';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';

import { MenuTabComponent } from './layout/menu-bar/menu-tab/menu-tab.component';

const IMPORTS = [
  CommonModule,
  // PrimeNG
  InputTextModule,
  DialogModule,
  ButtonModule,
  PasswordModule,
  MenubarModule,
  MenuModule,
  TabMenuModule,
  CardModule,
  TableModule,
  SlideMenuModule,
  DropdownModule,
  AutoCompleteModule,
  TriStateCheckboxModule
];
const COMPONENTS = [
  MenuBarComponent,
  FooterComponent,
  MenuTabComponent
];

const EXPORTS = [
  ...COMPONENTS,
  ...IMPORTS
];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
