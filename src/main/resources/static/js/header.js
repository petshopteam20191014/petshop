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
		 location.href="shopCar.html"
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