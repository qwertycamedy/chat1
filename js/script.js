jQuery(document).ready(function ($) {
	// открывать/закрывать диалог
	$('.chat__icon').click(function () {
		$('.chat__dialog-body').toggleClass('disable');
		$('.chat__dialogs-body').addClass('disable');

		tl.from('.chat__dialog-header', { duration: .1, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-breadcrumbs', { duration: .1, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-content', { duration: .1, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-bottom', { duration: .1, opacity: 0, y: 10, ease: 'none' });
	});
	$('.chat__icon-admin').click(function () {
		$('.chat__dialog-admin-body').toggleClass('disable');
		$('.chat__dialogs-body').addClass('disable');

		tl.from('.chat__dialog-admin-header', { duration: .2, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-admin-breadcrumbs', { duration: .2, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-admin-content', { duration: .2, opacity: 0, y: 20, ease: 'none' });
		tl.from('.chat__dialog-admin-bottom', { duration: .2, opacity: 0, y: 10, ease: 'none' });
	});
	// скрывать кнопки диалога
	$('.chat__dialog-admin-bottom-button-hide').click(function () {
		$('.chat__dialog-admin-bottom-buttons').addClass('disable');
		$('.chat__dialog-admin-bottom-button-hide').addClass('disable');
		$('.chat__dialog-admin-bottom-button-disHide').removeClass('disable');
	});
	// открывать меню кнопок диалога
	$('.chat__dialog-admin-bottom-button-disHide').click(function () {
		$('.chat__dialog-admin-bottom-buttons').removeClass('disable');
		$('.chat__dialog-admin-bottom-button-hide').removeClass('disable');
		$('.chat__dialog-admin-bottom-button-disHide').addClass('disable');
	});
	// вернуться в меню диалогов
	$('.chat__dialog-hide').click(function () {
		$('.chat__dialog-body').addClass('disable');
	});
	$('.chat__dialog-admin-hide').click(function () {
		$('.chat__dialog-admin-body').addClass('disable');
	});
	$('.chat__dialog-checkAll').click(function () {
		$('.chat__dialogs-body').removeClass('disable');

		tl.from('.chat__dialogs-header', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-content', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-send', { duration: .2, opacity: 0, x: 20, ease: 'none' });
	});
	$('.chat__dialogs-send').click(function () {
		$('.chat__dialogs-body').addClass('disable');
		$('.chat__dialog-body').removeClass('disable');
	});
	$('.chat__toDialogs').click(function () {
		$('.chat__dialogs-body').removeClass('disable');

		tl.from('.chat__dialogs-header', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-breadcrumbs', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-table-wrapper', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-form', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-content', { duration: .2, opacity: 0, x: 20, ease: 'none' });
		tl.from('.chat__dialogs-send', { duration: .2, opacity: 0, x: 20, ease: 'none' });
	});
	$('.chat__dialogs-hide').click(function () {
		$('.chat__dialogs-body').addClass('disable');
		$('.chat__dialog-admin-body').removeClass('disable');
	});
	$('.chat__dialogs-hideTwo').click(function () {
		$('.chat__dialogs-body').addClass('disable');
		$('.chat__dialog-admin-body').addClass('disable');
	})
	$('.chat__dialogs-user').click(function () {
		$('.chat__dialogs-body').addClass('disable');
		$('.chat__dialog-admin-body').removeClass('disable');
	});

	const breadcrumbsOne = document.querySelector('.chat__dialogs-breadcrumbs')

	breadcrumbsOne.addEventListener('click', function (e) {
		const items = document.querySelectorAll('.chat__dialogs-bc-button')
		const target = e.target
		Array.from(items).forEach(item => {
			item.classList.remove('active')
		})
		target.classList.add('active')
	});

	const breadcrumbsTwo = document.querySelector('.chat__dialogs-breadcrumbs-two')

	breadcrumbsTwo.addEventListener('click', function (e) {
		const items = document.querySelectorAll('.chat__dialogs-bc-button-two')
		const target = e.target
		Array.from(items).forEach(item => {
			item.classList.remove('activee')
		})
		target.classList.add('activee')
	});
});
