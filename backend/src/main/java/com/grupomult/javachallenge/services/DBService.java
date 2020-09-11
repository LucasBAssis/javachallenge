package com.grupomult.javachallenge.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupomult.javachallenge.domain.Produto;
import com.grupomult.javachallenge.domain.enums.Categoria;
import com.grupomult.javachallenge.repositories.ProdutoRepository;

@Service
public class DBService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public void instanteateDatabase() {
		Produto p1 = new Produto(null, "Leite", Categoria.PERECIVEL, 10.00);
		Produto p2 = new Produto(null, "Macarrão", Categoria.NAO_PERECIVEL, 12.00);
		Produto p3 = new Produto(null, "Feijão", Categoria.PERECIVEL, 15.00);
		
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3));
	}

}
