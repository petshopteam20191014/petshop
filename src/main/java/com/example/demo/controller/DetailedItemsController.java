package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Detaileditems;
import com.example.demo.model.service.DetailedItemsService;

@RestController
public class DetailedItemsController {
	@Autowired
	private DetailedItemsService detailedItemsService ;
	
	@RequestMapping("selectItemAllDetailedItems")
	public List<Detaileditems> selectItemAllDetailedItems(int pid,int iid){
		return detailedItemsService.selectItemAllDetailedItems(pid, iid);
	}
}
