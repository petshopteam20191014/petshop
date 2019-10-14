$(function(){
	$.ajax({
		type:"post",
		url:"index",
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data);
			
		}
		
	})	
})