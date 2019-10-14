package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Items;
@Mapper
public interface ItemsMapper {
	//所有的商品种类
	@Select("select * from items")
	public List<Items> selectAllItems();
}
