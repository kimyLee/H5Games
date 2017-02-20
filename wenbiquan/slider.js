// /*!

//  * duowan_slider

//  * from: 游戏特权~~ 

//  */

// function duowan_slider (options) {

// 	return new duowan_slider.prototype.init(options)

// }

// var $i = $("#J_slider li");



// var duowan_slider.prototype = {

// 	view : 'ul',

// 	content : 'li',



// 	switchItem : '',	// 导航

// 	selectItemCss : '',    // 导航高亮



// 	prev : '',

// 	next : '',



// 	itemSelectEvent : 'mouseover',    // 触发切换

// 	hoverTime : 0,    // itemSelectEvent为 mouseover 时候的延时确认触发时间，以防误操作

// 	timeOut : 500,    // 切换动画持续时间

// 	timeSpacing : 3000,    // (自动)切换时间间隔



// 	autoRun : false,    // 自动切换

// 	index : 0,    // 默认显示第一张



// 	changeCssName : 'left',    // 通过什么属性实现,可选项：left、marginLeft

// 	offset : 1,    // 每次切换多少张



// 	callback: function (i) {},    // 每次切换成功后的调用，实参为 index



// 	init : function(cfg){

// 		$.extend(this,cfg);



// 		this.view = $(this.view);

// 		this.switchItem = $(this.switchItem);

// 		this.prev = $(this.prev);

// 		this.next = $(this.next);

// 		this.content = this.view.find(this.content);

// 		this.contentWidth  = this.content.outerWidth(true);

// 		this.length = this.content.length;



// 		var that = this;

// 		var itemRun = function(i){

// 			that.view.stop(true, true);

// 			that.direct(i,0);

// 		}



// 		this.switchItem.each(function(i){



// 			if(that.itemSelectEvent == 'mouseover' && that.hoverTime){

// 				var _hoverId = 0;

// 				$(this).hover(function(){

// 					_hoverId = setTimeout(function(){itemRun(i)},that.hoverTime);

// 				},function(){

// 					clearTimeout(_hoverId);

// 				})

// 			} else {



// 				$(this)[that.itemSelectEvent](function(){itemRun(i)});



// 			}



// 		})

// 		.click(function(){

// 			return false;

// 		});



// 		this.prev.click(function(){

// 			that.direct(that.index,-1);

// 			return false;

// 		});



// 		this.next.click(function(){

// 			that.direct(that.index,1);

// 			return false;

// 		});



// 		if(that.autoRun){



// 			this.view.hover(function(){

// 				that.view.stop(true, true);

// 				clearTimeout(that._timeId);

// 			},function(){

// 				that._timeId = setTimeout(function(){that.direct(that.index,1);},that.timeSpacing);

// 			});



// 		}



// 		this.direct(0,0);

// 	},

// 	direct : function(){

// 		clearTimeout(this._timeId);

// 		this.sentinel.apply(this,arguments);



// 		var that = this;

// 		var i = this.index;



// 		if(this.autoRun){

// 			this._timeId = setTimeout(function(){that.direct(i,1);},this.timeSpacing);

// 		}

// 	},

// 	sentinel : function(i,offset){

// 		var animateObj = {};

// 		var that = this;

// 		var adv = false;



// 		i= i + offset * this.offset;

// 		if(i >= this.length) i=0;

// 		if(i <= -1) i=this.length-this.offset;

// 		if( i < this.index ) adv = true;

// 		this.index = i;



// 		var selV = that.content.filter(':eq('+i+')');



// 		that.switchItem.removeClass(that.selectItemCss);

// 		that.switchItem.eq(i).addClass(that.selectItemCss);



// 		$i.removeClass('active');



// 		if(selV.index() == 0) {

// 			that.callback(that.index);

// 			return

// 		}



// 		if(adv){



// 			that.view.css(that.changeCssName,- this.contentWidth);

// 			selV.prependTo(that.view);



// 			animateObj[this.changeCssName] = 0;

// 			this.view.animate(animateObj,this.timeOut, function(){

// 				that.callback(that.index);

// 			});



// 		} else {



// 			animateObj[this.changeCssName] = -this.contentWidth;



// 			this.view.children(":eq(0)").after(selV);



// 			this.view.animate(animateObj,this.timeOut,function(){

// 				selV.prependTo(that.view)

// 				that.view.css(that.changeCssName,0);

// 				that.callback(that.index);

// 			});

// 		}

// 	}

// };



// duowan_slider.prototype.init.prototype = duowan_slider.prototype;



$(function() {



	var winW = window.innerWidth;

	$("#J_slider").width(winW * 5);

	$("#J_slider li").width(winW);
	$(".piclist li").width(190);

	var $li = $("#J_slider li");
	var i = 0;

	$(".next").on('click', function() {

		i = i == 4 ? 0 : i + 1;

		slider();

	});

	$(".prev").on('click', function() {

		i = i === 0 ? 4 : i - 1;

		slider();

	});



	$("#nav a").on('click', function() {

		i = parseInt($(this).attr('class').replace('nav', ''));

		slider();

	});

	$("#logo").on('click',function() {

		i = 0;

		slider();

	});



	function slider() {

		$("#J_slider").animate({

			'scrollLeft': winW * i

		}, 500, function() {



			$("#nav a").removeClass('hover');

			$("#nav .nav" + i).addClass('hover');



			$li.removeClass('active');

			$li.eq(i).addClass('active');

		})

	}



	var v1 = 1;

	$("#v1").on('click',function() {

		v1 ? $("#vv1")[0].play() : $('#vv1')[0].pause();

		v1 = !v1;

	});



	var book_i = 0;

	var books = $("#books .book");

	var book_len = books.length;

	$("#b_prev").on('click',function() {

		book_i = book_i-1<0 ? book_len-1 : book_i-1;

		bookFade();

	});



	$('#b_next').on('click',function() {

		book_i = book_i+1==book_len ?0 : book_i+1;

		bookFade();

	});



	function bookFade () {

		books.hide().eq(book_i).fadeIn();

	}



});