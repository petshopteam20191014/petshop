package com.example.demo.controller;



import javax.servlet.http.HttpSession;

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
	public String login(@RequestParam("uname") String uname,@RequestParam("password") String password,HttpSession session){
		User u=userService.selectUser(uname,password);
		if(u!=null){
//			System.out.println(u.getUid());
			session.setAttribute("uid", u);
    		return "{\"result\":\"0\"}";
    	}else{
    		return "{\"result\":\"用户名或密码不正确，请重新输入！\"}";
    	}
	}
	
	//查看session域里面是否有值
	@RequestMapping("sessionUser")
	public User sessionUser(HttpSession session) {
		if (session.getAttribute("uid") != null) {
			User u = (User) session.getAttribute("uid");
			return u;
		}else {
			User u = new User();
			u.setUid(0);
			return u;
		}
	}
	
	//注销session域中的值
	@RequestMapping("logoutUser")
	public String logoutUser(HttpSession session) {
		User u = new User();
		u.setUid(0);
		session.setAttribute("uid", u);
		return "{\"result\":\"注销成功\"}";
	}
	
	
	
	
}
