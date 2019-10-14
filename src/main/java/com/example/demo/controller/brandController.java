package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Brand;
import com.example.demo.model.service.BrandService;

@RestController
public class brandController {
	@Autowired
	private BrandService brandService;
	
	@RequestMapping("selectAllBrand")
	public List<Brand> selectAllBrand(){
		return brandService.selectAllBrand();
		
	}
	
}
