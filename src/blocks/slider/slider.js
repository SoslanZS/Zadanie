o2.slider =
{
	slideTo($this)
	{
		let sliderUl = $('._slider-list');
		let sliderLi = sliderUl.find('li');
		let liWidth = sliderLi[0].width; //750px
		let liLenght = sliderLi.length - 1; //6-1=5
		let current = 1;
		let sumWidthLi = liWidth * liLenght; //4500px
		let sliderBtn = $($this).data('dir');

		if(sliderBtn =='next')
		{
			current+=5;
			console.log(current)
		}else
		{
			current--;
		}

	}
}