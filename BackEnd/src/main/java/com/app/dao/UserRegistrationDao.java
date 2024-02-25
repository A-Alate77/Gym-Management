package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entity.UserRegistration;

public interface UserRegistrationDao extends JpaRepository<UserRegistration,Integer> {
	
	UserRegistration findByEmail(String email);
	List<UserRegistration> findAll();
	//voi
//	void delete(String s);
 @Modifying
   @Query("delete from UserRegistration u where u.user_id=?1")
	 void deleteByuser_id(int user_id);
	
}
