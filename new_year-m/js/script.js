window.onload=function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];

	// 获取三个页面
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");

	//事件监听，音乐停止，小圆盘停止转动
	audio.addEventListener("ended",function(event){
		//music.setAttribute("class","");
		this.style.animationPlayState="paused";
	});

	// 点击音乐暂停播放
	/*	
	music.onclick=function(){
		//判断状态
		if(audio.paused){
			audio.play();
			//this.setAttribute("class","play");
			this.style.animationPlayState="running";
		}else{
			audio.pause();
			//this.setAttribute("class","");
			this.style.animationPlayState="paused";
		}
	};
	*/

	//事件监听，点击音乐播放/停止
	music.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			//this.setAttribute("class","play");
			this.style.animationPlayState="running";
		}else{
			audio.pause();
			//this.setAttribute("class","");
			this.style.animationPlayState="paused";
		}
	});


	//事件监听，翻转页面
	page1.addEventListener("touchstart",function(){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";

		//超时调用，第二层离开
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	});
}