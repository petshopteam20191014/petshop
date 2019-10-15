$(function(){
	alert(111);
	
	//登录按钮绑定单击事件
	$("#loginBtn").click(function(){
		var uname=$("#uname").val();
		
		$.ajax({
			type:"post",
			url:"loginUser",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
				console.log(uname);
                alert(data.result);
				window.location.href="home_page.html";
			}
			
		})
	});
	
	
	
	
})