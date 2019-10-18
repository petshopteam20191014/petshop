$(function(){
	//所有宠物种类
	$.ajax({
		type:"post",
		url:"selectAllPets",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
//				console.log(data[d]);
				$("form p:eq(0) select").append("<option value ='"+data[d].pid+"'>"+data[d].pname+"</option>")
			}
		}
		
	})
	
	//所有商品类别
	$.ajax({
		type:"post",
		url:"selectAllItems",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(1) select").append("<option value ='"+data[d].iid+"'>"+data[d].iname+"</option>")
			}
		}
		
	})
	//所有商品类别下的详细分类
	//第一种情况
	//首先宠物分类被选中触发
	$("form p:eq(0) select").bind("change",function(){
		$("form p:eq(1) select").bind("change",function(){
			var pid = $("form p:eq(0) option:selected").val()
			var iid = $("form p:eq(1) option:selected").val();
			$.ajax({
				type:"post",
				url:"selectItemAllDetailedItems",
				data:{"pid":pid,"iid":iid},
				dataType:"json",
				success:function(data){
//					console.log(data);
					$("form p:eq(2) select option:gt(0)").remove();
					for (var d in data) {
//						console.log(data[d]);
						$("form p:eq(2) select").append("<option value ='"+data[d].diid+"'>"+data[d].diname+"</option>")
					}
				}
				
			})
		
		})
		
	})
	//第二种情况
	//宠物类别先被选中
	$("form p:eq(1) select").bind("change",function(){
		$("form p:eq(0) select").bind("change",function(){
			var pid = $("form p:eq(0) option:selected").val()
			var iid = $("form p:eq(1) option:selected").val();
			$.ajax({
				type:"post",
				url:"selectItemAllDetailedItems",
				data:{"pid":pid,"iid":iid},
				dataType:"json",
				success:function(data){
//					console.log(data);
					$("form p:eq(2) select option:gt(0)").remove();
					for (var d in data) {
//						console.log(data[d]);
						$("form p:eq(2) select").append("<option value ='"+data[d].diid+"'>"+data[d].diname+"</option>")
					}
				}
				
			})
		
		})
		
	})
	
	//商品品牌
	$.ajax({
		type:"post",
		url:"selectAllBrand",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(5) select").append("<option value ='"+data[d].bid+"'>"+data[d].bname+"</option>")
			}
		}
		
	})
	
	//商品颜色
	$.ajax({
		type:"post",
		url:"selectAllColor",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(6) select").append("<option value ='"+data[d].cid+"'>"+data[d].cname+"</option>")
			}
		}
		
	})
	
	//商品重量
	$.ajax({
		type:"post",
		url:"selectAllCweight",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(7) select").append("<option value ='"+data[d].cwid+"'>"+data[d].cwname+"</option>")
			}
		}
		
	})
	
	//商品规格
	$.ajax({
		type:"post",
		url:"selectAllSpecification",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(8) select").append("<option value ='"+data[d].sfid	+"'>"+data[d].sfname+"</option>")
			}
		}
		
	})
	
	//商品口味
	$.ajax({
		type:"post",
		url:"selectAllTaste",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(9) select").append("<option value ='"+data[d].tid	+"'>"+data[d].tname+"</option>")
			}
		}
		
	})
	
	//商品尺寸
	$.ajax({
		type:"post",
		url:"selectAllSize",
		data:{},
		dataType:"json",
		success:function(data){
//			console.log(data);
			for (var d in data) {
				$("form p:eq(10) select").append("<option value ='"+data[d].sid	+"'>"+data[d].sname+"</option>")
			}
		}
		
	})
	
	
	//提交保存商品信息
	$("#sub").bind("click",function(){
//		console.log($("form").serialize());
//		$.ajax({
//			type:"post",
//			url:"insertProductdetail",
//			data:$("form").serialize(),
//			datatype:"json",
//			success:function(data){
//				
//			}
//		})
		
		//上传图片
		var formData=new FormData();
		var file=$("#file")[0].files;
		var productId= $("form p:eq(2) option:selected").val()+$("form p:eq(5) option:selected").val();
		for (var x = 0;x < file.length; x ++){
			var formData=new FormData();
			formData.append("file",file[x]);
			formData.append("productId",productId)
			$.ajax({
				type:"post",
				url:"insertPicture",
				cache:false,
				processData: false,
				data:formData,
				datatype:"json",
				contentType:false,
				success:function(data){
					console.log(data);
					
				}
			})
		}
		console.log("商品上传成功");
		return false;
	})
	
})