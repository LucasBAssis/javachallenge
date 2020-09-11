import { IFiltrosProdutos, FiltrosProdutos } from './../model/filtros-produtos.model';
import { IProduto, Produto } from './../model/produto.model';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: IProduto[];
  filtros: IFiltrosProdutos = new FiltrosProdutos();
  nomeFiltro: string;
  categoriaFiltro: string;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected produtoService: ProdutoService
  ) {
    this.produtoService
      .findAll()
      .pipe(
        filter((mayBeOk: HttpResponse<IProduto[]>) => mayBeOk.ok),
        map((response: HttpResponse<IProduto[]>) => response.body)
      )
      .subscribe((res: IProduto[]) => this.carregaProdutos(res), (res: HttpErrorResponse) => console.log(res));
  }

  carregaProdutos(res: IProduto[]) {
    this.produtos = res;
  }

  filtrar() {
    this.produtoService
      .findByFilter(this.filtros)
      .pipe(
        filter((mayBeOk: HttpResponse<IProduto[]>) => mayBeOk.ok),
        map((response: HttpResponse<IProduto[]>) => response.body)
      )
      .subscribe((res: IProduto[]) => this.carregaProdutos(res), (res: HttpErrorResponse) => console.log(res));
  }

  limparFiltros() {
    this.filtros = new FiltrosProdutos();
    this.filtrar();
  }

  ngOnInit() {
  }

}
