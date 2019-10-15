package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Taste;

@Mapper
public interface TasteMapper {
	//所有的商品口味
	@Select("select * from taste")
	public List<Taste> selectAllTaste();
	
	//根据id查询
	@Select("select * from taste where tid=#{tid}")
	public Taste selectById(int tid);
}
