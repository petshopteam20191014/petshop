package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Pets;

@Mapper
public interface PetsMapper {
	//查询所有宠物的类型；
	@Select("select * from pets")
	public List<Pets> selectAllPets();

}
