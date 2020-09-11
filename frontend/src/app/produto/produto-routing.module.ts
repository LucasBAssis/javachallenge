import { ProdutoUpdateComponent } from './produto-update.component';
import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoViewComponent } from './produto-view.component';
import { ProdutoDeleteComponent } from './produto-delete.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produtos/novo', component: ProdutoUpdateComponent },
  { path: 'produtos/edit/:id', component: ProdutoUpdateComponent },
  { path: 'produtos/view/:id', component: ProdutoViewComponent },
  { path: 'produtos/delete/:id', component: ProdutoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
