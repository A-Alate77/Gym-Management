package com.app.dto;

public class AddUser {

	private String f_name;

	private String l_name;
		
	private int age;
	
	private String gender;
	
	private long contact_no;
	
	private String email;
	
	private String password;
	
	private int adminid;
	
	public AddUser() {
		
	}

	public AddUser(String f_name, String l_name, int age, String gender, long contact_no, String email, String password,
			int adminid) {
		super();
		this.f_name = f_name;
		this.l_name = l_name;
		this.age = age;
		this.gender = gender;
		this.contact_no = contact_no;
		this.email = email;
		this.password = password;
		this.adminid = adminid;
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

	public int getAge() {
		return age;
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

	public int getAdminid() {
		return adminid;
	}

	public void setAdminid(int adminid) {
		this.adminid = adminid;
	}

	@Override
	public String toString() {
		return "AddUser [f_name=" + f_name + ", l_name=" + l_name + ", age=" + age + ", gender=" + gender
				+ ", contact_no=" + contact_no + ", email=" + email + ", password=" + password + ", adminId=" + adminid
				+ "]";
	}
	
	
}
