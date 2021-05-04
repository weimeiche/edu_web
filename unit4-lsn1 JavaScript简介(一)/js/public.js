
		function changeImage(){
			var element = document.getElementById("myimage");  // 阿斯顿发送到
			console.log(element);
			if(element.src.match("bulbon")){
				element.src = "img/pic_bulboff.gif";
			}else{
				element.src = "img/pic_bulbon.gif";
			}
		}