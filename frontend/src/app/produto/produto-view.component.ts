import { IProduto, Produto } from './../model/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { filter, map } from 'rxjs/operators';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html'
  //   styleUrls: ['./produto.component.css']
})
export class ProdutoViewComponent implements OnInit {

  produto: IProduto;
  id: string;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.produto = new Produto();

    if (this.id != null) {
      this.produtoService
        .findOne(Number.parseInt(this.id))
        .pipe(
          filter((mayBeOk: HttpResponse<IProduto>) => mayBeOk.ok),
          map((response: HttpResponse<IProduto>) => response.body)
        )
        .subscribe((res: IProduto) => this.produto = res, (res: HttpErrorResponse) => console.log(res));
    }
  }
}
