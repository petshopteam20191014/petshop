package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Specification;
import com.example.demo.model.mapper.SpecificationMapper;

@Service
public class SpecificationService {
	@Autowired
	private SpecificationMapper specificationMapper;
	
	public List<Specification> selectAllSpecification(){
		return specificationMapper.selectAllSpecification();
	};
}
