package br.com.faculdade.projeto.controle_financeiro.repository;

import br.com.faculdade.projeto.controle_financeiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {

}
