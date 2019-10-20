package com.example.demo.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.User;

@Mapper
public interface UserMapper {
	
	@Select("select * from user where uname=#{uname}")
	public User selectUserByName(String uname);

	@Insert("insert into user(uname,password) values(#{uname},#{password})")
	public void insertUser(@Param("uname") String uname,@Param("password") String password);

	@Select("select * from user where uname=#{uname} and password=#{password}")
	public User selectUser(@Param("uname")String uname, @Param("password") String password);
	
	//根据userid查询
	@Select("select * from user where uid = #{uid}")
	public User selectUserById(int uid);
	
}
