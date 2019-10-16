$(function(){
	console.log(111);
	
	//登录按钮绑定单击事件
	$("#loginBtn").click(function(){
		console.log(111222222);
		var $uname=$("#uname").val();
		var $password=$("#password").val();
		$.ajax({
			type:"post",
			url:"loginUser",
			data:{"uname":$uname,"password":$password},
			dataType:"json",
			success:function(data){
				console.log(111222);
				console.log(uname);
				window.location.href="home_page.html";
			}	
		})
		
	});
	
	
	
	
})