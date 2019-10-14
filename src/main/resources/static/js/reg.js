$(function(){
	//注册按钮绑定单击事件，添加用户数据
	$("regBtn").click(function(){
		$.ajax({
			type:"post",
			url:"insertUser",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
//				console.log(data);

				
			}
			
		})
		
	});
	
	
	
	
	
})