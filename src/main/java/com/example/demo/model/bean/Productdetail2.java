package com.example.demo.model.bean;

import java.sql.Date;
import java.util.List;

public class Productdetail2 {
	private String pdid;
	private String diid;
	private	String pdname;
	private Double cost;
	private Brand brand;
	private Color color;
	private Cweight cweight;
	private Specification specification;
	private Taste taste;
	private Size size;
	private int stocks;
	private Date shlelftime;
	private List<Picture> picture;
	public List<Picture> getPicture() {
		return picture;
	}
	public void setPicture(List<Picture> picture) {
		this.picture = picture;
	}
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
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public Color getColor() {
		return color;
	}
	public void setColor(Color color) {
		this.color = color;
	}
	public Cweight getCweight() {
		return cweight;
	}
	public void setCweight(Cweight cweight) {
		this.cweight = cweight;
	}
	public Specification getSpecification() {
		return specification;
	}
	public void setSpecification(Specification specification) {
		this.specification = specification;
	}
	public Taste getTaste() {
		return taste;
	}
	public void setTaste(Taste taste) {
		this.taste = taste;
	}
	public Size getSize() {
		return size;
	}
	public void setSize(Size size) {
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
