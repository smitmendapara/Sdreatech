package com.tech.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="PLAYER")
public class Player {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String playerName;
	
	@Column(unique = true)
	@Email(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
	private String playerEmail;
	
	private String playerGender;
	
	private String playerNationality;

	@ManyToOne
	private Team team;
	
	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Player(int id, String playerName, String playerEmail, String playerGender,
			String playerNationality) {
		super();
		this.id = id;
		this.playerName = playerName;
		this.playerEmail = playerEmail;
		this.playerGender = playerGender;
		this.playerNationality = playerNationality;
	}

	public Team getTeam() {
		return team;
	}
	public void setTeam(Team team) {
		this.team = team;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getPlayerEmail() {
		return playerEmail;
	}

	public void setPlayerEmail(String playerEmail) {
		this.playerEmail = playerEmail;
	}

	public String getPlayerGender() {
		return playerGender;
	}

	public void setPlayerGender(String playerGender) {
		this.playerGender = playerGender;
	}

	public String getPlayerNationality() {
		return playerNationality;
	}

	public void setPlayerNationality(String playerNationality) {
		this.playerNationality = playerNationality;
	}

	@Override
	public String toString() {
		return "Player [id=" + id + ", playerName=" + playerName + ", playerEmail=" + playerEmail + ", playerGender="
				+ playerGender + ", playerNationality=" + playerNationality + ", team=" + team + "]";
	}
}
