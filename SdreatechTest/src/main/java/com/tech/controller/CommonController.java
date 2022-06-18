package com.tech.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tech.dao.PlayerRepository;
import com.tech.dao.TeamRepository;
import com.tech.modal.Player;
import com.tech.modal.Team;

import org.springframework.ui.Model;

// common controller for team and player
// to define class as a controller class
@Controller 
public class CommonController {

	// Autowired object of PlayerRepository using annotation
	@Autowired
	private PlayerRepository playerRepository;

	// Autowired object of TeamRepository using annotation
	@Autowired
	private TeamRepository teamRepository;

	// initial page loading URL(/)
	@RequestMapping("/")
	public String home() {
		
		// return home page
		return "home";
	}

	// insert team object into database using ORM tool (Hibernate) with doRegisterTeam URL ( POST request ) 
	// GetMapping is alternative of RequestMapping
	@RequestMapping(value = "doRegisterTeam", method=RequestMethod.POST)
	public @ResponseBody String registerTeam(@RequestBody Team team) {
		
		// save team object
		playerRepository.save(team);
		
		return "home";
	}
	
	// insert player object into database using ORM tool (Hibernate) with doRegisterPlayer URL ( POST request )
	// GetMapping is alternative of RequestMapping
	@RequestMapping(value = "doRegisterPlayer", method=RequestMethod.POST)
	public @ResponseBody String registerPlayer(@RequestBody Player player) {
		
		// save player object
		teamRepository.save(player);
		
		return "home";
	}
}
