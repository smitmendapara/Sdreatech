package com.tech.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tech.modal.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
