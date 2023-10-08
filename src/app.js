const homeScoreEl = document.querySelector('.score-h');
const guestScoreEl = document.querySelector('.score-g');
const teamAEl = document.querySelector('#teamA');
const teamBEl = document.querySelector('#teamB');

function updateScore(team, points) {
	const scoreEl = team === 'home' ? homeScoreEl : guestScoreEl;
	const currentScore = Number(scoreEl.textContent);
	const newScore = currentScore + points;
	scoreEl.textContent = newScore;
}

function highlightTeam() {
	const homeScore = Number(homeScoreEl.textContent);
	const guestScore = Number(guestScoreEl.textContent);

	if (homeScore && homeScore === guestScore) {
		teamAEl.classList.remove('highlight');
		teamBEl.classList.remove('highlight');
		teamAEl.classList.add('equal');
		teamBEl.classList.add('equal');
	}
	if (homeScore > guestScore) {
		teamBEl.classList.remove('highlight', 'equal');
		teamAEl.classList.remove('equal');
		teamAEl.classList.add('highlight');
	}
	if (homeScore < guestScore) {
		teamAEl.classList.remove('highlight', 'equal');
		teamBEl.classList.remove('equal');
		teamBEl.classList.add('highlight');
	}
}

function resetGame() {
	homeScoreEl.textContent = '0';
	guestScoreEl.textContent = '0';
	teamAEl.classList.remove('equal', 'highlight');
	teamBEl.classList.remove('equal', 'highlight');
}

document.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const action = event.target.dataset.action;

		switch (action) {
			case 'home-addOne':
				updateScore('home', 1);
				break;
			case 'home-addTwo':
				updateScore('home', 2);
				break;
			case 'home-addThree':
				updateScore('home', 3);
				break;
			case 'guest-addOne':
				updateScore('guest', 1);
				break;
			case 'guest-addTwo':
				updateScore('guest', 2);
				break;
			case 'guest-addThree':
				updateScore('guest', 3);
				break;
			case 'new-game':
				resetGame();
				break;
			default:
				break;
		}

		highlightTeam();
	}
});
