let sliderUl = $('._slider-list'),
	sliderImg = sliderUl.find('img'),
	imgWidth = sliderImg[0].width,
	imgLenght = sliderImg.length,
	sliderDots = addElement('._slider__dots', '<div class="slider__dots-line _slider__dots-line" onclick="dotsClick(this)">', imgLenght),
	dots = $(checkChildren(sliderDots,'div')[0]).append('<div class="slider__dots-active _slider__dots-active">'),
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

	sliderMovement()
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

	sliderMovement()
}

function dotsClick(value)
{
	let imgWidthDots = sliderImg[0].width,
	dotsWidthDots = dotsActive.width() + 5,
	dots = $(value).data('num');
	index = dots;
	console.log(dots);
	locUl = imgWidthDots * dots;
	locDots = dotsWidth * dots;

	sliderMovement()
}

function sliderMovement()
{
	sliderUl.animate({
		'margin-left':`-${locUl}px`
	}, 500)
	dotsActive.animate({
		'margin-left':`${locDots}px`
	}, 500)
}

function addElement(parent,clas,length)
{
	let element = $(parent);
	for(let i = 0; i < length; i++)
	{
		element.append(clas);
	}

	let data = element.children();
	for(let i = 0; i < length; i++)
	{
		$(data[i]).attr('data-num', `${i}`);
	}
	return element;
}

function checkChildren(parent, children)
{
	return $(parent).find(children);
}