package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Pets;
import com.example.demo.model.mapper.PetsMapper;

@Service
public class PetsService {
	@Autowired
	private PetsMapper petsMapper;
	
	public List<Pets> selectAllPets(){
		return petsMapper.selectAllPets();
	};
}
