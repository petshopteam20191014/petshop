package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Items;
import com.example.demo.model.mapper.ItemsMapper;

@Service
public class ItemsService {
	@Autowired
	private ItemsMapper itemsMapper;
	
	public List<Items> selectAllItems(){
		return itemsMapper.selectAllItems();
	};
}
