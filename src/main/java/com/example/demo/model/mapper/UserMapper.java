package com.example.demo.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

	@Insert("insert into user values(#{uname},#{password})")
	public void insertUser(@Param("uname") String uname,@Param("password") String password);
	
}
