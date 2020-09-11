package com.grupomult.javachallenge.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.grupomult.javachallenge.domain.Produto;
import com.grupomult.javachallenge.dto.FiltrosProdutosDTO;
import com.grupomult.javachallenge.dto.ProdutoDTO;
import com.grupomult.javachallenge.services.ProdutoService;

@CrossOrigin
@RestController
public class ProdutoResource {
	
	@Autowired
	private ProdutoService produtoService;

	@GetMapping("/produtos")
	public ResponseEntity<List<Produto>> findAll() {
		List<Produto> result = produtoService.findAll();
		return ResponseEntity.ok().body(result);
	}
	
	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produto> findOne(@PathVariable Long id) {
		Optional<Produto> result = produtoService.findOne(id);
		return ResponseEntity.ok().body(result.get());
	}
	
	@PostMapping("/produtos")
	public ResponseEntity<Produto> create(@Valid @RequestBody ProdutoDTO produtoDTO) throws URISyntaxException {
		Produto result = produtoService.save(produtoDTO);
		return ResponseEntity.created(new URI("/produtos/" + result.getId())).body(result);
	}
	
	@PutMapping("/produtos")
	public ResponseEntity<Produto> update(@Valid @RequestBody ProdutoDTO produtoDTO) throws URISyntaxException {
		Produto result = produtoService.save(produtoDTO);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		produtoService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/produtos/filtrar")
	public ResponseEntity<List<Produto>> findByFilter(@RequestBody FiltrosProdutosDTO filtros) {
		List<Produto> result = produtoService.findByFilter(filtros);
		return ResponseEntity.ok().body(result);
	}
}
