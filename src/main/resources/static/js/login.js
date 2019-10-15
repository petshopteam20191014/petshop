$(function(){
	alert(111);
	
	//登录按钮绑定单击事件
	$("#loginBtn").click(function(){
		var uname=$("#uname").val();
		var password=$("#password").val();
		$.ajax({
			type:"post",
			url:"loginUser",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
				
                alert(data.result);
				window.location.href="home_page.html";
			}
			
			
		})
	});
	
	
	
	
})