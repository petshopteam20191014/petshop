package com.example.demo.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.bean.Picture;
import com.example.demo.model.service.PictureService;

@RestController
public class PictureController {
	@Autowired
	private PictureService pictureService;
	
	@RequestMapping("insertPicture")
	public String insertPicture(@RequestParam("file") MultipartFile file,String productId) {
//		System.out.println(file.getOriginalFilename());
		String fileName = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
		String fName = System.currentTimeMillis()+fileName;
//		System.out.println(fName);
		BufferedOutputStream stream=null;
		String filePath =System.getProperty("user.dir")+"\\src\\main\\resources\\static\\img\\product\\";
//		System.out.println(filePath);
		if(!file.isEmpty()){
			try {
				byte[] bytes=file.getBytes();
				String savePath=filePath+fName;
				stream=new BufferedOutputStream(new FileOutputStream(new File(savePath)));
				stream.write(bytes);
				stream.close();
				pictureService.insertPicture(productId, fName);
				return "{\"result\":\"yes\"}";
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();	
			}
		}
		return "{\"result\":\"yes_or_no\"}";
	}
	//limit查询图片
	@RequestMapping("selectProductByPicId")
	public List<Picture> selectProductByPicId(String pictureId,int startP,int endP){
		return pictureService.selectProductByPicId(pictureId, startP, endP);
	}
	
	//查询某个商品的图片数量
	@RequestMapping("selectPicNum")
	public String selectPicNum(String pictureId) {
		int pciNum = pictureService.selectPicNum(pictureId);
		
		return "{\"result\":\""+pciNum+"\"}";
	}
	
	
	
	
}
