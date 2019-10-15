package com.example.demo.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.User;
import com.example.demo.model.mapper.UserMapper;

@Service
public class UserService {
    @Autowired
	private UserMapper userMapper;
   
    public User selectUserByName(String uname) {
		return userMapper.selectUserByName(uname);
		
	} 
    
    public void insertUser(String uname,String password){
    	userMapper.insertUser(uname, password);
    }

	public User selectUser(String uname,String password) {
		return userMapper.selectUser(uname,password);
		
	}

	
	
    
    
}
