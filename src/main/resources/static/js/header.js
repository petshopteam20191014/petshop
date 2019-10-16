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
	$(".mainNav01>ul>li:eq(0)").hover(function(){
		$(".mainNav03:eq(0)").show();
	},function(){
		$(".mainNav03:eq(0)").hide();
	})
	$(".mainNav01>ul>li:eq(1)").hover(function(){
		$(".mainNav03:eq(1)").show();
	},function(){
		$(".mainNav03:eq(1)").hide();
	})
	$(".mainNav01>ul>li:eq(2)").hover(function(){
		$(".mainNav03:eq(2)").show();
	},function(){
		$(".mainNav03:eq(2)").hide();
	})
	$(".mainNav01>ul>li:eq(3)").hover(function(){
		$(".mainNav03:eq(3)").show();
	},function(){
		$(".mainNav03:eq(3)").hide();
	})
	$(".mainNav01>ul>li:eq(4)").hover(function(){
		$(".mainNav03:eq(4)").show();
	},function(){
		$(".mainNav03:eq(4)").hide();
	})
	$(".mainNav01>ul>li:eq(5)").hover(function(){
		$(".mainNav03:eq(5)").show();
	},function(){
		$(".mainNav03:eq(5)").hide();
	})
	$(".mainNav01>ul>li:eq(6)").hover(function(){
		$(".mainNav03:eq(6)").show();
	},function(){
		$(".mainNav03:eq(6)").hide();
	})
	$(".mainNav01>ul>li:eq(7)").hover(function(){
		$(".mainNav03:eq(7)").show();
	},function(){
		$(".mainNav03:eq(7)").hide();
	})
	$(".mainNav01>ul>li:eq(8)").hover(function(){
		$(".mainNav03:eq(8)").show();
	},function(){
		$(".mainNav03:eq(8)").hide();
	})
	
	$(".mainNav02").bind("mouseover",function(){
		console.log(111);
		$(".mainNav01").show();	
	})
	$("#header .mainNav01 li").bind("mouseover",function(){
		$(this).css({"border-color":"chocolate",
					"border-right": "2px solid ghostwhite",
					"border-left": "2px solid coral"});
		
			
	})
	$("#header .mainNav01 li").bind("mouseover",function(){
		console.log(111);
		$(this).children("a").css({"font-size": "14px",
					"color": "coral"});
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