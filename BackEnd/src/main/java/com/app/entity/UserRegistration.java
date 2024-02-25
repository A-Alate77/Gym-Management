package com.app.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="new_user")
public class UserRegistration {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		//@Column(name = "f_name")
		private int user_id;
		
		@Column(name = "f_name",nullable = false)
		private String f_name;
		
		@Column(name = "l_name",nullable = false)
		private String l_name;
		
//		@Column(name = "dob",nullable = false)
//		private java.sql.Date dob; 

		
		@Column(name = "age",nullable = false)
		private int age;
		
		@Column(name = "gender",nullable = false)
		private String gender;
		
		@Column(name = "contact_no",nullable = false)
		private long contact_no;
		
		@Column(name = "email",nullable = false)
		private String email;
		
		@Column(name = "password",nullable = false)
		private String password;
		
		@JsonIgnore
		@ManyToOne
		@JoinColumn(name="admin_tb",nullable = false)
		private AdminLogin admin;
		
		public AdminLogin getAdmin() {
			return admin;
		}


		public void setAdmin(AdminLogin admin) {
			this.admin = admin;
		}


		public UserRegistration() {
			
		}
			

		public UserRegistration(String f_name, String l_name,/* Date dob,*/ int age, String gender, long contact_no,
				String email, String password) {
			super();
			this.f_name = f_name;
			this.l_name = l_name;
			//this.dob = dob;
			this.age = age;
			this.gender = gender;
			this.contact_no = contact_no;
			this.email = email;
			this.password = password;
		}

		public int getUser_id() {
			return user_id;
		}

		public void setUser_id(int user_id) {
			this.user_id = user_id;
		}
		public int Id() {
			return user_id;
		}

		public void setId(int user_id) {
			this.user_id = user_id;
		}

		public String getF_name() {
			return f_name;
		}

		public void setF_name(String f_name) {
			this.f_name = f_name;
		}

		public String getL_name() {
			return l_name;
		}

		public void setL_name(String l_name) {
			this.l_name = l_name;
		}

//		public java.sql.Date getDob() {
//			return dob;
//		}
//
//		public void setDob(Date dob) {
//			this.dob = dob;
//		}

		public int getAge() {
			return age;
		}

		@Override
		public String toString() {
			return "UserRegistration [user_id=" + user_id + ", f_name=" + f_name + ", l_name=" + l_name + ", age=" + age
					+ ", gender=" + gender + ", contact_no=" + contact_no + ", email=" + email + ", password="
					+ password + "]";
		}


		public void setAge(int age) {
			this.age = age;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public long getContact_no() {
			return contact_no;
		}

		public void setContact_no(long contact_no) {
			this.contact_no = contact_no;
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

		
		
		
	
}
