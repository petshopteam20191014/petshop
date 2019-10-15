package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Detaileditems;

@Mapper
public interface DetailedItemsMapper {
	//查找某个商品类别下的所有详细类别
	@Select("select * from detaileditems where pid = #{pid} and iid = #{iid}")
	public List<Detaileditems> selectItemAllDetailedItems(@Param("pid") int pid,@Param("iid") int iid);
	
	
}
