package com.example.demo.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.FetchType;

import com.example.demo.model.bean.Productdetail;
import com.example.demo.model.bean.Productdetail2;

@Mapper
public interface ProductdetailMapper {
	//插入商品
	@Insert("insert into productdetail values(#{pdid},#{diid},#{pdname},#{cost},#{brand},#{color},"
	+"#{cweight},#{specification},#{taste},#{size},#{stocks},#{shlelftime})")
	public void insertProductdetail(Productdetail productdetail);
	

	//查询所有商品以名字分组
	@Select("select pdid,diid,pdname,cost,brand from productdetail GROUP BY pdname")
	@Results(id="productResult",value= {
			@Result(id=true,column = "pdid",property = "pdid" ),
			@Result(column = "diid",property = "diid"),
			@Result(column = "pdname",property = "pdname"),
			@Result(column = "cost",property = "cost"),
			@Result(column = "brand",property = "brand",one = @One(select = "com.example.demo.model.mapper.BrandMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "color",property = "color",one = @One(select = "com.example.demo.model.mapper.ColorMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "cweight",property = "cweight",one = @One(select = "com.example.demo.model.mapper.CweightMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "specification",property = "specification",one = @One(select = "com.example.demo.model.mapper.SpecificationMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "taste",property = "taste",one = @One(select = "com.example.demo.model.mapper.TasteMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "size",property = "size",one = @One(select = "com.example.demo.model.mapper.SizeMapper.selectById",fetchType= FetchType.EAGER)),
			@Result(column = "stocks",property = "stocks"),
			@Result(column = "shlelftime",property = "shlelftime")
	})
	public List<Productdetail2> selectAllProduct();
	
	//根据pdid的前5位查询 商品所有信息
	@Select("select * from productdetail where pdid like '${pdid}%'")
	@ResultMap("productResult")
	public List<Productdetail2> selectProductByPdid(String pdid);
	
	//查询某个pdid商品下的所有颜色
	@Select("select DISTINCT color from productdetail where pdid like '${pdid}%'")
	@ResultMap("productResult")
	public List<Productdetail2> selectPicColor(String pdid);
	
	//查询某个pdid商品下的所有尺寸
	@Select("select DISTINCT size from productdetail where pdid like '${pdid}%'")
	@ResultMap("productResult")
	public List<Productdetail2> selectPicSize(String pdid);
	
	//查询某个pdid商品下的所有规格
	@Select("select DISTINCT specification from productdetail where pdid like '${pdid}%'")
	@ResultMap("productResult")
	public List<Productdetail2> selectPicSF(String pdid);
	
	//查询某个pdid商品下的所有口味
	@Select("select DISTINCT taste from productdetail where pdid like '${pdid}%'")
	@ResultMap("productResult")
	public List<Productdetail2> selectPicTaste(String pdid);
	
	
	//查询某个商品的全部库存数量
	@Select("select sum(stocks) from productdetail where pdid like '${pdid}%'")
	public int selectPicStocks(String pdid);
	
	
	//根据ID查询单个商品
	@Select("select stocks from productdetail where pdid like #{pdid}")
	public Productdetail2 selectOnePicStocks(String pdid);
	
	
	
	
	
	
	
	
	
	
	
	
}
