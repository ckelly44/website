var selector;
var x = 1;
var y = 1;
var inViewCounter = 0;
window.addEventListener('keydown', function(e){
	const key = e.keyCode;
	if(key === 39 && inViewCounter !== 3) {
		document.getElementById("p"+ ++inViewCounter).scrollIntoView({behavior: "smooth"});
	}
	if(key === 37 && inViewCounter !== 0) {
		document.getElementById("p"+ --inViewCounter).scrollIntoView({behavior: "smooth"});
	}
	else
		return;
})
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
	$("#i0").css('visibility', 'visible').hide().fadeIn(2000);
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
	var trigger = y * $("#p0").height() - .75* $(window).height();
	var id = "#i" + x;
	if($(window).scrollTop() >= trigger && x < 4) {
		$(id).css('visibility', 'visible').hide().fadeIn(2000);
		x++;
		y += 1;
		if(x == 4){
		$(this).off('scroll');}
	}
});