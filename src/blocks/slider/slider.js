let sliderUl = $('._slider-list'),
	sliderImg = sliderUl.find('img'),
	imgWidth = sliderImg[0].width,
	imgLenght = sliderImg.length , //6
	index = 0,
	loc = 0;
	locL = 0;
function sliderRight(value)
{
	index++;
	loc += imgWidth ;
	if(index === imgLenght)
	{
		index = 0;
		loc = 0;
	}
	sliderUl.animate({
		'margin-left':`-${loc}px`
	}, 500)
}

function sliderLeft(value)
{
	index--;
	loc -= imgWidth;
	if(index < 0)
	{
		index = imgLenght - 1;
		loc = imgWidth * (imgLenght - 1);
	}

	sliderUl.animate({
		'margin-left':`-${loc}px`
	},500)
}