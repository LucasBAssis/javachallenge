package com.grupomult.javachallenge.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.grupomult.javachallenge.domain.Produto;
import com.grupomult.javachallenge.domain.enums.Categoria;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	@Query("SELECT p FROM Produto p "
			+ "WHERE (p.nome = :nome OR :nome IS NULL) "
			+ "AND (p.categoria = :categoria OR :categoria IS NULL)")
	List<Produto> findByNomeAndCategoria(@Param("nome") String nome, @Param("categoria") Categoria categoria);
}
