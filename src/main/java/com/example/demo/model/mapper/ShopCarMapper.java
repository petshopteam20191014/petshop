package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.FetchType;

import com.example.demo.model.bean.ShopCar;

@Mapper
public interface ShopCarMapper {
    @Insert("insert into shopcar() values()")
	public String insertShopCar(String pdid,int uid,int amount);
    
    
    //查询该用户下，购物车内的所有商品
    @Select("select * from shopcar where userid = #{userid}")
    @Results(id="shopCarResult",value= {
    		@Result(column = "scid",property = "productdetail",one = @One(select = "com.example.demo.model.mapper.ProductdetailMapper.selectProByPdid",fetchType= FetchType.EAGER)),
    		@Result(column = "userid",property = "user",one = @One(select = "com.example.demo.model.mapper.UserMapper.selectUserById",fetchType= FetchType.EAGER)),
    		@Result(column = "snum",property = "snum")
    })
    public List<ShopCar> shopCarAllPro(int userid);
    
}
