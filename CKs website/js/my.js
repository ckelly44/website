var selector;
var x = 1;
var y = 1;
function enterScript() {
	var f = document.getElementById("fname").value;
	$("#enter").fadeOut(1000,function(){$("#visitor").text(", " + f).hide().fadeIn(3000);});
	var t = document.getElementById("namesubmit");
	t.reset();
	t.parentNode.removeChild(t);	
}
function show(intValue) {
	var id = "test" + intValue;
	var x = document.getElementById(id);
	x.style.display = "block";
	selector = x;
}
function exitDiv() {
	$(selector).hide();
}
$(document).ready(function(){
	$("#iw").css('visibility', 'visible').hide().fadeIn(2000);
});
$(document).mouseup(function(e) 
{
    var container = $(selector);
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});
$(window).scroll(function() {
	var trigger = y * $("#welcome").height() - .75* $(window).height();
	var id = "#i" + x;
	if($(window).scrollTop() >= trigger && x < 4) {
		$(id).css('visibility', 'visible').hide().fadeIn(2000);
		x++;
		y += 1;
		if(x == 4){
		$(this).off('scroll');}
	}
});