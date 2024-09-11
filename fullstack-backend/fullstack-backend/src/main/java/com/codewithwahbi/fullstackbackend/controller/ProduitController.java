package com.codewithwahbi.fullstackbackend.controller;


import com.codewithwahbi.fullstackbackend.exception.ProduitNotFoundException;
import com.codewithwahbi.fullstackbackend.model.Produit;
import com.codewithwahbi.fullstackbackend.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProduitController {
    @Autowired
    private ProduitRepository produitRepository ;


    @PostMapping("/produit")
    Produit newProduit(@RequestBody Produit newProduit){
        return produitRepository.save(newProduit);
    }


    @GetMapping("/produits")
    List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }







    @GetMapping("/produit/{id}")
    Produit getProduitById(@PathVariable Long id){
        return produitRepository.findById(id)
                .orElseThrow(()-> new ProduitNotFoundException(id));
    }

    @PutMapping("/produit/{id}")
    Produit updateProduit(@RequestBody Produit newProduit, @PathVariable Long id) {
        return produitRepository.findById(id)
                .map(produit -> {
                    produit.setNomProduit(newProduit.getNomProduit());
                    produit.setPrixProduit(newProduit.getPrixProduit());
                    produit.setDateCreation(newProduit.getDateCreation());
                    return produitRepository.save(produit);
                }).orElseThrow(() -> new ProduitNotFoundException(id));
    }

    @DeleteMapping("/produit/{id}")
    String deleteProduit(@PathVariable Long id){
        if(!produitRepository.existsById(id)){
            throw new ProduitNotFoundException(id);
        }
        produitRepository.deleteById(id);
        return  "Produit with id "+id+" has been deleted successfully.";
    }










}
