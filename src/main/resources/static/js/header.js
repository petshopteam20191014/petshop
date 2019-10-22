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
	//鼠标触碰展开详细的内容
	for (var n = 0;n < 9; n ++) {
		$(".mainNav01>ul>li:eq("+n+")").bind("mouseover",{id:n},function(event){
			$(".mainNav03:eq("+event.data.id+")").show();
			$(".mainNav02").bind("mouseover",{id:event.data.id},function(event){
				$(".mainNav03").hide();
				$(".mainNav03:eq("+event.data.id+")").show();
			}).bind("mouseout",{id:n},function(event){
				$(".mainNav03").hide();
			})
		}).bind("mouseout",{id:n},function(event){
			$(".mainNav03:eq("+event.data.id+")").hide();
		})
	}
	
	//当鼠标触碰左侧导航栏是的动作
	 $("#header .mainNav01 li").bind("mouseover",function(){
		 $(this).addClass("mainNavCss");
		 
		//当触碰详细栏时，左侧栏不消失，切出现的切口不消失；
	 		$(".mainNav02").bind("mouseover",{id:this},function(event){
	 			$(".mainNav01").show();	
	 			$("#header .mainNav01 li").removeClass("mainNavCss");
	 			 $(event.data.id).addClass("mainNavCss");
	 		}).bind("mouseout",{id:this},function(event){
	 			$(".mainNav01").hide();	
	 			 $(event.data.id).removeClass("mainNavCss");
	 		});
	 }).bind("mouseout",function(){
		 $(this).removeClass("mainNavCss");
	 })
	 
	 //点击搜索摁妞
	 $(".searchByn").bind("click",function(){
		 var txt = $(".searchTxt").val();
		 location.href="searchView.html?txt="+txt;
	 })

	 
	 //点击购物车进入购物车界面
	 $(".goToShopCar").bind("click",function(){
//		 console.log(111);
		$.ajax({
			type:"post",
			url:"sessionUser",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data.result);
				if (data.result == 0){
					alert("请先登录在选购商品！！")
					location.href="login.html"
				}else{
					console.log("yes");
					location.href="shopCar.html"
				}
				
			}
		
		})		 
	 })
	  //页面初始化用户中心 用户名字显示或则  请登录显示
	 $.ajax({
			type:"post",
			url:"sessionUser",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data.uid);
				if (data.uid == 0){
//					console.log(111);
					$(".loginuser01").children().remove();
					$(".loginuser01").append("<a href='login.html'>您好！！请登录</a>")
				}else{
					$(".loginuser01").children().remove();
					$(".loginuser01").append("<a>你好！"+data.uname+"！！</a><a id='logoutuser1'>用户注销</a><span>&gt;</span>")
					//查询该用户下购物车商品的数量
					 $.ajax({
						type:"post",
						url:"shopCarNum",
						data:{"userid":data.uid},
						dataType:"json",
						success:function(data){
//							console.log(data);
							$(".shopCarCount").text(data.result).css("color","coral");
						}
					 })
				}
				
			}
		
		})	
		
		$(document).on("click","#logoutuser1",function(){
			$(".loginuser01").children().remove();
			$(".loginuser01").append("<a href='login.html'>您好！！请登录</a>")
			$.ajax({
				type:"post",
				url:"logoutUser",
				data:{},
				dataType:"json",
				success:function(data){
					console.log(data);
					
				}
				
			})	
		})
//	$.ajax({
//		type:"post",
//		url:"index",
//		data:{},
//		dataType:"json",
//		success:function(data){
//			console.log(data);
//			
//		}
//		
//	})	
})