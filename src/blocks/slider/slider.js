let sliderUl = $('._slider-list'),
	sliderImg = sliderUl.find('img'),
	imgWidth = sliderImg[0].width,
	imgLenght = sliderImg.length,
	sliderDots = addElement('._slider__dots', "<div class='slider__dots-line'>", imgLenght),
	dots = $(checkChildren(sliderDots,'div')[0]).append("<div class='slider__dots-line slider__dots-active _slider__dots-active'>"),
	dotsActive = $('._slider__dots-active'),
	dotsWidth = dotsActive.width() + 5,
	index = 0,
	locUl = 0,
	locDots = 0;

function sliderRight(value)
{
	index++;
	locUl += imgWidth;
	locDots += dotsWidth;
	if(index === imgLenght)
	{
		index = 0;
		locUl = 0;
		locDots = 0;
	}
	sliderUl.animate({
		'margin-left':`-${locUl}px`
	}, 500)
	dotsActive.animate({
		'margin-left':`${locDots}px`
	}, 500)
}

function sliderLeft(value)
{
	index--;
	locUl -= imgWidth;
	locDots -= dotsWidth;
	if(index < 0)
	{
		index = imgLenght - 1;
		locUl = imgWidth * (imgLenght - 1);
		locDots = dotsWidth * (imgLenght - 1);
	}

	sliderUl.animate({
		'margin-left':`-${locUl}px`
	},500)
	dotsActive.animate({
		'margin-left':`${locDots}px`
	},500)
}

function addElement(parent,clas,length)
{
	let element = $(parent);

	for(let i = 0; i < length; i++)
	{
		element.append(clas);
	}

	return element;
}

function checkChildren(parent, children)
{
	return $(parent).find(children);
}