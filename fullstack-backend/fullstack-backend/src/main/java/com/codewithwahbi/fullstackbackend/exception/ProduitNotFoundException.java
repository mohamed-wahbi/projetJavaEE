package com.codewithwahbi.fullstackbackend.exception;

public class ProduitNotFoundException extends  RuntimeException{
    public ProduitNotFoundException(Long id) {
        super("Produit not found with id : " + id);
    }}
