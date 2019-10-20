$(function(){
	//设置假数据userid=1
	var userid = 1;
	$.ajax({
		type:"post",
		url:"shopCarAllPro",
		data:{"userid":userid},
		dataType:"json",
		success:function(data){
			console.log(data);	
			var allcost = 0;
			for (var x = 0; x < data.length; x ++){
				$(".shopCar>table").append('<tr>'
						+						'<td><input type="checkbox" class="checkCar"/></td>'
						+						'<td><div><img src="img/product/'+data[x].productdetail.picture[0].pictureName+'"/></div></td>'
						+						'<td>'+data[x].productdetail.pdname+'</td>'
						+						'<td class="cost">'+data[x].productdetail.cost+'</td>'
						+						'<td><img class="imgleft" src="img/dey_03.gif"/><input type="text" value="1"/><img class="imgright" src="img/dey_04.gif" ></td>'
						+						'<td>'+data[x].productdetail.cost+'</td>'
						+						'<td>'
						+							'<a>收藏</a>'
						+							'<a>删除</a>'
						+						'</td>'
						+					'</tr>');
				allcost = allcost + data[x].productdetail.cost;
			}
//			console.log(allcost);
			//商品总金额
			$(".shopCar01").children("p").eq(3).text("商品总金额："+allcost);
			
		}
		
	})	
	
	//当点击数量+或-的时候；小计的数额也相应的变化
//	var $td4 = $(".shopCar>table>tr").children("td").eq(4)
//	$(document).on("click",".shopCar>table td:eq(4) img:eq(0)",function(){
////		$(".shopCar>table>tr").children("td").eq(4).children("img").eq(0)
//		console.log(1111);
//		//有待深入研究+++++++++++++++++++++++++++++++=
//	})
	
	$(document).on("click",".imgleft",function(){
		var cost = $(this).parent().prev().text();
		var allcost= $(".shopCar02>p").children("span").eq(1).text();
//		console.log(cost);
		if ($(this).next().val() != 1){
			var num = parseFloat($(this).next().val()) - 1
			$(this).next().val(num);
			$(this).parent().next().text(num * parseFloat(cost));
			if ( $(this).parent().prev().prev().prev().prev().children("input").is(":checked")){
				allcost = parseFloat(allcost) - parseFloat(cost);
				$(".shopCar02>p").children("span").eq(1).text(allcost);
			}
			
			
		}
	})
//	console.log(111);
	$(document).on("click",".imgright",function(){
		var allcost= $(".shopCar02>p").children("span").eq(1).text();
		var cost = $(this).parent().prev().text();
		var num = parseFloat($(this).prev().val()) + 1
		$(this).prev().val(num);
		$(this).parent().next().text(num * parseFloat(cost));
		if ( $(this).parent().prev().prev().prev().prev().children("input").is(":checked")){
			allcost = parseFloat(allcost) + parseFloat(cost);
			$(".shopCar02>p").children("span").eq(1).text(allcost);
		}
		
	})
	
	//当商品被勾选后，结算摁妞上面的数值相应发生变化
	$(document).on("click",".checkCar",function(){
		var num = $(".shopCar02>p").children("span").eq(0).text();
		var allcost= $(".shopCar02>p").children("span").eq(1).text();
		var cost = $(this).parent().next().next().next().next().next().text();
//		console.log(cost);
		if (this.checked){
			num = parseInt(num)+1;
			allcost = parseFloat(allcost) + parseFloat(cost);
			$(".shopCar02>p").children("span").eq(0).text(num);
			$(".shopCar02>p").children("span").eq(1).text(allcost);
//			console.log(num);
		}else{
			num = parseInt(num)-1;
			allcost = parseFloat(allcost) - parseFloat(cost);
			$(".shopCar02>p").children("span").eq(0).text(num);
			$(".shopCar02>p").children("span").eq(1).text(allcost);
//			console.log(222);
			//全选摁妞被取消
			$(".checkAll01")[0].checked = false;
			$(".checkAll")[0].checked = false;
		}
	})
	//全选摁妞
	$(document).on("click",".checkAll",function(){
		if (this.checked){
			var allcost = 0;
			var num = 0;
			$(this).parent().parent().parent().children("tr:gt(0)").find(".checkCar").each(function(){
				$(this)[0].checked = true;
				allcost = allcost + parseFloat($(this).parent().next().next().next().next().next().text());
				num = num + 1;
			})
			$(".checkAll01")[0].checked = true;
			$(".shopCar02>p").children("span").eq(0).text(num);
			$(".shopCar02>p").children("span").eq(1).text(allcost);
		}else {
			var allcost = $(".shopCar02>p").children("span").eq(1).text();
			var num = $(".shopCar02>p").children("span").eq(0).text();
			$(this).parent().parent().parent().children("tr:gt(0)").find(".checkCar").each(function(){
				$(this)[0].checked = false;
				allcost = parseFloat(allcost) - parseFloat($(this).parent().next().next().next().next().next().text());
				num = parseInt(num) - 1;
			})
			$(".checkAll01")[0].checked = false;
			$(".shopCar02>p").children("span").eq(0).text(num);
			$(".shopCar02>p").children("span").eq(1).text(allcost);
		}
	})
	

	
})