package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Productdetail;
import com.example.demo.model.service.ProductdetailService;

@RestController
public class ProductdetailController {

	@Autowired
	private ProductdetailService productdetailService;
	
	@RequestMapping("insertProductdetail")
	public void insertProductdetail(Productdetail productdetail) {
		productdetailService.insertProductdetail(productdetail);
	}
}
