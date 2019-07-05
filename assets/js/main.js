$(function() {
	$('i[rel="pre"]').replaceWith(function () {
		return $('<pre><code>' + $(this).html() + '</code></pre>');
	});
	var pres = document.querySelectorAll('pre,kbd,blockquote');
	for (var i = 0; i < pres.length; i++) {
		pres[i].addEventListener("dblclick", function () {
			var selection = getSelection();
			var range = document.createRange();
			range.selectNodeContents(this);
			selection.removeAllRanges();
			selection.addRange(range);
		}, false);
	}

	
	$homeL = $('#homeLink');
	$guideL = $('#guideLink');
	$toolsL = $('#toolsLink');
	$otherL = $('#otherLink');
	$chome = $('#content-home');
	$cguide = $('#content-guide');
	$ctools = $('#content-tools');
	$cother = $('#content-other');
	
	$chome.show().siblings().hide();
	$chome.css({
		opacity: '1'
	})
	.siblings()
	.css({
		opacity: '0'
	});


	$homeL.click(function (evt) {
		$homeL.addClass('active')
					.siblings()
					.removeClass('active');
	
		$chome.show()
				.siblings()
				.hide();
		$chome.animate({
			opacity: 1,
		}, "slow").siblings().css({
			opacity: '0'
		});
	});

	$guideL.click(function (evt) {
		$guideL.addClass('active')
			.siblings()
			.removeClass('active');
		
		$cguide.show()
					.siblings()
					.hide();
		$cguide.animate({
			opacity: 1,
		}, "slow").siblings().css({opacity:'0'})

	});
	
	$toolsL.click(function (evt) {
		$toolsL.addClass('active')
					.siblings()
					.removeClass('active');

		$ctools.show()
					.siblings()
					.hide();
		$ctools.animate({
			opacity: 1,
		}, "slow").siblings().css({
			opacity: '0'
		})

	});

	$otherL.click(function (evt) {
		$otherL.addClass('active')
					.siblings()
					.removeClass('active');

		$cother.show()
					.siblings()
					.hide();
		$cother.animate({
			opacity: 1,
		}, "slow").siblings().css({
			opacity: '0'
		})


	});



});

