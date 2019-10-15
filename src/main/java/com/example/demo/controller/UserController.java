package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.User;
import com.example.demo.model.service.UserService;

@RestController
public class UserController {
    @Autowired
	private UserService userService;
    
    //注册时，用户名重复判断
    @RequestMapping("selectUser")
	public String selectUser(@RequestParam("uname") String uname){
    	User u=userService.selectUser(uname);
    	if(u!=null){
    		return "{\"result\":\"exist\"}";
    	}else{
    		return "{\"result\":\"none\"}";
    	}
    }
	    
		
    //注册
	@RequestMapping("insertUser")
	public void insertUser(@RequestParam("uname") String uname,@RequestParam("password") String password){
		
		userService.insertUser(uname, password);
	}
	
	
}
