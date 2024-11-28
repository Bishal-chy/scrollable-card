/*const cards = document.querySelectorAll('.card');

function checkCenter() {
    const windowHeight = window.innerHeight;
    const centerY = windowHeight / 2;

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;

        
        if (Math.abs(cardCenterY - centerY) < rect.height / 2) {
            card.classList.add('in-center');
        } else {
            card.classList.remove('in-center');
        }
    });
}


window.addEventListener('scroll', checkCenter);


checkCenter();*/




/*
const wrapper = document.querySelector('.wrapper');
const cards = document.querySelectorAll('.card');

function checkCenter() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperCenterY = wrapperRect.height / 2; 

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2 - wrapperRect.top;

        // Check if the card's center is near the wrapper's center
        if (Math.abs(cardCenterY - wrapperCenterY) < rect.height / 2) {
            card.classList.add('in-center');
        } else {
            card.classList.remove('in-center');
        }
    });
}

// Add a scroll listener to the wrapper
wrapper.addEventListener('scroll', checkCenter);

// Run the function on page load to initialize styles
checkCenter();

*/





const wrapper = document.querySelector('.wrapper');
const outer = document.querySelector('.outer');
const cards = [...document.querySelectorAll('.card')];

function cloneCards() {
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    outer.appendChild(clone); 
  });
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    outer.prepend(clone); 
  });
}

function checkCenter() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const wrapperCenterY = wrapperRect.height / 2;

  const allCards = document.querySelectorAll('.card');
  allCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenterY = rect.top + rect.height / 2 - wrapperRect.top;

    if (Math.abs(cardCenterY - wrapperCenterY) < rect.height / 2) {
      card.classList.add('in-center');
    } else {
      card.classList.remove('in-center');
    }
  });
}

function handleScroll() {
  const cardHeight = cards[0].offsetHeight + 20; 
  const scrollHeight = wrapper.scrollHeight;
  const scrollTop = wrapper.scrollTop;
  if (scrollTop >= scrollHeight - wrapper.offsetHeight) {
    wrapper.scrollTop = cardHeight * cards.length; 
  }
  checkCenter();
}
wrapper.addEventListener('scroll', handleScroll);
function initScroll() {
  const cardHeight = cards[0].offsetHeight + 20; 
  wrapper.scrollTop = cardHeight * cards.length;
  checkCenter();
}
cloneCards();
initScroll();
