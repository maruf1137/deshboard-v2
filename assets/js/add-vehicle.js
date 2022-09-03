/**
 * toggle sidebar
 */

const toggleSidebarBtn = document.querySelector('.sidebar-toggle-btn');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close-sidebar');

const btns = [toggleSidebarBtn, overlay, btnClose];
btns.forEach((e) => {
	if (e) {
		e.addEventListener('click', () => {
			// console.log('toggle');
			const body = document.querySelector('body');
			body.classList.toggle('toggle-sidebar');
		});
	} else {
		null;
	}
});

/**
 * end toggle sidebar
 */

// add vehicle image gallery
const vehicleGalleryData = [
	{
		id: 1,
		img: '../../assets/car-image/Images.png',
	},
	{
		id: 2,
		img: '../../assets/car-image/Images-1.png',
	},
	{
		id: 3,
		img: '../../assets/car-image/Images-2.png',
	},
	{
		id: 4,
		img: '../../assets/car-image/Images-3.png',
	},
	{
		id: 5,
		img: '../../assets/car-image/Images-4.png',
	},
	{
		id: 6,
		img: '../../assets/car-image/Images-5.png',
	},
	{
		id: 7,
		img: '../../assets/car-image/Images-6.png',
	},
];
let alldata = vehicleGalleryData;

const vehicleList = document.querySelector('.vehicle-list');
const removeGalleryItem = document.querySelector('.vehicle-gallery .btn-close');
const fileInput = document.querySelector('input[type=file]');
fileInput.addEventListener('change', () => {
	for (var i = 0; i < fileInput.files.length; i++) {
		var reader = new FileReader();
		reader.onload = function (readerEvent) {
			alldata.push({ img: readerEvent.target.result, id: alldata.length + 1 });
			vehicleGalleryRender();
			console.log(vehicleGalleryData, alldata);
		};
		reader.readAsDataURL(fileInput.files[i]);
	}
});

const hideItem = (id) => {
	filteredData = alldata.filter((item) => {
		return item.id !== id;
	});
	alldata = filteredData;
	vehicleGalleryRender(filteredData);
};

function vehicleGalleryRender(data = alldata) {
	const vehicleGalleryMarkup = `
						${data
							.map((item) => {
								const { img, id } = item;
								return `
							<div class="vehicle-gallery-item">
										<button class="btn btn-close" onclick="hideItem(${id})"></button>
										<img src=${img} alt="" />
									</div>
							`;
							})
							.join('')}
						
		`;
	vehicleList.innerHTML = '';
	vehicleList.insertAdjacentHTML('afterbegin', vehicleGalleryMarkup);
}
vehicleGalleryRender();

// index2 car details data end

const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
// let bodyHeight = 0;
const events = ['load', 'resize'];
for (let i = 0; i < events.length; i++) {
	window.addEventListener(events[i], () => {
		sidebar.style.minHeight = `${body.offsetHeight - 20}px`;
	});
}
