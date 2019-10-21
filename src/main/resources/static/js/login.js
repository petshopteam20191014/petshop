$(function(){
	console.log(111);
	
	//登录按钮绑定单击事件
	$("#loginBtn").click(function(){

		console.log(111222222);
		var $uname=$("#uname").val();
		var $password=$("#password").val();

		var uname=$("#uname").val();
		var password=$("#password").val();

		$.ajax({
			type:"post",
			url:"loginUser",
			data:{"uname":$uname,"password":$password},
			dataType:"json",
			success:function(data){

//				console.log(111222);
//				console.log(uname);
	
                
                
                if (data.result==0){
                	alert("登录成功");
                	window.location.href="NavView.html?0100";
                }else{
                	alert(data.result);
                }
			
			}	
		})
		
	});
	
	
	
	
})