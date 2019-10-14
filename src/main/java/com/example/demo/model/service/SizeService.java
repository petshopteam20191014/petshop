package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Size;
import com.example.demo.model.mapper.SizeMapper;

@Service
public class SizeService {
	@Autowired
	private SizeMapper sizeMapper;
	
	public List<Size> selectAllSize(){
		return sizeMapper.selectAllSize();
	}
}
