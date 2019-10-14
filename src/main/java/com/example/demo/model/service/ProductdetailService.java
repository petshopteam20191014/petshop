package com.example.demo.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.bean.Productdetail;
import com.example.demo.model.mapper.ProductdetailMapper;

@Service
public class ProductdetailService {
	@Autowired
	private ProductdetailMapper productdetailMapper;
	
	public void insertProductdetail(Productdetail productdetail) {
		String pdid = productdetail.getDiid()+productdetail.getBrand()+productdetail.getColor()
		+productdetail.getCweight()+productdetail.getSpecification()+productdetail.getTaste()
		+productdetail.getSize();
		productdetail.setPdid(pdid);
		productdetailMapper.insertProductdetail(productdetail);
	}
}
