package com.grupomult.javachallenge.dto;

import com.grupomult.javachallenge.domain.enums.Categoria;

public class FiltrosProdutosDTO {
	
	private String nome;
	private Categoria categoria;

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
}
