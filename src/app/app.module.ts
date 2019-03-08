import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  TsAutocompleteModule,
  TsAutofocusModule,
  TsButtonModule,
  TsCardModule,
  TsChartModule,
  TsCheckboxModule,
  TsConfirmationModule,
  TsCopyModule,
  TsCSVEntryModule,
  TsDateRangeModule,
  TsFileUploadModule,
  TsIconButtonModule,
  TsIconModule,
  TsInputModule,
  TsLinkModule,
  TsLoadingOverlayModule,
  TsLoginFormModule,
  TsMenuModule,
  TsNavigationModule,
  TsPaginatorModule,
  TsPipesModule,
  TsRadioGroupModule,
  TsScrollbarsModule,
  TsSearchModule,
  TsSelectModule,
  TsSortModule,
  TsSpacingModule,
  TsTableModule,
  TsToggleModule,
  TsTooltipModule,
} from '@terminus/ui';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatRippleModule,
} from '@angular/material';
import { TsDocumentService, TsWindowService } from '@terminus/ngx-tools';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatToolbarModule,
    TsAutocompleteModule,
    TsAutofocusModule,
    TsButtonModule,
    TsCardModule,
    TsChartModule,
    TsCheckboxModule,
    TsConfirmationModule,
    TsCopyModule,
    TsCSVEntryModule,
    TsDateRangeModule,
    TsFileUploadModule,
    TsIconButtonModule,
    TsIconModule,
    TsInputModule,
    TsLinkModule,
    TsLoadingOverlayModule,
    TsLoginFormModule,
    TsMenuModule,
    TsNavigationModule,
    TsPaginatorModule,
    TsPipesModule,
    TsRadioGroupModule,
    TsScrollbarsModule,
    TsSearchModule,
    TsSelectModule,
    TsSortModule,
    TsSpacingModule,
    TsTableModule,
    TsToggleModule,
    TsTooltipModule,
  ],
  providers: [
    TsDocumentService,
    TsWindowService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
