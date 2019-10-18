package com.example.demo.controller;

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
	
	
}
