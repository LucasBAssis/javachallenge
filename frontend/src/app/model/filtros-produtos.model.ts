export const enum Categoria {
    PERECIVEL = 'PERECIVEL',
    NAO_PERECIVEL = 'NAO PERECIVEL'
}

export interface IFiltrosProdutos {
    nome?: string;
    categoria?: Categoria;
}

export class FiltrosProdutos {
    constructor(
        public nome?: string,
        public categoria?: Categoria
    ) {}
}