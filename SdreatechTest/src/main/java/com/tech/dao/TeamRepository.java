package com.tech.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tech.modal.Team;

//create team repository and extends with JPA or CRUD repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

	// define custom HQL or SQL (native query) for table team

}
