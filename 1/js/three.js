/*
* @Author: 张秀荣
* @Date:   2017-10-17 10:08:43
* @Last Modified by:   张秀荣
* @Last Modified time: 2017-10-17 14:18:20
*/
window.onload=function(){
	let img=$("li>img");

	img.on("click",function(){
		$($(this).siblings('.item')).addClass('none');
	})
}

// let li=$("li");
// console.log(img);