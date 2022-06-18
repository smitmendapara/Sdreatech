package com.tech.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tech.modal.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {

}
