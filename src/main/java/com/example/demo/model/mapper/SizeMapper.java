package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Size;

@Mapper
public interface SizeMapper {
	//所有的尺寸
	@Select("select * from size")
	public List<Size> selectAllSize();
}
