package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Size;
import com.example.demo.model.service.SizeService;

@RestController
public class SizeController {
	@Autowired
	private SizeService sizeService;
	
	@RequestMapping("selectAllSize")
	public List<Size> selectAllSize(){
		return sizeService.selectAllSize();
	}
	
	
}
