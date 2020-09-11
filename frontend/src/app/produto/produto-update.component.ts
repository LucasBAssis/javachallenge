import { IProduto, Produto } from './../model/produto.model';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { filter, map } from 'rxjs/operators';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const numberMask = createNumberMask({
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: null,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false
});

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html'
  //   styleUrls: ['./produto.component.css']
})
export class ProdutoUpdateComponent implements OnInit, AfterContentInit {

  produto: IProduto;
  id: string;

  numberMask = numberMask;
  valor: string;

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
        .subscribe((res: IProduto) => this.carregaProduto(res), (res: HttpErrorResponse) => console.log(res));
    }
  }

  carregaProduto(res: IProduto) {
    this.produto = res;
    this.valor =
      this.produto.valor != null
        ? Number.parseFloat(this.produto.valor.toString())
          .toFixed(2)
          .replace('.', ',')
        : null;
  }

  ngAfterContentInit() {
  }

  save() {
    this.produto.valor =
      this.valor != null
        ? Number(
          this.valor
            .replace('R$ ', '')
            .replace('.', '')
            .replace(',', '.')
        )
        : null;

    if (this.id == null) {
      this.produtoService.create(this.produto).subscribe((res: HttpResponse<IProduto>) => this.onSuccess(), (res: HttpErrorResponse) => this.onError(res));
    } else {
      this.produtoService.update(this.produto).subscribe((res: HttpResponse<IProduto>) => this.onSuccess(), (res: HttpErrorResponse) => this.onError(res));
    }
  }

  onSuccess() {
    alert('Produto salvo com Sucesso!');
    this.router.navigate(['/produtos']);
  }

  onError(res: HttpErrorResponse) {
    alert('Erro: ' + res.message);
  }

  changeValor() {
    this.valor = Number.parseFloat(
      this.valor
        .replace('R$ ', '')
        .split('.')
        .join('')
        .replace(',', '.')
    )
      .toFixed(2)
      .replace('.', ',');
  }
}
