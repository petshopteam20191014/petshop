package com.example.demo.model.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Detaileditems;
import com.example.demo.model.mapper.DetailedItemsMapper;

@Service
public class DetailedItemsService {
	@Autowired
	private DetailedItemsMapper detailedItemsMapper;
	
	public List<Detaileditems> selectItemAllDetailedItems(int pid,int iid){
		return detailedItemsMapper.selectItemAllDetailedItems(pid, iid);
	};
	
}
