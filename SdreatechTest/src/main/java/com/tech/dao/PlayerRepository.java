package com.tech.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tech.modal.Player;

// create player repository and extends with JPA or CRUD repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

	// define custom HQL or SQL (native query) for table player
	
	@Query("select u from Player u where u.playerEmail =:playerEmail")
	public Player getUserByUserName(@Param("playerEmail") String playerEmail);
}
