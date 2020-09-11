package com.grupomult.javachallenge.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupomult.javachallenge.domain.Produto;
import com.grupomult.javachallenge.dto.FiltrosProdutosDTO;
import com.grupomult.javachallenge.dto.ProdutoDTO;
import com.grupomult.javachallenge.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public Produto save(ProdutoDTO produtoDTO) {
		return produtoRepository.save(fromDto(produtoDTO));
	}
	
	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}
	
	public Optional<Produto> findOne(Long id) {
		return produtoRepository.findById(id);
	}
	
	public void delete(Long id) {
		produtoRepository.deleteById(id);
	}
	
	public List<Produto> findByFilter(FiltrosProdutosDTO filtros) {
		return produtoRepository.findByNomeAndCategoria(filtros.getNome(), filtros.getCategoria());
	}
	
	private Produto fromDto(ProdutoDTO produtoDTO) {
		return new Produto(produtoDTO.getId(), produtoDTO.getNome(), produtoDTO.getCategoria(), produtoDTO.getValor());
	}
}
