package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.bean.Picture;
import com.example.demo.model.mapper.PictureMapper;

@Service
public class PictureService {
	@Autowired
	private PictureMapper pictureMapper;
	
	public void insertPicture(String productId,String picture) {
		pictureMapper.insertPicture(productId, picture);
	}
	
	//limit查询图片
	public List<Picture> selectProductByPicId(String pictureId,int startP,int endP){
		return pictureMapper.selectProductByPicId(pictureId, startP, endP);
	}
	
	public int selectPicNum(String pictureId) {
		return pictureMapper.selectPicNum(pictureId);
	};
}
