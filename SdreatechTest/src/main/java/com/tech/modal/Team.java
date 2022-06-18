package com.tech.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="TEAM")
public class Team 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String teamTitle;
	
	@Column(length = 10)
	private String sortName;
	
	private String manageBy;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "team")
	@JsonIgnore
	private List<Player> players = new ArrayList<>();
	
	public Team() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Team(int id, String teamTitle, String sortName, String manageBy) {
		super();
		this.id = id;
		this.teamTitle = teamTitle;
		this.sortName = sortName;
		this.manageBy = manageBy;
	}

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTeamTitle() {
		return teamTitle;
	}
	public void setTeamTitle(String teamTitle) {
		this.teamTitle = teamTitle;
	}
	public String getSortName() {
		return sortName;
	}
	public void setSortName(String sortName) {
		this.sortName = sortName;
	}
	public String getManageBy() {
		return manageBy;
	}
	public void setManageBy(String manageBy) {
		this.manageBy = manageBy;
	}
	@Override
	public String toString() {
		return "Team [id=" + id + ", teamTitle=" + teamTitle + ", sortName=" + sortName + ", manageBy=" + manageBy
				+ "]";
	}
}
