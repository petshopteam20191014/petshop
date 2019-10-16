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