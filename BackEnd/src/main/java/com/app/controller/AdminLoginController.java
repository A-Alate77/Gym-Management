package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AdminLoginDao;
import com.app.dto.AdminDto;
import com.app.entity.AdminLogin;
import com.app.exception.ResourceNotFoundException;

import lombok.NoArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@NoArgsConstructor
@RestController
@RequestMapping("/admin")
public class AdminLoginController {

	@Autowired
	private AdminLoginDao adminLoginRepository;
	
	@PostMapping("/login")
	public ResponseEntity<?> validateAdmin(@RequestBody AdminDto adminLogin){
		System.out.println("In post mapping");
		try {
			System.out.println("In validateAdmin "+ adminLogin);
			
			
		AdminLogin admin = adminLoginRepository.findByEmail(adminLogin.getEmail()).
				orElseThrow(() -> new ResourceNotFoundException("Email address not found"));
		System.out.println("Before checking password");
		if(adminLogin.getPassword().equals(admin.getPassword())) {
			System.out.println("In checking Password");
			//return "Sucess in returing ";
			System.out.println(admin);
			return ResponseEntity.status(HttpStatus.OK).body("In body");
		}
		else {
			System.out.println("In error...");
			//return "Returning else Sattement";
			return new ResponseEntity<>("Invalid Password!!!", HttpStatus.NOT_FOUND);
		}
		
		}catch(Exception e) {
			//return "Error Occure";
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
				
	}
	
	
	
}
