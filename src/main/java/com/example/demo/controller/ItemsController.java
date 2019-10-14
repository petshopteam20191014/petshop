package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Items;
import com.example.demo.model.service.ItemsService;

@RestController
public class ItemsController {

	@Autowired
	private ItemsService itemsService;
	
	@RequestMapping("selectAllItems")
	public List<Items> selectAllItems(){
		return itemsService.selectAllItems();
	};
}
