package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Cweight;
import com.example.demo.model.service.CweightService;

@RestController
public class CweightController {
	@Autowired
	private CweightService cweightService;
	
	@RequestMapping("selectAllCweight")
	public List<Cweight> selectAllCweight(){
		return cweightService.selectAllCweight();
	}
	
}
