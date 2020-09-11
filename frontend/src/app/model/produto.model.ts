import { Categoria } from './filtros-produtos.model';

export interface IProduto {
    id?: number;
    nome?: string;
    categoria?: Categoria;
    valor?: number;
}

export class Produto {
    constructor(
        public id?: number, 
        public nome?: string,
        public categoria?: Categoria,
        public valor?: number
    ) {}
}