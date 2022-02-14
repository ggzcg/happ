$(function(){
	$(window).resize(init);
	function init() {
		// $('.box').width($('.wrap').width() - 10);
		// $('.box').height($('.wrap').height() - 10);
		$('.wrap').width($(window).width());	
		$('.wrap').height($(window).height());	
		$('.wrap-bother').width($(window).width());	
		$('.wrap-bother').height($(window).height());
	}
	init();
	var isMobile = false;
	function browserRedirect() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
			isMobile = true
		} else {
			isMobile = false
		}
	}
	browserRedirect(); 

	function Bounce(con, box) {
		var _this = this;
		this.box = box;
		this.con = con;
		this.maxNum = 4;
		this.R = Math.floor(Math.random() * 100 + 140);
		this.G = Math.floor(Math.random() * 100 + 150);
		this.B = Math.floor(Math.random() * 100 + 150);
		this.size = isMobile?Math.floor(Math.random() * 50 + 80):Math.floor(Math.random() * 50 + 200);
		this.box.style.width = this.size + 'px';
		this.box.style.height = this.size + 'px';
		this.box.style.fontSize = _this.size / 4 + 'px';
		this.box.style.lineHeight = _this.size + 'px';
		this.box.style.color = 'rgb(' + _this.R + ',' + _this.G + ',' + _this.B + ')';
		this.run = Math.floor(Math.random() * this.con.clientWidth - this.size);
		this.run2 = Math.floor(Math.random() * this.con.clientHeight - this.size);
		this.box.style.left = this.run + 'px';
		this.box.style.bottom = this.run2 + 'px';
		this.box.style.background = 'rgba(' + this.R + ',' + this.G + ',' + this.B + ',' + 0.6 + ')';
		this.step = Math.floor(Math.random() * this.maxNum) - this.maxNum;
		this.step2 = Math.floor(Math.random() * this.maxNum) - this.maxNum;
		this.timer = setInterval(function(){
			_this.move();
		}, 20);
		this.box.onmouseover = function() {
			if(_this.timer) {
				_this.stop();				
			}
			_this.box.style.zIndex = '100';
		}
		this.box.onmouseout = function() {
			if(this.timer) {
				this.stop();				
			}
			_this.box.style.zIndex = '0';
			_this.timer = setInterval(function(){
				_this.move();
			}, 20);
		}
	}
	Bounce.prototype.stop = function() {
		clearInterval(this.timer);	
	}
	Bounce.prototype.move = function() {
		this.run += this.step;
		this.run2 += this.step2;
		if (this.step > 0) {
			if (this.box.offsetLeft >= this.con.clientWidth - this.box.offsetWidth) {
				this.run = this.con.clientWidth - this.box.offsetWidth;
				this.step *= -1;
			}
		} else {
			if (this.box.offsetLeft <= 0) {
				this.run = 0;
				this.step *= -1;
			}
		}
		if (this.step2 > 0) {
			if (this.box.offsetTop >= this.con.clientHeight - this.box.offsetHeight) {
				this.run2 = this.con.clientHeight - this.box.offsetHeight;
				this.step2 *= -1;
			}
		} else {
			if (this.box.offsetTop <= 0) {
				this.run2 = 0;
				this.step2 *= -1;
			}
		}
		this.box.style.left = this.run + 'px';
		this.box.style.top = this.run2 + 'px';
	}
	for(var i = 0; i < 4; i++) {
		$('.box').append('<a href="javascript:void(0);"><span>再找找</span><span></span></a>');
	}
	var box = document.getElementById('box');
	var cons = box.getElementsByTagName('a');
	for (var i = 0; i < cons.length; i++) {
		new Bounce(box, cons[i]);
	}
	var m = 1;
	var n = 1;
	// var k = n;
	$('#music-change').on('click',function(e) {
		m++;
		if(m>3) {
			m = 1;
		}
		$('#audio').attr({src:'../mp3/' + m + '.mp3'});
		n = Math.floor(Math.random() * 3 + 1);
		math();
		// k = n;
		$('.wrap-bother').eq(n).stop(true).fadeIn(1000).siblings('.wrap-bother').stop(true).fadeOut(1000);
	})
	function math() {
		var len = 0;
		var num = n;
		while(len < 1) {
			n = Math.floor(Math.random() * 5 + 1);
			if(num != n) {
				len++;
			}
		return n;
		}
	}
	$(window).on('selectstart', function() {return false});
	
})