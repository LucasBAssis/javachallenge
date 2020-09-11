import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProdutoUpdateComponent } from './produto-update.component';
import { ProdutoViewComponent } from './produto-view.component';
import { ProdutoDeleteComponent } from './produto-delete.component';
import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    ProdutoComponent,
    ProdutoUpdateComponent,
    ProdutoViewComponent,
    ProdutoDeleteComponent
  ]
})
export class ProdutoModule { }
