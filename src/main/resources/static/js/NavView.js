$(function(){
	//当鼠标触碰所有商品分类的时候，详细分类出现，移开是，消失
	$(".mainNav li:eq(0)").hover(function(){
		$(".mainNav01").show();
	},function(){
		$(".mainNav01").hide();
	})
	$(".mainNav01").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
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
	
	//图片自动切换；
	function pictureAuto(){
		var $x = $(".backImg>div:eq(0)");
		if($x.is(":visible")){
			$x.hide();
			$x.next().show();
		}else {
			$x.show();
			$x.next().hide();
		}
	}
	setInterval(pictureAuto,1000);
	
	
	var url= window.location.href;
	var index = url.substring(url.lastIndexOf('?') + 1);
//	console.log(index);
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