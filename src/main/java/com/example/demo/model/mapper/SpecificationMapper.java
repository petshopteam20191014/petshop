package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Specification;

@Mapper
public interface SpecificationMapper {
	//所有的规格
	@Select("select * from specification")
	public List<Specification> selectAllSpecification();
	
	//根据id查询
	@Select("select * from specification where sfid=#{sfid}")
	public Specification selectById(int sfid);
}
