package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Brand;
import com.example.demo.model.mapper.BrandMapper;

@Service
public class BrandService {
	@Autowired
	private BrandMapper brandMapper;
	public List<Brand> selectAllBrand(){
		return brandMapper.selectAllBrand();
	};
	
}
