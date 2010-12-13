( function( $ ) {
	$( function() {
		$( "#compass" ).compass ({
			sector:[0,180], 			 // 表盘象限分布
			range: [0, 100],
			r:100,						//圆半径，指针尖端距离坐标原点的绝对距离  r<=x r<=y
			x:125,						//坐标原点
			y:126,						//坐标原点
			pointerA:[50,0,"#000",true],
			imgA:["pointer",20,-22],
			anticlockwise:false,   		//true 逆时针，false 顺时针
			start:false,				//true 起点在右边，false 起点在左边，象限分布正好相反
			speed:[2,1],	          	//指针速度,最小值1
			interval:10					
		});
	});

	$( function() {
		$( "#i7" ).compass ({
			sector:[0,180], 			 // 表盘象限分布
			range: [0, 100],
			r:100,						//圆半径，指针尖端距离坐标原点的绝对距离  r<=x r<=y
			x:125,						//坐标原点
			y:126,						//坐标原点
			pointerA:[50,0,"#000",true],
			imgA:["pointer",20,-22],
			pointerB:[90,0,"rgba(0,145,255,0.7)",true],
			anticlockwise:false,   		//true 逆时针，false 顺时针
			start:false,				//true 起点在右边，false 起点在左边，象限分布正好相反
			speed:[2,5],	          	//指针速度,最小值1
			interval:10					
		});
	});

	$( function() {
		$( "#i5" ).compass ({
			sector:[0,180], 			 // 表盘象限分布
			range: [0, 100],
			r:100,						//圆半径，指针尖端距离坐标原点的绝对距离  r<=x r<=y
			x:125,						//坐标原点
			y:126,						//坐标原点
			pointerA:[50,0,"rgba(0,145,255,0.7)",true],
			pointerB:[90,0,"#000",true],
			imgB:["pointer",20,-22],
			anticlockwise:false,   		//true 逆时针，false 顺时针
			start:false,				//true 起点在右边，false 起点在左边，象限分布正好相反
			speed:[2,5],	          	//指针速度,最小值1
			interval:10					
		});
	});

})( jQuery );