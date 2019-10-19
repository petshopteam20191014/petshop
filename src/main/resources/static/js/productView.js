$(function(){
	//获取url地址的参数
	var url= window.location.href;
	var indexurl = url.substring(url.lastIndexOf('?') + 1);
//	console.log(index);
	
	//假设一个测试值
	var index = indexurl.substring(0,5);
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
				$(".leftView01>div:eq(1) li:eq("+n+")").append('<img src="img/product/'+data[0].picture[n].pictureName+'" jqimg="img/product/'+data[0].picture[n].pictureName+'">');
			}
			//初始化该页面的商品信息
			$(".rightView li:eq(0)").text(data[0].pdname);
			$(".rightView li:eq(1) span").text(data[0].cost);
			
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
	
	
