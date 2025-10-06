package br.com.faculdade.projeto.controle_financeiro.controller;

import br.com.faculdade.projeto.controle_financeiro.model.Lancamento;
import br.com.faculdade.projeto.controle_financeiro.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;



@RestController
@RequestMapping("/api/lancamentos")
@CrossOrigin(origins = "http://localhost:4200")


public class LancamentoController {

    @Autowired
    private LancamentoRepository repository;


    @GetMapping
    public List<Lancamento> listarTodos() {
        return repository.findAll();
    }


    @PostMapping
    @Transactional
    public Lancamento salvar(@RequestBody Lancamento lancamento) {
        return repository.save(lancamento);
    }


    @GetMapping("/{id}")
    public Lancamento buscarPorId(@PathVariable("id") Long id){
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    @Transactional
    public Lancamento atualizar(@PathVariable("id") Long id, @RequestBody Lancamento lancamentoAtualizado){
        return repository.findById(id)
                .map(lancamentoExistente -> {

            lancamentoExistente.setDescricao(lancamentoAtualizado.getDescricao());
            lancamentoExistente.setValor(lancamentoAtualizado.getValor());
            lancamentoExistente.setData(lancamentoAtualizado.getData());
            lancamentoExistente.setTipo(lancamentoAtualizado.getTipo());

            return repository.save(lancamentoExistente);
        }).orElse(null);
    }
}