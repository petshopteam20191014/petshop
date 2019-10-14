package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Cweight;
import com.example.demo.model.mapper.CweightMapper;

@Service
public class CweightService {
	@Autowired
	private CweightMapper cweightMapper;
	
	public List<Cweight> selectAllCweight(){
		return cweightMapper.selectAllCweight();
	}
}
