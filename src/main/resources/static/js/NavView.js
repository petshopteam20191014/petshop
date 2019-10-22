$(function(){
	//点击购物车时，出现选择属性的小窗口
	$("#minwindow").hide();
	//获取url地址的参数
	var url= window.location.href;
	var index = url.substring(url.lastIndexOf('?') + 1);
//	console.log(index);
	//点击左侧导航栏分类，展示详细分类
	for (var x = 0; x < 19 ;x ++){
		$(".leftNav>ul>li:eq("+x+")").bind("click",function(){
			var $left = $(this).next();
			if($left.is(":visible")){
				$left.hide();
			}else {
				$left.show();
			}
		})
		x ++ ;
	}
	
	//获取页面跳转的是那种分类，然后加载对应的图片
	
	var picId = index.substring(1,2);
//	console.log(picId);
	if (picId==2){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554373195017694390.jpg)")
		.next().css("background-image","url(img/1554373248885044037.jpg)");
	}
	if (picId==3){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554372344206463971.jpg)")
		.next().css("background-image","url(img/1554372375678296926.jpg)");
	}
	if (picId==4){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554885963230503966.jpg)")
		.next().css("background-image","url(img/1554886003995979614.jpg)");
	}
	if (picId==5){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554881395528235136.jpg)")
		.next().css("background-image","url(img/1554881446495228344.jpg)");
	}
	if (picId==6){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554373409730452364.jpg)")
		.next().css("background-image","url(img/1554373462522590467.jpg)");
	}
	if (picId==7){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554953866464499118.jpg)")
		.next().css("background-image","url(img/1555653767092865223.jpg)");
	}
	if (picId==8){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554953710764695632.jpg)")
		.next().css("background-image","url(img/1554953626322657299.jpg)");
	}
	if (picId==9){
		$("#content .backImg div:eq(0)").css("background-image","url(img/1554969804598231111.jpg)")
		.next().css("background-image","url(img/1554969749280286685.jpg)");
	}
	
	//图片自动切换；
	function pictureAuto(){
		var $pic = $(".backImg>div:eq(0)");
		if($pic.is(":visible")){
			$pic.hide();
			$pic.next().show();
		}else {
			$pic.show();
			$pic.next().hide();
		}
	}
	setInterval(pictureAuto,2000);
	
	

	$.ajax({
		type:"post",
		url:"selectPartProduct",
		data:{"id":index},
		dataType:"json",
		success:function(data){
//			console.log(data);
			var $proview = $(".productView>div:eq(2)>ul");
			var $rexiao = $(".rexiao")
			for (var x in data){
				var pdid =data[x].pdid;
//				console.log($pdid);
				$proview.append('<li>'
								+	'<ul>'
								+		'<li><input class="pdid01" type="hidden" value="'+pdid+'"/><a href="productView.html?'+pdid+'"><img src="img/product/'+data[x].picture[0].pictureName+'" ></a></li>'
								+		'<li><a href="productView.html?'+pdid+'" style="color:#1B1B15">'+data[x].pdname+'</a></li>'
								+		'<li  class="brand01"><a  href="productView.html?'+pdid+'" style="color: #666666;">品牌样式:<span>'+data[x].brand.bname+'</span></a></li>'
								+		'<li>&yen;&nbsp;'+data[x].cost+'</li>'
								+		'<li class="shopcar"><a  style="color: white">加入购物车</a></li>'
								+	'</ul>'
								+'</li>')
//				console.log(data[x]);
			}
			
			
		}
		
	})	
	
	
	$.ajax({
		type:"post",
		url:"selectAllProduct",
		data:{"id":"0000"},
		dataType:"json",
		success:function(data){
			var $rexiao = $(".rexiao")
			for (var x = 0; x < 4; x ++){
				var pdid =data[x].pdid;
				$rexiao.append('<li>'
							+			'<ul class="rexiao01">'
							+			'<li><a href="productView.html?'+pdid+'"><img src="img/product/'+data[x].picture[0].pictureName+'" ></a></li>'
							+			'<li><a href="productView.html?'+pdid+'" style="color:#1B1B15">'+data[x].pdname+'</a></li>'
							+			'<li>&yen;&nbsp;'+data[x].cost+'</li>'
							+		'</ul>'
							+	'</li>');
			}
			
			
		}
		
	})	
	
	

	
	

	$(document).on("click",".shopcar",function(){
		//当点击购物时，显示小窗口
		$("#minwindow").show();
//		console.log(111);
		var index01 = $(this).parent().find(".pdid01").val();
		index01 = index01.substring(0,5);
//		console.log(index01);
		//当点击尺寸等时，随时显示库存数量
		function OnePicStocks(){
			var colorId = $("#minwindow>ul>li:eq(2) ul").children(".selected").find("input").val();
			var sizeId = $("#minwindow>ul>li:eq(3) ul").children(".selected").find("input").val();
			var tasteId = $("#minwindow>ul>li:eq(4) ul").children(".selected").find("input").val();
			var sfId = $("#minwindow>ul>li:eq(5) ul").children(".selected").find("input").val();
			var pdid = index01 + colorId + 2 + sfId + tasteId + sizeId;
//					console.log(pdid);
			//根据pdid查询库存数量 更新该型号库存
			$.ajax({
				type:"post",
				url:"selectOnePicStocks",
				data:{"pdid":pdid},
				dataType:"json",
				success:function(data){
//					console.log(data.stocks);	
					$("#minwindow>ul:eq(1)>li:eq(2)").html("<p>该型号库存:</p><p class='stocks01'>"+data.stocks+"</p>");
					$("#minwindow>ul:eq(1)>li:eq(2)").find("p").css({"float":"left","margin-left":"0px","padding-left":"0px"});
//					$(".rightView>ul:eq(1)>li:eq(2)").find("div").css("width","115px");
					//对数量上下线进行控制
					$("#minwindow>ul:eq(1)>li:eq(0) input").attr({"min":"1","max":data.stocks});
				}
				
			})
		}
		//对于颜色、口味、尺寸、规格进行点击选择
		function selectedPci(){
			$("#minwindow>ul>li:gt(1)").find("li").bind("click",function(){
//				console.log(1111);
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
			data:{"pdid":index01},
			dataType:"json",
			success:function(data){
//				console.log(data);
				if (data[0].color.cid != 1){
					$("#minwindow>ul>li:eq(2) ul").children("li").remove();
					for (var x = 0; x < data.length; x ++){
						$("#minwindow>ul>li:eq(2) ul").append("<li><input type='hidden' value="+data[x].color.cid+">"+data[x].color.cname+"</li>")
					}
					selectedPci();
					//页面初始化，默认都选择第一个
					$("#minwindow>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}else{
					$("#minwindow>ul>li:eq(2) ul").children("li").remove();
					$("#minwindow>ul>li:eq(2) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
					$("#minwindow>ul>li:eq(2)").hide();
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}
			}

		})
		//尺寸
		$.ajax({
			type:"post",
			url:"selectPicSize",
			data:{"pdid":index01},
			dataType:"json",
			success:function(data){
//				console.log(data);
				if (data[0].size.sid != 1){
					$("#minwindow>ul>li:eq(3) ul").children("li").remove();
					for (var x = 0; x < data.length; x ++){
						$("#minwindow>ul>li:eq(3) ul").append("<li><input type='hidden' value="+data[x].size.sid+">"+data[x].size.sname+"</li>")
					}
					selectedPci();
					//页面初始化，默认都选择第一个
					$("#minwindow>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}else{
					$("#minwindow>ul>li:eq(3) ul").children("li").remove();
					$("#minwindow>ul>li:eq(3) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
					$("#minwindow>ul>li:eq(3)").hide();
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}
			}
	
		})
		
		//规格
		$.ajax({
			type:"post",
			url:"selectPicSF",
			data:{"pdid":index01},
			dataType:"json",
			success:function(data){
//				console.log(data);	
				if (data[0].specification.sfid != 1){
					$("#minwindow>ul>li:eq(5) ul").children("li").remove();
					for (var x = 0; x < data.length; x ++){
						$("#minwindow>ul>li:eq(5) ul").append("<li><input type='hidden' value="+data[x].specification.sfid+">"+data[x].specification.sfname+"</li>")
					}
					selectedPci();
					//页面初始化，默认都选择第一个
					$("#minwindow>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}else{
					$("#minwindow>ul>li:eq(5) ul").children("li").remove();
					$("#minwindow>ul>li:eq(5) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
					$("#minwindow>ul>li:eq(5)").hide();
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}
			}
	
		})
		
		//kouwei
		$.ajax({
			type:"post",
			url:"selectPicTaste",
			data:{"pdid":index01},
			dataType:"json",
			success:function(data){
//				console.log(data);	
				if (data[0].taste.tid != 1){
					$("#minwindow>ul>li:eq(4) ul").children("li").remove();
					for (var x = 0; x < data.length; x ++){
						$("#minwindow>ul>li:eq(4) ul").append("<li><input type='hidden' value="+data[x].taste.tid+">"+data[x].taste.tname+"</li>")
					}
					selectedPci();
					//页面初始化，默认都选择第一个
					$("#minwindow>ul>li:gt(1)").find("li:eq(0)").addClass("selected");
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}else{
					$("#minwindow>ul>li:eq(4) ul").children("li").remove();
					$("#minwindow>ul>li:eq(4) ul").append("<li class='selected'><input type='hidden' value='1'></li>")
					$("#minwindow>ul>li:eq(4)").hide();
					//当点击尺寸等时，随时显示库存数量
					OnePicStocks();
				}
			}
	
		})
		
		//查询某个商品的全部库存数量
		$.ajax({
			type:"post",
			url:"selectPicStocks",
			data:{"pdid":index01},
			dataType:"json",
			success:function(data){
		//			console.log(data);	
				$("#minwindow>ul:eq(1)>li:eq(1)").html("<span>全部库存:</span><span>"+data+"</span>");
			}
			
		})
		
		//点击购物车
		$(document).on("click","#pvBtn",function(){
			var num = $("#minwindow>ul:eq(1)>li:eq(0) input").val();
			var num1 = $(".stocks01").text();
//			console.log(num1);
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
//			var userid = 1;
			function heng(userid){
				if (num > num1){
					alert("输入的商品数量超过改型号商品的库存最大值");
				}else{
					//提交数据到购物车表格
					var colorId = $("#minwindow>ul>li:eq(2) ul").children(".selected").find("input").val();
					var sizeId = $("#minwindow>ul>li:eq(3) ul").children(".selected").find("input").val();
					var tasteId = $("#minwindow>ul>li:eq(4) ul").children(".selected").find("input").val();
					var sfId = $("#minwindow>ul>li:eq(5) ul").children(".selected").find("input").val();
					var scid = index01 + colorId + 2 + sfId + tasteId + sizeId;
					console.log(scid);
					$.ajax({
						type:"post",
						url:"insertShopCar",
						data:{"userid":userid,"scid":scid,"snum":num},
						dataType:"json",
						success:function(data){
							console.log(data);
							
						}
						
					})
					
					alert("加入购物车成功");
					$("#minwindow").hide();
				}
			}
		})
		
		
	})
	
	//当点击小窗口外的界面的时候，小窗口隐藏
	$("#header").bind("click",function(){
		$("#minwindow").hide();
	})
	$("#content").bind("click",function(){
		$("#minwindow").hide();
	})
	$("#footer").bind("click",function(){
		$("#minwindow").hide();
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})