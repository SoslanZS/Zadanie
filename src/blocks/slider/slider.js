o2.slider =
{
	sliderUl : $('._slider-list'),
	sliderImg : [],
	imgLenght : 0,
	sliderDots : [],
	sliderDotsLine : [],
	dots : [],
	dotsBefore : [],
	dotsActive : '',
	dotsWidth: 0,
	index : 0,
	locUl : 0,
	locDots : 0,
	init()
	{
		this.sliderImg = this.sliderUl.find('img');
		this.imgLenght = this.sliderImg.length;
		this.sliderDots = this.addElement('._slider__dots', '<div class="slider__dots-line _slider__dots-line" onclick="o2.slider.dotsClick(this)"></div>', this.imgLenght);
		this.sliderDotsLine = $('._slider__dots').find('._slider__dots-line');
		this.dots = $(this.addChildrenElement(this.sliderDots,'div')[0]).append('<div class="slider__dots-active _slider__dots-active">');
		this.dotsActive = $('._slider__dots-active');
		this.dotsWidth =this.dotsActive.width() + 5;
		this.dotsHover = $('._slider__dots-line');

		this.showPrebiewImg();
	},

	sliderToRight(value)
	{
		let imgWidth = this.sliderImg[0].width;
		this.index++;
		this.locUl = imgWidth * this.index;
		this.locDots += this.dotsWidth;
		if(this.index === this.imgLenght)
		{
			this.index = 0;
			this.locUl = 0;
			this.locDots = 0;
		}
		this.sliderMovement();
	},
	sliderToLeft(value)
	{
		let imgWidth = this.sliderImg[0].width;
		this.index--;
		this.locUl = imgWidth * this.index;
		this.locDots -= this.dotsWidth;
		if(this.index < 0)
		{
			this.index = this.imgLenght - 1;
			this.locUl = imgWidth * (this.imgLenght - 1);
			this.locDots = this.dotsWidth * (this.imgLenght - 1);
		}

		this.sliderMovement()
	},
	dotsClick(value)
	{
		let imgWidthDots = this.sliderImg[0].width,
			dotsWidthDots = this.dotsActive.width() + 5,
			dots = $(value).data('num');
		this.index = dots;
		this.locUl = imgWidthDots * dots;
		this.locDots = this.dotsWidth * dots;

		this.sliderMovement();
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
	showPrebiewImg()
	{
		let sliderDots = $('._slider__dots'),
			sliderDotsLine = this.sliderDotsLine,
			sliderImg = this.sliderImg.clone(),
			data;
		sliderDots.on('mouseover', '._slider__dots-line', function(e) {
	    	data = ($(e.target).data('num'));
	    	$(sliderDotsLine[data]).append('<div class="slider__dots-preview _slider__dots-preview">');
	    	$('._slider__dots-preview').append(sliderImg[data]);

	    	$('._slider__dots-preview').animate({
	    		'border-radius' : '0',
	    		'width' : '90px',
				'height' : '60px'
	    	}, 80)
		});

		sliderDots.on('mouseout', '._slider__dots-line', function(e) {
			$('._slider__dots-preview').remove();
		});
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
	addChildrenElement(parent, children)
	{
		return $(parent).find(children);
	}
}