

$('.roll_centa').eq(0).width($('.roll_centa').eq(0).width()-31);
$('#roll img').each(function(){
	$(this).height($('.nov1').eq(0).height()-24);    
		if ($(this).height()<200) {
			$(this).height(200);
		};
	$(this).width($('.roll_centa').eq(0).width());
})
$('.roll_centa').eq(0).height($('#roll img').eq(0).height());

//无缝轮播
var width = $('#roll img').eq(0).width();
var height =$('#roll img').eq(0).height();

var buttons = $('#buttons span');
var index =1;
let time;
let animated = false;
//移动偏移量
function animate(offset){
	let newleft = parseInt($('#roll').css('left')) + offset ;
	let time =300;//总的位移时间
	let interval =10;//位移间隔时间
	let  speed = offset/(time/interval);//每次位移量
	animated = true;
	function go(){

		let  nowLeft = parseInt($('#roll').css('left'));//现在的位置
		if((speed > 0 && nowLeft < newleft)|| (speed < 0 && nowLeft > newleft)){
			$('#roll').css({'left':nowLeft+speed +'px'});
			setTimeout(go,interval);
		}else{
			$('#roll').css({'left':newleft+'px'}) ;

			if(newleft > - (width / 2)){ 
				$('#roll').css({'left':-(3*width)+'px'}) ; 
			}
			if(newleft < (-3*width)){ 
				$('#roll').css({'left':-width +'px'}) ; 
			}
		}
		animated =false;
	}

	go();

}

//自动切换,定时
function play(){
	time = setInterval(() => {
		$('#next').click();
	},3000);
}
function stop(){
	clearInterval(time);
}

//原点颜色
function showbotton(index){
	buttons.siblings().removeClass('on');
	buttons.eq(index-1).addClass('on') ;
}

//圆点击事件
buttons.each((inde,item) =>{
	$(item).click( () =>{
		if(item.className == 'on'){
			return;
		}

		buttons.siblings().removeClass('on');
		$(item).addClass('on');

		let sum = $(item).attr('index');
	 	//移动距离
	 	let offset= -(width*(sum -index)) ;
	
	 	animate(offset);
	 	index  = sum;

	});
})

//鼠标以上事件
$('.roll_centa').mouseover(()=> stop());
$('.roll_centa').mouseout (() => play() );
play();

$('#next').click(() =>{
	 if (animated) {
        return;
    }
	if(index == 3){
		index =1;
	}else{
		index +=1;
	}
	animate(-width);
	showbotton(index);
});
$('#prew').click(() =>{
	if ( animated) {
        return;
    }
	if (index ==1) {
		index =3;
	}else{
		index -=1;
	};
	animate(width);
	showbotton(index);
});
