package com.example.demo.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.example.demo.model.bean.Productdetail;

@Mapper
public interface ProductdetailMapper {
	//插入商品
	@Insert("insert into productdetail values(#{pdid},#{diid},#{pdname},#{cost},#{brand},#{color},"
	+"#{cweight},#{specification},#{taste},#{size},#{stocks},#{shlelftime})")
	public void insertProductdetail(Productdetail productdetail);
}
