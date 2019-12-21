var selector;
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
$(document).mouseup(function(e) 
{
    var container = $(selector);

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});