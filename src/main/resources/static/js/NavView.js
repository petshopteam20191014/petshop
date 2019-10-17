$(function(){
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
	console.log(picId);
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
			var $proview = $(".productView>div:eq(2)>ul");
			var $rexiao = $(".rexiao")
			for (var x in data){
				$proview.append('<li>'
								+	'<ul>'
								+		'<li><img src="img/product/'+data[x].picture[0].pictureName+'" ></li>'
								+		'<li><a href="#" style="color:#1B1B15">'+data[x].pdname+'</a></li>'
								+		'<li><a href="#" style="color: #666666;">品牌样式:'+data[x].brand.bname+'</a></li>'
								+		'<li>&yen;&nbsp;'+data[x].cost+'</li>'
								+		'<li><a href="#" style="color: white">加入购物车</a></li>'
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
				$rexiao.append('<li>'
							+			'<ul class="rexiao01">'
							+			'<li><img src="img/product/'+data[x].picture[0].pictureName+'" ></li>'
							+			'<li><a href="#" style="color:#1B1B15">'+data[x].pdname+'</a></li>'
							+			'<li>&yen;&nbsp;'+data[x].cost+'</li>'
							+		'</ul>'
							+	'</li>');
			}
			
			
		}
		
	})	
})