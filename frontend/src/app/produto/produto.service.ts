import { IProduto } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<IProduto>;
type EntityArrayResponseType = HttpResponse<IProduto[]>;

@Injectable({ providedIn: 'root' })
export class ProdutoService {

    public resourceUrl = 'http://localhost:8090/produtos';

    constructor(protected http: HttpClient) { }

    create(produto: IProduto): Observable<EntityResponseType> {
        return this.http.post<IProduto>(this.resourceUrl, produto, { observe: 'response' });
    }

    update(produto: IProduto): Observable<EntityResponseType> {
        return this.http.put<IProduto>(this.resourceUrl, produto, { observe: 'response' });
    }

    findAll(): Observable<EntityArrayResponseType> {
        return this.http.get<IProduto[]>(this.resourceUrl, { observe: 'response' });
    }

    findOne(id: number): Observable<EntityResponseType> {
        return this.http.get<IProduto>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    delete(id: number): Observable<EntityResponseType> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    findByFilter(produto: IProduto): Observable<EntityArrayResponseType> {
        return this.http.post<IProduto[]>(`${this.resourceUrl}/filtrar`, produto, { observe: 'response' });
    }
}