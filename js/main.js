$('.test-slide').owlCarousel({
    center: true,
    items:2,
	loop:true,
    margin:10,
	autoplay:true,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:2
        },
		1000:{
			items:3
		}
    }
});

$('.gallery-slide').owlCarousel({
    center: true,
    items:2,
	loop:true,
    margin:20,
	autoplay:true,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:2
        },
		1000:{
			items:5
		}
    }
});