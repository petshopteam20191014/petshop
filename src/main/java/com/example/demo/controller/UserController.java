package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.model.service.UserService;

@Controller
public class UserController {
    @Autowired
	private UserService userService;
	@RequestMapping("insertUser")
	public void insertUser(@RequestParam String uname,@RequestParam String password){
	
		userService.insertUser(uname, password);
		
	}
	
	
}
