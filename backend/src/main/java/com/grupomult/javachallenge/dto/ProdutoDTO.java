package com.grupomult.javachallenge.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

import com.grupomult.javachallenge.domain.enums.Categoria;

public class ProdutoDTO {

	private Long id;
	
	@NotNull(message = "Nome não pode ser nulo")
	private String nome;
	
	@NotNull(message = "Categoria não pode ser nula")
	private Categoria categoria;
	
	@NotNull(message = "Valor não pode ser nulo")
	@PositiveOrZero(message = "Valor deve ser maior ou igual a 0")
	private Double valor;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	
}
