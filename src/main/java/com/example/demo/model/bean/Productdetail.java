package com.example.demo.model.bean;

import java.sql.Date;

public class Productdetail {
	private String pdid;
	private String diid;
	private	String pdname;
	private Double cost;
	private String brand;
	private int color;
	private int cweight;
	private int specification;
	private int taste;
	private int size;
	private int stocks;
	private Date shlelftime;
	public String getPdid() {
		return pdid;
	}
	public void setPdid(String pdid) {
		this.pdid = pdid;
	}
	public String getDiid() {
		return diid;
	}
	public void setDiid(String diid) {
		this.diid = diid;
	}
	public String getPdname() {
		return pdname;
	}
	public void setPdname(String pdname) {
		this.pdname = pdname;
	}
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getColor() {
		return color;
	}
	public void setColor(int color) {
		this.color = color;
	}
	public int getCweight() {
		return cweight;
	}
	public void setCweight(int cweight) {
		this.cweight = cweight;
	}
	public int getSpecification() {
		return specification;
	}
	public void setSpecification(int specification) {
		this.specification = specification;
	}
	public int getTaste() {
		return taste;
	}
	public void setTaste(int taste) {
		this.taste = taste;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public int getStocks() {
		return stocks;
	}
	public void setStocks(int stocks) {
		this.stocks = stocks;
	}
	public Date getShlelftime() {
		return shlelftime;
	}
	public void setShlelftime(Date shlelftime) {
		this.shlelftime = shlelftime;
	}
	
}
