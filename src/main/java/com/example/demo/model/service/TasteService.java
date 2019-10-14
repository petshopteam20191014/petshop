package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Taste;
import com.example.demo.model.mapper.TasteMapper;

@Service
public class TasteService {
	@Autowired
	private TasteMapper tasteMapper;
	
	public List<Taste> selectAllTaste(){
		return tasteMapper.selectAllTaste();
	};
}
