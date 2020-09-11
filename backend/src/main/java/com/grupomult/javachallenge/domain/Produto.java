package com.grupomult.javachallenge.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.grupomult.javachallenge.domain.enums.Categoria;

@Entity
@Table(name = "PRDT")
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "NOME")
	private String nome;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "CTGR")
	private Categoria categoria;
	
	@Column(name = "VALOR")
	private Double valor;

	public Produto() {
		super();
	}

	public Produto(Long id, String nome, Categoria categoria, Double valor) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.valor = valor;
	}

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
