package com.app.dto;

import javax.persistence.Column;

public class AdminDto {

	private String email;

	private String password;
	
	public AdminDto() {
		
	}
	
	public AdminDto(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AdminDto [email=" + email + ", password=" + password + "]";
	}

	
	
	
	
}
