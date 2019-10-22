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
//	    	System.out.println(userid + "+111111111111");
	    	return shopCarService.shopCarAllPro(userid);
	    };
	    
	    //删除
	    @RequestMapping("deleteShopCarOne")
	    public String deleteShopCarOne(int userid,String scid){
//	    	System.out.println(userid);
//	    	System.out.println(scid);
	    	shopCarService.deleteShopCarOne(userid, scid);
	    	return "{\"result\":\"yes\"}";
	    }
	    //插入
	    @RequestMapping("insertShopCar")
	    public String insertShopCar(String scid,int userid,int snum) {
	    	shopCarService.insertShopCar(scid, userid, snum);
	    	return "{\"result\":\"yes\"}";
	    }
	    
	    @RequestMapping("shopCarNum")
	    public String shopCarNum(int userid) {
	    	int num = shopCarService.shopCarNum(userid);
	    	return "{\"result\":\""+num+"\"}"; 
	    }
	    
	    
}
