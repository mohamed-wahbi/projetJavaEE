package com.codewithwahbi.fullstackbackend.repository;

import com.codewithwahbi.fullstackbackend.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit,Long> {
}
