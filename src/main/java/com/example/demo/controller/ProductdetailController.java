package com.example.demo.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.Productdetail;
import com.example.demo.model.bean.Productdetail2;
import com.example.demo.model.service.ProductdetailService;

@RestController
public class ProductdetailController {

	@Autowired
	private ProductdetailService productdetailService;
	
	@RequestMapping("insertProductdetail")
	public void insertProductdetail(Productdetail productdetail) {
		productdetailService.insertProductdetail(productdetail);
	}
	
	@RequestMapping("selectAllProduct")
	public List<Productdetail2> selectAllProduct(String id){
		return productdetailService.selectAllProduct();
	}
	
	@RequestMapping("selectPartProduct")
	public List<Productdetail2> selectPartProduct(String id){
		List<Productdetail2> list = productdetailService.selectAllProduct();
		List<Productdetail2> newList = new ArrayList<Productdetail2>();
		if(id.substring(0, 1).equals("0")) {
			for (Productdetail2 p : list) {
				if(p.getPdid().substring(1, 2).equals(id.substring(1, 2))) {
					newList.add(p);
				}
			}
			
		}else if(id.substring(1, 2).equals("0")) {
			for (Productdetail2 p : list) {
				if(p.getPdid().substring(0, 1).equals(id.substring(0, 1))) {
					newList.add(p);
				}
			}
		}else if (id.substring(2, 4).equals("00")) {
			for (Productdetail2 p : list) {
				if(p.getPdid().substring(0, 2).equals(id.substring(0, 2))) {
					newList.add(p);
				}
			}
		}else {
			for (Productdetail2 p : list) {
				if(p.getPdid().substring(0, 4).equals(id.substring(0, 4))) {
					newList.add(p);
				}
			}
		}
		
		return newList;
		
	}
	
	@RequestMapping("selectProductByPdid")
	public List<Productdetail2> selectProductByPdid(String pdid){
		return productdetailService.selectProductByPdid(pdid);
	}
	
	@RequestMapping("selectPicColor")
	public List<Productdetail2> selectPicColor(String pdid){
		return productdetailService.selectPicColor(pdid);
	}
	
	@RequestMapping("selectPicSize")
	public List<Productdetail2> selectPicSize(String pdid){
		return productdetailService.selectPicSize(pdid);
	}
	
	@RequestMapping("selectPicSF")
	public List<Productdetail2> selectPicSF(String pdid){
		return productdetailService.selectPicSF(pdid);
	}
	
	@RequestMapping("selectPicTaste")
	public List<Productdetail2> selectPicTaste(String pdid){
		return productdetailService.selectPicTaste(pdid);
	}
	
	//查询某个商品的全部库存数量
	@RequestMapping("selectPicStocks")
	public int selectPicStocks(String pdid) {
		return productdetailService.selectPicStocks(pdid);
	}
	
	//根据ID查询单个商品
	@RequestMapping("selectOnePicStocks")
	public Productdetail2 selectOnePicStocks(String pdid) {
		return productdetailService.selectOnePicStocks(pdid);
	};
	 //根据部分名字查询
	@RequestMapping("selectPartByName")
	public List<Productdetail2> selectPartByName(String pdname) {
		String pdname01 =null;
		try {
			pdname01 = URLDecoder.decode(pdname,"utf-8");
			
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		System.out.println(pdname01);
		return productdetailService.selectPartByName(pdname01);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
