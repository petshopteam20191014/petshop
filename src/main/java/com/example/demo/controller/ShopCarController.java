package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.bean.ShopCar;
import com.example.demo.model.service.ShopCarService;

@RestController
public class ShopCarController {

	 @Autowired
		private ShopCarService shopCarService;
	    
	    //插入一行记录
	    @RequestMapping("insertshopping")
		public String insertshopping(@RequestParam("pdid") String pdid,@RequestParam("uid") int uid,@RequestParam("amount") int amount){
	    	shopCarService.insertShopCar(pdid,uid,amount);
	    	return null;
	    }
	    
	    //查询
	    @RequestMapping("shopCarAllPro")
	    public List<ShopCar> shopCarAllPro(int userid){
	    	return shopCarService.shopCarAllPro(userid);
	    };
	    
	    
}
