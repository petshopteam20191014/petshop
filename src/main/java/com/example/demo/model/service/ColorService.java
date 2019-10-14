package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Color;
import com.example.demo.model.mapper.ColorMapper;

@Service
public class ColorService {

	@Autowired
	private ColorMapper colorMapper;
	public List<Color> selectAllColor(){
		return colorMapper.selectAllColor();
	}
}
