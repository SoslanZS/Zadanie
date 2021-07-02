o2.slider =
{
	sliderUl : $('._slider-list'),
	sliderImg : [],
	imgWidth : 0,
	imgLenght : 0,
	sliderDots : [],
	dots : '',
	dotsActive : '',
	dotsWidth: 0,
	index : 0,
	locUl : 0,
	locDots : 0,
	init()
	{
		this.sliderImg = this.sliderUl.find('img');
		this.imgWidth = this.sliderImg[0].width;
		this.imgLenght = this.sliderImg.length;
		this.sliderDots = this.addElement('._slider__dots', '<div class="slider__dots-line _slider__dots-line" onclick="o2.slider.dotsClick(this)">', this.imgLenght);
		this.dots = $(this.checkChildren(this.sliderDots,'div')[0]).append('<div class="slider__dots-active _slider__dots-active">');
		this.dotsActive = $('._slider__dots-active');
		this.dotsWidth =this.dotsActive.width() + 5;
		this.dotsShow(this.dots);
	},
	sliderRight(value)
	{
		this.index++;
		this.locUl += this.imgWidth;
		this.locDots += this.dotsWidth;
		if(this.index === this.imgLenght)
		{
			this.index = 0;
			this.locUl = 0;
			this.locDots = 0;
		}
		this.sliderMovement();
	},
	sliderLeft(value)
	{
		this.index--;
		this.locUl -= this.imgWidth;
		this.locDots -= this.dotsWidth;
		if(this.index < 0)
		{
			this.index = this.imgLenght - 1;
			this.locUl = this.imgWidth * (this.imgLenght - 1);
			this.locDots = this.dotsWidth * (this.imgLenght - 1);
		}

		this.sliderMovement()
	},

	dotsShow(dots)
	{
		$(dots).hover(function(){
			dots = $(value).data('num');
			console.log(dots);
		})
	},


	dotsClick(value)
	{
		let imgWidthDots = this.sliderImg[0].width,
		dotsWidthDots = this.dotsActive.width() + 5,
		dots = $(value).data('num');
		this.index = dots;
		this.locUl = imgWidthDots * dots;
		this.locDots = this.dotsWidth * dots;

		this.sliderMovement()
	},
	sliderMovement()
	{
		this.sliderUl.animate({
			'margin-left':`-${this.locUl}px`
		}, 500)
		this.dotsActive.animate({
			'margin-left':`${this.locDots}px`
		}, 500)
	},
	addElement(parent,clas,length)
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
	},
	checkChildren(parent, children)
	{
		return $(parent).find(children);
	}
}