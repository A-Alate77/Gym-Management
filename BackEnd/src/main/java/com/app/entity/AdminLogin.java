package com.app.entity;

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

//import lombok.AllArgsConstructor;
//import lombok.NoArgsConstructor;

//@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Table(name="admin_login")
public class AdminLogin {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "admin_user_name",nullable = false)
	//private String admin_user_name;
	private String email;
	

	
	
	
	@Column(name = "password",nullable = false)
	private String password;
	
	@OneToMany(mappedBy = "admin",cascade=CascadeType.ALL
			,fetch=FetchType.EAGER)
	private List<UserRegistration> user = new ArrayList<>();

	public AdminLogin() {
		
	}
	
//		public AdminLogin(String email, String password) {
//			this.email = email;
//			this.password = password;
//		}

		public AdminLogin(int id, String email, String password) {
		super();
		//this.admin_id = admin_id;
		this.id = id;
		this.email = email;
		this.password = password;
	}



		public void addUser(UserRegistration e)
		{
			this.user.add(e);
			e.setAdmin(this);
		}
		
		public void removeUser(UserRegistration e)
		{
			System.out.println("In remove user method");
			for(UserRegistration u : user) {
				if(e == u)
				System.out.println(u);
			}
			this.user.remove(e);
			e.setAdmin(null);
		}
	
	
//	public int getAdmin_id() {
//		return admin_id;
//	}
//
//	public void setAdmin_id(int admin_id) {
//		this.admin_id = admin_id;
//	}
//
//	public String getAdmin_user_name() {
//		return admin_user_name;
//	}
//
//	public void setAdmin_user_name(String admin_user_name) {
//		this.admin_user_name = admin_user_name;
//	}

	
	
	public int getId() {
			return id;
		}



		public void setId(int id) {
			this.id = id;
		}



	@Override
	public String toString() {
		return "AdminLogin [admin_id= , email=" +   " " +email + ", password=" + password + "]";
	}



	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public List<UserRegistration> getUser() {
		return user;
	}
	public void setUser(List<UserRegistration> user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	
	

}
