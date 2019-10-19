package com.example.demo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Productdetail;
import com.example.demo.model.bean.Productdetail2;
import com.example.demo.model.mapper.PictureMapper;
import com.example.demo.model.mapper.ProductdetailMapper;

@Service
public class ProductdetailService {
	@Autowired
	private ProductdetailMapper productdetailMapper;
	@Autowired
	private PictureMapper pictureMapper;
	
	public void insertProductdetail(Productdetail productdetail) {
		String pdid = productdetail.getDiid()+productdetail.getBrand()+productdetail.getColor()
		+productdetail.getCweight()+productdetail.getSpecification()+productdetail.getTaste()
		+productdetail.getSize();
		productdetail.setPdid(pdid);
		productdetailMapper.insertProductdetail(productdetail);
	}
	
	public List<Productdetail2> selectAllProduct(){
		List<Productdetail2> list = productdetailMapper.selectAllProduct();
		//给每个商品匹配对应的图片
		for (Productdetail2 x : list) {
			String id = x.getPdid().substring(0,5);
//			System.out.println(id);
			x.setPicture(pictureMapper.selectById(id));
//			System.out.println(pictureMapper.selectById(id).get(0).getPictureName());
		}
		return list;
	};
	
	public List<Productdetail2> selectProductByPdid(String pdid){
		List<Productdetail2> list = productdetailMapper.selectProductByPdid(pdid);
		//给每个商品匹配对应的图片
		for (Productdetail2 x : list) {
			String id = x.getPdid().substring(0,5);
			x.setPicture(pictureMapper.selectById(id));
		}
		return list;
	};
	
	public List<Productdetail2> selectPicColor(String pdid){
		return productdetailMapper.selectPicColor(pdid);
	}
	
	public List<Productdetail2> selectPicSize(String pdid){
		return productdetailMapper.selectPicSize(pdid);
	}
	
	public List<Productdetail2> selectPicSF(String pdid){
		return productdetailMapper.selectPicSF(pdid);
	}
	
	public List<Productdetail2> selectPicTaste(String pdid){
		return productdetailMapper.selectPicTaste(pdid);
	}
	
	public int selectPicStocks(String pdid) {
		return productdetailMapper.selectPicStocks(pdid);
	};
	
	//根据ID查询单个商品
	public Productdetail2 selectOnePicStocks(String pdid) {
		return productdetailMapper.selectOnePicStocks(pdid);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
}
