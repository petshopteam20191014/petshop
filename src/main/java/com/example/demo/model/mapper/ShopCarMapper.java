package com.example.demo.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ShopCarMapper {
    @Insert("insert into shopcar() values()")
	public String insertShopCar(String pdid,int uid,int amount);
}
