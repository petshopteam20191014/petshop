package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.bean.Picture;

@Mapper
public interface PictureMapper {
	//保存商品的图片
	@Insert("insert into picture values(#{pictureId},#{pictureName})")
	public void insertPicture(@Param("pictureId") String productId,@Param("pictureName") String pictureName);
	
	@Select("select * from picture")
	public List<Picture> selectAllPictureId();
	
	@Select("select * from picture where pictureId = #{pictureId}")
	@Results({
		@Result(column = "pictureId",property = "pictureId"),
		@Result(column = "pictureName",property = "pictureName")
	})
	public List<Picture> selectById(String pictureId);
}
