package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.User;
import com.example.demo.model.service.UserService;

@RestController
public class UserController {
    @Autowired
	private UserService userService;
    
    //注册时，用户名重复判断
    @RequestMapping("selectUserByName")
	public String selectUserByName(@RequestParam("uname") String uname){
    	User u=userService.selectUserByName(uname);
    	if(u!=null){
    		return "{\"result\":\"exist\"}";
    	}else{
    		return "{\"result\":\"none\"}";
    	}
    }
	    
		
    //注册
	@RequestMapping("register")
	public String register(@RequestParam("uname") String uname,@RequestParam("password") String password){
		
		userService.insertUser(uname, password);
		return "{\"result\":\"注册成功\"}";
	}
	
	//登录
	@RequestMapping("loginUser")
	public String login(@RequestParam("uname") String uname,@RequestParam("password") String password){
		User u=userService.selectUser(uname,password);
		if(u!=null){
    		return "{\"result\":\"登录成功\"}";
    	}else{
    		return "{\"result\":\"用户名或密码不正确，请重新输入！\"}";
    	}
	}
	
	
	
}
