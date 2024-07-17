const reviewsNumber = document.querySelector('#reviews');


let numVisits = Number(window.localStorage.getItem("numReviews")) || 0;

reviewsNumber.textContent = numVisits;

numVisits ++;
localStorage.setItem('numReviews', numVisits);
