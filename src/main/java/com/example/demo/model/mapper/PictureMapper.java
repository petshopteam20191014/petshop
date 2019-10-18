package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.RequestMapping;

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
	
	//limit查询图片
	@Select("select * from picture where pictureId = #{pictureId} limit ${startP},${endP}")
	public List<Picture> selectProductByPicId(String pictureId,int startP,int endP);
	
	//查询某个商品的图片数量
	@Select("select count(*) from picture where pictureId = #{pictureId}")
	public int selectPicNum(String pictureId);
}
