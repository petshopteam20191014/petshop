$(function(){
	//获取url地址的参数
	var url= window.location.href;
	var indexurl = url.substring(url.lastIndexOf('=') + 1);
//	console.log(decodeURI(indexurl));
	
	$.ajax({
		type:"post",
		url:"selectPartByName",
		data:{"pdname":indexurl},
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
								+		'<li><input class="pdid01" type="hidden" value="'+pdid+'"/><img src="img/product/'+data[x].picture[0].pictureName+'" ></li>'
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
})