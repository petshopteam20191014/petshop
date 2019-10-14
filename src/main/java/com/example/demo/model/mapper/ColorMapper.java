package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Color;

@Mapper
public interface ColorMapper {
	
	@Select("select * from color")
	public List<Color> selectAllColor(); 
}
