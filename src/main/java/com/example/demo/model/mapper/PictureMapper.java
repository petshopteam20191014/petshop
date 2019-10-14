package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Picture;

@Mapper
public interface PictureMapper {
	//保存商品的图片
	@Insert("insert into picture values(#{productId},#{pictureName})")
	public void insertPicture(@Param("productId") String productId,@Param("pictureName") String pictureName);
	
	@Select("select * from picture")
	public List<Picture> selectAllPictureId();
}
