package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Pets;
import com.example.demo.model.service.PetsService;

@RestController
public class PetsController {

	@Autowired
	private PetsService petsService;
	
	@RequestMapping("selectAllPets")
	public List<Pets> selectAllPets(){
		return petsService.selectAllPets();
	};
}
