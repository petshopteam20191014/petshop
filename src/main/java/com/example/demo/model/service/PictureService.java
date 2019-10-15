package com.example.demo.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.mapper.PictureMapper;

@Service
public class PictureService {
	@Autowired
	private PictureMapper pictureMapper;
	
	public void insertPicture(String productId,String picture) {
		pictureMapper.insertPicture(productId, picture);
	}
}
