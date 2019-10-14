package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Taste;
import com.example.demo.model.service.TasteService;

@RestController
public class TasteController {
	@Autowired
	private TasteService tasteService;
	
	@RequestMapping("selectAllTaste")
	public List<Taste> selectAllTaste(){
		return tasteService.selectAllTaste();
	}
}
