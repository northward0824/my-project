/*
* @Author: 张秀荣
* @Date:   2017-10-06 15:19:45
* @Last Modified by:   张秀荣
* @Last Modified time: 2017-10-19 13:01:01
*/
// window.onload=function(){
// 	let bannertu=document.querySelector(".bannertu");
// 	let banertuli=bannertu.querySelectorAll("li");
// 	let btn=document.querySelector(".btn");
// 	let btnli=btn.querySelectorAll("li");
// 		let i=0;
// 	setInterval(function(){
// 		if(i==3){
// 			i=0;
// 		}
// 		banertuli.forEach(function(element){
// 			element.style.display="none";

// 		});
// 		btnli.forEach(function(element){
// 			element.style.background="rgba(0, 0, 0, 0.8)";

// 		});
// 		banertuli[i].style.display="block";
// 		btnli[i].style.background="rgba(255, 255, 255, 0.8)";

// 		i++;
// 	}, 3000)
// }
$(function(){
	let t=setInterval(move, 2000);
	let bannertuli=$(".bannertu>li");
	let btnli=$(".btn>li");
	let imgW=bannertuli[0].offsetWidth;
	let next=now=0;


	let top=$(".c4-top>.imgk")
	function move(){
		next++;
		if(next==3){
			next=0;
		}
		btnli.eq(now).css({background:"rgba(0, 0, 0, 0.8)"})
		btnli.eq(next).css({background:"rgba(255, 255, 255, 0.8)"})
		bannertuli.eq(next).css({left:imgW});
		bannertuli.eq(now).animate({left:-imgW},400);
		bannertuli.eq(next).animate({left:0},400);
		now=next;
	}

	btnli.each(function(index,value){
		$(value).on("click",function(){
			if(index==now){
				return;
			}
			btnli.eq(now).css({background:"rgba(0, 0, 0, 0.8)"})
			btnli.eq(index).css({background:"rgba(255, 255, 255, 0.8)"})
			bannertuli.eq(index).css({left:imgW});
			bannertuli.eq(now).animate({left:-imgW},400);
			bannertuli.eq(index).animate({left:0},400);
			now=index;
		})
	})
	// 
	bannertuli.on("mouseenter",function(){
		console.log(1)
		clearInterval(t);
	})
	bannertuli.on("mouseleave",function(){
		t=setInterval(move, 2000);
	})
	top.on("click",function(){.
		console.log(1)
		$(document.body).animate({scrollTop:0},400)
	})
})
