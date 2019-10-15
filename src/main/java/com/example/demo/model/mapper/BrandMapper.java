package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Brand;

@Mapper
public interface BrandMapper {
	//获取所有的品牌
	@Select("select * from brand")
	public List<Brand> selectAllBrand();
	
	//根据id查询品牌
	@Select("select * from brand where bid = #{bid}")
	public Brand selectById(String bid);
}
