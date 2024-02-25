package com.app.service;



import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRegistrationDao;
import com.app.entity.UserRegistration;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	private UserRegistrationDao userRegistrationRepository;
//	
//	
//	public List<UserRegistration> getAl(){
//		
//		List<UserRegistration> clist= userRegistrationRepository.findAll();
//		return clist;
//	}
	
	public String deleteUser(UserRegistration u) {
		
		userRegistrationRepository.delete(u);
		return "sucess";
	}
	
	
	public String deleteUser(int id) {
		 userRegistrationRepository.deleteById(id);
		 return "Sucessss";
	}
//	
//	public void newDel(int id) {
//		userRegistrationRepository.deleteById(id);
//	}
//	
	
	//System.out.println(clist);
}
