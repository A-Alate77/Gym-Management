package com.app.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AdminLoginDao;
import com.app.dao.UserRegistrationDao;
import com.app.dto.AddUser;
import com.app.entity.AdminLogin;
import com.app.entity.UserRegistration;
import com.app.exception.ResourceNotFoundException;
import com.app.service.UserService;
import com.app.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
@Transactional
@Service
public class UserRegistrationController {
	
	@Autowired
	private UserRegistrationDao userRegistrationRepository;
	
	@Autowired
	private AdminLoginDao adminLoginRepository;
	
//	@Autowired
//	private UserService userSer;
	
	//UserServiceImpl imp = new UserServiceImpl();
	
	@Autowired
	private ModelMapper mapper;

	@GetMapping("/ge")
	public ResponseEntity<?> getAllUserRegistration(){
		System.out.println("In correct");
		List<UserRegistration> clist= userRegistrationRepository.findAll();
		System.out.println(clist);
		// return clist;
		
//		List<UserRegistration> clist = imp.()
				
				
		return ResponseEntity.status(HttpStatus.OK).body(clist);
	}
	
//	@PostMapping
//	public UserRegistration createUserRegistration(@RequestBody UserRegistration userRegistration) {
//		
//		
//		return userRegistrationRepository.save(userRegistration);
//	}
	
	@PostMapping
	public ResponseEntity<?> createUserDtoRegistration(@RequestBody AddUser userReg) {
		System.out.println("I cr ...");
		try {
			System.out.println(userReg);
			System.out.println("In try");
		AdminLogin admin = adminLoginRepository.findById(userReg.getAdminid())
				.orElseThrow(() -> new ResourceNotFoundException("Admin Id not found"));
		System.out.println("in //" + admin);
		UserRegistration u = mapper.map(userReg,UserRegistration.class);
		System.out.println("After "+ u);
		admin.addUser(u);
		userRegistrationRepository.save(u);
		System.out.println("Before");
		return ResponseEntity.status(HttpStatus.OK).body("nothing to ");
		}
		catch(Exception e){
			//return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("bad request ");
		}
		
		
	}
	
	@GetMapping("/GetId/{user_id}")
	public ResponseEntity<?> getUserRegistrationById(@PathVariable  int user_id){
		
		try {
			UserRegistration userRegistration = userRegistrationRepository.findById(user_id)
	                .orElseThrow(() -> new ResourceNotFoundException("User not exist with user_id:" + user_id));
			return ResponseEntity.status(HttpStatus.OK).body(userRegistration);
		}
		catch(Exception e){
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	 
	 @DeleteMapping("/del/{id}")
	    public String deleteUserRegistration(@PathVariable int id){
		 	System.out.println("In delete method...");
//	        UserRegistration userRegistration = userRegistrationRepository.findById(id)
//	                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
//	        System.out.println("User deatils :-"+userRegistration);
//	        System.out.println("After delete...");
//	        
//	        AdminLogin adminId =  userRegistration.getAdmin();
//	        System.out.println("Admin Id:-"+adminId);
//	        
//	        //String mess = userSer.deleteUser(userRegistration);
//	        System.out.println("admin details " + adminId);
//	        //adminId.removeUser(userRegistration);
//	        System.out.println("Intermediate...");
//	        
////	        userRegistrationRepository.delete(userRegistration);
      userRegistrationRepository.deleteByuser_id(id);
	        //imp.newDel(id);
	        
	       // imp.deleteUser(id);
	       
	        System.out.println("ajsdhhejrdf");
	       // return new ResponseEntity<>("ess", HttpStatus.OK);
	        return "Sucess";

	    }
	 
	 @PutMapping("{user_id}")
	    public ResponseEntity<UserRegistration> updateUserRegistration(@PathVariable int user_id,@RequestBody UserRegistration userDetails) {
	    	UserRegistration updateUserRegistration = userRegistrationRepository.findById(user_id)
	                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + user_id));

	    	updateUserRegistration.setF_name(userDetails.getF_name());
	    	updateUserRegistration.setL_name(userDetails.getL_name());
	    	updateUserRegistration.setAge(userDetails.getAge());
	    	updateUserRegistration.setContact_no(userDetails.getContact_no());
	    	updateUserRegistration.setGender(userDetails.getGender());
	    	updateUserRegistration.setEmail(userDetails.getEmail());
	    	updateUserRegistration.setPassword(userDetails.getPassword());

	    	userRegistrationRepository.save(updateUserRegistration);

	        return ResponseEntity.ok(updateUserRegistration);
	    }
	
}
