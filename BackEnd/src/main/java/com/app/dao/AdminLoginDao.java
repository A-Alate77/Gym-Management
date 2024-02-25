package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.AdminLogin;

public interface AdminLoginDao extends JpaRepository<AdminLogin, Integer> {

	
	Optional<AdminLogin> findByEmail(String email);
	Optional<AdminLogin> findById(int id);
}
