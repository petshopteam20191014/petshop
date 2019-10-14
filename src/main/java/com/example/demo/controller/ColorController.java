package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Color;
import com.example.demo.model.service.ColorService;

@RestController
public class ColorController {
	@Autowired
	private ColorService colorService;
	@RequestMapping("selectAllColor")
	public List<Color> test01(){
		return colorService.selectAllColor();
	}
}
