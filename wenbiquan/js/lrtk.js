// JavaScript Document
var j = jQuery.noConflict();
var liw = 0;
j(window).load(function(){
    liw = 0;
    j('.piclist li').each(function(){
        liw += j(this).width()+15;
        j(this).css('width',j(this).width()+'px;! important ');
    })
    j('.piclist').width( liw + 'px');
});

j(document).ready(function(){
	j('.pic_next').click(function(){
		
		if(j('.piclist').is(':animated')){
			j('.piclist').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt(j('.piclist').css('left'));
		r = liw - (590 - ml);  /* 590为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<590){
			s = r - 15;
		}else{
			s = 590;
		}
		j('.piclist').animate({left: ml - s + 'px'},'slow');
	})
	
	j('.pic_prev').click(function(){
		
		if(j('.piclist').is(':animated')){
			j('.piclist').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt(j('.piclist').css('left'));
		if(ml>-590){
			s = ml;
		}else{
			s = -590;
		}
		j('.piclist').animate({left: ml - s + 'px'},'slow');
	})
	
})
//info pic

