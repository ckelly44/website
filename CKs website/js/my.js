/*


	On load handling


*/

//on load make first row visible
$(document).ready(function(){
	var j = document.querySelector('.is-hidden');
	j.classList.remove('is-hidden');
	j.ontransitionend = () => {
		if(event.propertyName === 'transform'){
			j = document.querySelector('.is-hidden');
			j.classList.remove('is-hidden');
		};
	};
})

/*


	'Learn more' preview handling


*/

var selector = null; //last selected 'learn more' preview element

//show 'learn more' elements on click
function show(intValue) {
	var id = "test" + intValue;
	selector = document.getElementById(id);
	selector.style.display = "block";
}
//exit 'learn more' elements on click
function exitDiv() {
	selector.style.display = "none";
}
//close 'learn more' element if user clicks outside of the element
document.addEventListener('mouseup', function(e) {
	if(selector === null) return;
	if(selector.style.display === "block" && !selector.contains(e.target))
		selector.style.display = "none";
})

/*

	
	Scroll handling


*/

var x = 1; //counter for element scroll animations

//make elements visible when scrolled to
$(window).scroll(function() {
	var trigger = x * $("#p0").height() - .75* $(window).height();
	var id = "#i" + x;
	if($(window).scrollTop() >= trigger && x < 4) {
		var j = document.querySelector('.is-hidden');
		j.classList.remove('is-hidden');
		j = document.querySelector('.is-hidden');
		j.classList.remove('is-hidden');
		//$(id).css('visibility', 'visible').hide().fadeIn(2000);
		x++;
		if(x == 4){
		$(this).off('scroll');}
	}
})

var inViewCounter = 0; //element that is currently in view of window

//left and right arrows will bring into view previous and next elements
window.addEventListener('keydown', function(e){
	if(e.keyCode === 39 && inViewCounter !== 3) {
		document.getElementById("p"+ ++inViewCounter).scrollIntoView({behavior: "smooth"});
	}
	if(e.keyCode === 37 && inViewCounter !== 0) {
		document.getElementById("p"+ --inViewCounter).scrollIntoView({behavior: "smooth"});
	}
})