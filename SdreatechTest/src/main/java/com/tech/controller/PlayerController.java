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

@Controller
public class PlayerController {

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private TeamRepository teamRepository;

	@RequestMapping("/")
	public String home() {

		System.out.println("home page");

		return "home";
	}

	@RequestMapping(value = "doRegisterTeam", method=RequestMethod.POST)
	public @ResponseBody String registerTeam(@RequestBody Team team) {
		
		playerRepository.save(team);
		
		return "home";
	}
	
	@RequestMapping(value = "doRegisterPlayer", method=RequestMethod.POST)
	public @ResponseBody String registerPlayer(@RequestBody Player player) {
		
		teamRepository.save(player);
		
		return "home";
	}
}
