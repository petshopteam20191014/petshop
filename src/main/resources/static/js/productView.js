$(function(){
	//获取url地址的参数
	var url= window.location.href;
	var indexurl = url.substring(url.lastIndexOf('?') + 1);
//	console.log(index);
	
	//假设一个测试值
	var index = indexurl.substring(0,5);
	//重量
	var cw =  indexurl.substring(6,7);
//	console.log(index);
//	console.log(2);
	//左侧显示图片的缩略图

	//查询该商品下的所有图片
	$.ajax({
		type:"post",
		url:"selectProductByPdid",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);
			$(".leftView>div:eq(1)").append('<img src="img/product/'+data[0].picture[0].pictureName+'" jqimg="img/product/'+data[0].picture[0].pictureName+'">');	
			//左侧缩略图
			for (var n = 0; n < 4; n ++){
//				console.log(n);
				if (data[0].picture[n] != null)
				$(".leftView01>div:eq(1) li:eq("+n+")").append('<img src="img/product/'+data[0].picture[n].pictureName+'" jqimg="img/product/'+data[0].picture[n].pictureName+'">');
			}
			//初始化该页面的商品信息
			$(".rightView li:eq(0)").text(data[0].pdname);
			$(".rightView li:eq(1) span").text(data[0].cost);
			
			//搜索数据库该商品所有的关于颜色，规格，尺寸，口味的信息
			//颜色
//			//判断该商品是否包含商品属性
//			if (data[0].color.cid != 1){
//				var dataColor = data;
//				for (var x = 0; x < dataColor.length; x ++) {
//					if (data[x] != null){
//						var flag = false;
//						for (var y = 0; y < dataColor.length; y ++){
//							if (dataColor[y] != null && x != y && dataColor[x].color.cid == dataColor[y].color.cid){
//								delete dataColor[y];
//							}
//						}
//					}
//					
//				};
////				console.log(dataColor);
//			}
			
		}
	})
	//获取该商品的图片个数,同时计算出页数
	var picNum = new $.Deferred();
	$.ajax({
		type:"post",
		url:"selectPicNum",
		data:{"pictureId":index},
		dataType:"json",
		success:function(data){
//			console.log(Math.ceil(data.result/4));
//			var num = Math.ceil(data.result/4);	
			count=data.result;
			picNum.resolve(count);
		}

	})
	//左侧缩略图上下选择，实现动态
	var startP = 0;
	var endP = 4 ;
	var $upPic = $(".leftView01>div:eq(0)");
	var $downPic = $(".leftView01>div:eq(2)");
	//获取图片并且添加的函数
	function addPic(){
		$.ajax({
			type:"post",
			url:"selectProductByPicId",
			data:{"pictureId":index,"startP":startP,"endP":endP},
			dataType:"json",
			success:function(data){
//				console.log(data);
				//删除之前创建的img
				$(".leftView01>div:eq(1) li img").remove();
				for (var n = 0; n < 4; n ++){
//					console.log(n);
					if(data[n] != null){
						$(".leftView01>div:eq(1) li:eq("+n+")").append('<img src="img/product/'+data[n].pictureName+'" jqimg="img/product/'+data[n].pictureName+'">');
					}
					
				}
			}
	
		})
	}
	//下一页
	picNum.then(function(count){
		$downPic.bind("click",function(){
			if (startP < count-4){
				startP ++;
				endP ++;
				addPic();
			}
			
		})
		
	})
	//上一页
	$upPic.bind("click",function(){
		if (startP != 0){
			startP --;
			endP --;
			addPic();
		}
		
	})
	
	$(".leftView01>div:eq(1) li").bind("click",function(){
//		console.log($(this).children());
		$(".leftView>div:eq(1) img").remove();
		$(this).children().clone().appendTo(".leftView>div:eq(1) ");
//		$(".leftView>div:eq(1) ").append($(this).children());
	})
	

	//当点击尺寸等时，随时显示库存数量
	function OnePicStocks(){
		var colorId = $(".rightView>ul>li:eq(2) ul").children(".selected").find("input").val();
		var sizeId = $(".rightView>ul>li:eq(3) ul").children(".selected").find("input").val();
		var tasteId = $(".rightView>ul>li:eq(4) ul").children(".selected").find("input").val();
		var sfId = $(".rightView>ul>li:eq(5) ul").children(".selected").find("input").val();
//				console.log(colorId);
//				console.log(sizeId);
//				console.log(tasteId);
//				console.log(sfId);
		var pdid = index + colorId + cw + sfId + tasteId + sizeId;
		console.log(pdid);
		//根据pdid查询库存数量 更新该型号库存
		$.ajax({
			type:"post",
			url:"selectOnePicStocks",
			data:{"pdid":pdid},
			dataType:"json",
			success:function(data){
//				console.log(data.stocks);
				$(".rightView>ul:eq(1)>li:eq(2)").html("<p>该型号库存:</p><p class='stocks01'>"+data.stocks+"</p>");
				$(".rightView>ul:eq(1)>li:eq(2)").find("p").css({"float":"left","margin-left":"0px","padding-left":"0px"});
//				$(".rightView>ul:eq(1)>li:eq(2)").find("div").css("width","115px");
				//对数量上下线进行控制
				$(".rightView>ul:eq(1)>li:eq(0) input").attr({"min":"1","max":data.stocks});
			}
			
		})
	}
	
	
	//对于颜色、口味、尺寸、规格进行点击选择
	function selectedPci(){
		$(".rightView>ul>li:gt(1)").find("li").bind("click",function(){
//			console.log(1111);
			$(this).addClass("selected");
			$(this).siblings().removeClass("selected");	
			//当点击尺寸等时，随时显示库存数量
			OnePicStocks();
		})
	}
	
	
	
	//搜索数据库该商品所有的关于颜色，规格，尺寸，口味的信息
	//颜色
	$.ajax({
		type:"post",
		url:"selectPicColor",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);
			if (data[0].color.cid != 1){
				for (var x = 0; x < data.length; x ++){
					$(".rightView>ul>li:eq(2) ul").append("<li><input type='hidden' value="+data[x].color.cid+">"+data[x].color.cname+"</li>")
				}
				selectedPci();
				//页面初始化，默认都选择第一个
				$(".rightView>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}else{
				$(".rightView>ul>li:eq(2) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
				$(".rightView>ul>li:eq(2)").hide();
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}
		}

	})
	//尺寸
	$.ajax({
		type:"post",
		url:"selectPicSize",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);
			if (data[0].size.sid != 1){
				for (var x = 0; x < data.length; x ++){
					$(".rightView>ul>li:eq(3) ul").append("<li><input type='hidden' value="+data[x].size.sid+">"+data[x].size.sname+"</li>")
				}
				selectedPci();
				//页面初始化，默认都选择第一个
				$(".rightView>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}else{
				$(".rightView>ul>li:eq(3) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
				$(".rightView>ul>li:eq(3)").hide();
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}
		}

	})
	
	//规格
	$.ajax({
		type:"post",
		url:"selectPicSF",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);	
			if (data[0].specification.sfid != 1){
				for (var x = 0; x < data.length; x ++){
					$(".rightView>ul>li:eq(5) ul").append("<li><input type='hidden' value="+data[x].specification.sfid+">"+data[x].specification.sfname+"</li>")
				}
				selectedPci();
				//页面初始化，默认都选择第一个
				$(".rightView>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}else{
				$(".rightView>ul>li:eq(5) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
				$(".rightView>ul>li:eq(5)").hide();
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}
		}

	})
	
	//kouwei
	$.ajax({
		type:"post",
		url:"selectPicTaste",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);	
			if (data[0].taste.tid != 1){
				for (var x = 0; x < data.length; x ++){
					$(".rightView>ul>li:eq(4) ul").append("<li><input type='hidden' value="+data[x].taste.tid+">"+data[x].taste.tname+"</li>")
				}
				selectedPci();
				//页面初始化，默认都选择第一个
				$(".rightView>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}else{
				$(".rightView>ul>li:eq(4) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
				$(".rightView>ul>li:eq(4)").hide();
				//当点击尺寸等时，随时显示库存数量
				OnePicStocks();
			}
		}

	})
	
	//对数量上下线进行控制
//	$(".rightView>ul:eq(1)>li:eq(0) input").attr({"min":"1","max":"3"});
	
	
	//查询某个商品的全部库存数量
	$.ajax({
		type:"post",
		url:"selectPicStocks",
		data:{"pdid":index},
		dataType:"json",
		success:function(data){
//			console.log(data);	
			$(".rightView>ul:eq(1)>li:eq(1)").html("<span>全部库存:</span><span>"+data+"</span>");
		}
		
	})
	
	//点击购物车
	$(document).on("click","#pvBtn",function(){
		var num = $(".rightView>ul:eq(1)>li:eq(0) input").val();
		var num1 = $(".stocks01").text();
		console.log(num1);
		//验证用户是否登录
		$.ajax({
			type:"post",
			url:"sessionUser",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data.uid);
				if (data.uid == 0){
					alert("请先登录在选购商品！！")
					location.href="login.html"
				}else{
					console.log("yes");
					heng(data.uid);
				}
			}
		
		})	
		function heng(userid){
//		var userid = 1;
			if (num > num1){
				alert("输入的商品数量超过改型号商品的库存最大值");
			}else{
				//提交数据到购物车表格
				var colorId = $(".rightView>ul>li:eq(2) ul").children(".selected").find("input").val();
				var sizeId = $(".rightView>ul>li:eq(3) ul").children(".selected").find("input").val();
				var tasteId = $(".rightView>ul>li:eq(4) ul").children(".selected").find("input").val();
				var sfId = $(".rightView>ul>li:eq(5) ul").children(".selected").find("input").val();
				var scid = index + colorId + cw + sfId + tasteId + sizeId;
				console.log(scid);
				$.ajax({
					type:"post",
					url:"insertShopCar",
					data:{"userid":userid,"scid":scid,"snum":num},
					dataType:"json",
					success:function(data){
						console.log(data);
						alert("商品加入成功");
						
					}
					
				})
			}
		}
	})
	
	
	//当所有商品分类被点击时，，图片的z-index为﹣
	$(".conWidth01").hover(function(){
		$(".jqzoom").css("z-index","-1");
		$("div[class=rightView]>ul>li li").css("z-index","-1");
		$("div[class=rightView]>ul:eq(1)>li:eq(0)").find("input").css("z-index","-1");
//		div[class=rightView]>ul:nth-of-type(2)>li:nth-of-type(1)
	},function(){
		$(".jqzoom").css("z-index","1");
		$("div[class=rightView]>ul>li li").css("z-index","1");
		$("div[class=rightView]>ul:eq(1)>li:eq(0)").find("input").css("z-index","1");
	})
	
	

	

	

	
	
	
	
	
	
//	$.ajax({
//		type:"post",
//		url:"selectProductByPdid",
//		data:{"pdid":"2107A","startP":0,"endP":4},
//		dataType:"json",
//		success:function(data){
//			console.log(data);
//		}
//	
//	})
	
	
	
	
	
	
	
	
	
	
	

	
});
	
	
