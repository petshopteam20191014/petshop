package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Cweight;

@Mapper
public interface CweightMapper {
	//所有的重量
	@Select("select * from cweight")
	public List<Cweight> selectAllCweight();

}
