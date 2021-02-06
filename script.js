function main() {
  const introImg = document.getElementById('intro-image');
  const introTitle1 = document.getElementById('intro-title-1');
  const introTitle2 = document.getElementById('intro-title-2');
  const nextSection = document.getElementById('next-section');
  const prevSection = document.getElementById('previous-section');
  const container = document.getElementById('main');

  const urlArray = [
    '/img/nastuh-abootalebi-rSpMla5RItA-unsplash.jpg',
    '/img/the-anam-ZNBQMS7amVo-unsplash.jpg',
    '/img/hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg',
  ];

  var adder = 0;
  var pageCounter = 0;

  setTimeout(() => {
    introTitle1.style.transform = 'translateY(0)';
    introTitle2.style.transform = 'translateY(0)';
  }, 250);

  setInterval(() => {
    if (adder <= urlArray.length - 1) {
      introImg.setAttribute('src', urlArray[adder]);
      adder++;
    } else {
      introImg.style.opacity = '0';
    }
  }, 2500);

  nextSection.addEventListener('click', (e) => {
    pageCounter++;
    container.style.transform = `translateX(${-100 * pageCounter}vw)`;
    console.log(`${pageCounter * -100}`);
  });

  prevSection.addEventListener('click', (e) => {
    if (pageCounter > 0) {
      pageCounter--;
      container.style.transform = `translateX(${-100 * pageCounter}vw)`;
      console.log(`${pageCounter * -100}`);
    }
  });

  container.addEventListener('scroll', () => {
    console.log('scrolled');
  });
}

main();
