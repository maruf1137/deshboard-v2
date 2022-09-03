setTimeout(() => {
	fetchData();
}, 2000);

function fetchData() {
	const allloading = document.querySelectorAll('.loading');
	const cardTitle = document.querySelector('.card-title');
	const filterEl = document.querySelectorAll('.filter');
	const AuctionsP = document.querySelector('.AuctionsP');
	const DateSectionAuctionP = document.querySelector('.DateSection .AuctionsP');
	const BarGraphAuctionP = document.querySelector('.BarGraph .AuctionsP');

	allloading.forEach((e) => e.classList.remove('loading'));

	cardTitle.innerHTML = 'Your listing views';
	AuctionsP.innerHTML = 'Auctions performance';
	DateSectionAuctionP.innerHTML = 'Upcoming auctions';
	BarGraphAuctionP.innerHTML = 'sales';
	filterEl.forEach((e) => {
		e.insertAdjacentHTML(
			'afterbegin',
			`
	<img src="assets/img/3.png" alt="" /> <span>Last 7 days</span>
	`
		);
	});
}

// fetchData();
