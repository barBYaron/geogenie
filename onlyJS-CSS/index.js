const settings = {
	showMenu: false
}

async function renderHeader(root) {
	const header = await fetch('./header.html').then(res => res.text());
	
	if (root) {
		root.innerHTML = header;
	}

	const icon = document.querySelector('#iconMenu2');
	icon.src = settings.showMenu ? './meinDist/mailImage/XMenuMobile.png' : './meinDist/mailImage/menuMobile.png';

}
renderHeader(document.querySelector('#header'));


async function renderMobileMenu(root) {


	const mobileMenu = await fetch('./mobileMenu.html').then(res => res.text());


	if (root) {
		root.innerHTML = mobileMenu;
	}
}
renderMobileMenu(document.querySelector('#menuForMobile'));


async function renderFooter(root) {

	const footer = await fetch('./footer.html').then(res => res.text());

	if (root) {
		root.innerHTML = footer;
	}
}
renderFooter(document.querySelector('#footer'));

function showUl() {
	const ul = document.querySelector('ul');
	const contact = document.querySelector('#contact');

	if (ul) {
		ul.style.opacity = '1';
		ul.style.zIndex = '999';
	}

	if (contact) {
		contact.style.top = '30px';
	}
}

function hideUl() {
	const ul = document.querySelector('ul');

	if (ul) {
		ul.style.opacity = '0';
	}
}

function getPath() {
	const path = window.location.pathname;
	const pathArr = path.split('/');
	const pathName = pathArr[pathArr.length - 1];

	const pageName = pathName.split('.')[0];

	console.log(pageName)

	return pageName;
}
getPath();

function renderCurrentMenu() {
	const pageName = getPath();

	const menu = document.querySelector(`#${pageName}`);

	if (menu) {
		menu.classList.add('current');
	}
}
renderCurrentMenu();

function getElementPositionFromTop(elementId) {
	try {
		const element = document.getElementById(elementId);

		if (!element) throw new Error('element not found');
		let pos = element.offsetTop;

	} catch (error) {
		console.error(error)
	}
}

function hendleScroll(elementId) {
	try {
		const pageName = getPath();
		console.log(pageName)

		if (pageName !== 'hardware') {
			window.location.href = `./hardware.html#${elementId}`;
		}
		else {
			const element = document.getElementById(elementId);

			if (!element) throw new Error('element not found');
			let pos = element.offsetTop;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			})
		}
	} catch (error) {
		console.error(error)
	}
}

function toggleMenu() {
	try {


		const menu = document.querySelector('#menuForMobile');
		const icon = document.querySelector('#iconMenu2');
		if(!menu || !icon) throw new Error('menu or icon not found');

		//hide menu
		if (menu?.classList.contains('display')) {
			console.log('hide menu')
			console.dir(icon)
			console.log(icon.src)
			menu.classList.remove('display');
			menu.classList.add('hide');
			settings.showMenu = false;
			document.body.style.overflow = 'auto';
			icon.src = './meinDist/mailImage/XMenuMobile.png';
		} else {
			//show menu
			console.log('show menu')
			console.dir(icon)
			console.log(icon.src)
			menu?.classList.remove('hide');
			menu?.classList.add('display');
			settings.showMenu = true;
			document.body.style.overflow = 'hidden';
			icon.src = './meinDist/mailImage/XMenuMobile.png';
			// icon.src = './meinDist/mailImage/menuMobile.png';
		}
		renderHeader(document.querySelector('#header'));
	} catch (error) {
		console.error(error)
	}
}

function toggleHardware() {
	try {
		console.log('toggleHardware')
		const hardware = document.querySelector('#hardware');
		if (!hardware) throw new Error('hardware element not found');

		const ul = document.querySelector('#ul-hardware');
		if (!ul) throw new Error('ul element not found');

		if (ul.classList.contains('close')) {
			ul.classList.remove('close');
			ul.classList.add('open');


			ul.style.height = '100px';
			ul.style.transform = 'scale(1,1) translateY(0px)';


		} else {
			ul.classList.remove('open');
			ul.classList.add('close');
			// hardware.classList.remove('open');
			ul.style.height = '0px';
			ul.style.transform = 'scale(1,0) translateY(-100px)';
		}

	} catch (error) {
		console.error(error)
	}
}
