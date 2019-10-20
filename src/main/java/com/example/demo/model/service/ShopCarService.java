package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.ShopCar;
import com.example.demo.model.mapper.PictureMapper;
import com.example.demo.model.mapper.ShopCarMapper;

@Service
public class ShopCarService {
	@Autowired
	private ShopCarMapper shopCarMapper;
	@Autowired
	private PictureMapper pictureMapper;
	public String insertShopCar(String pdid,int uid,int amount){
    	return null;
    }
	
	public List<ShopCar> shopCarAllPro(int userid){
		List<ShopCar> list = shopCarMapper.shopCarAllPro(userid);
		//给每个商品匹配对应的图片
		for (ShopCar x : list) {
			String id = x.getProductdetail().getPdid().substring(0,5);
//			System.out.println(id);
			x.getProductdetail().setPicture(pictureMapper.selectById(id));
//			System.out.println(pictureMapper.selectById(id).get(0).getPictureName());
		}
		return list;
	}
}
