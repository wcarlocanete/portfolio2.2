document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  const image = document.getElementById('hero-image');
  const navLine = document.getElementById('nav-line');
  const sideText = document.getElementById('side-text');
  const leftText = document.getElementById('left-text');
  const rightText2 = document.getElementById('right-text-2');
  const belowText = document.getElementById('below-text');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // === Stage positions ===
    const fadeOutEnd = windowHeight * 0.6;
    const fadeInStart = windowHeight * 1.0;
    const fadeInEnd = windowHeight * 1.6;

    const hiFadeInStart = windowHeight * 2.0;
    const hiFadeInEnd = windowHeight * 2.5;
    const hiStayEnd = windowHeight * 2.9;
    const hiFadeOutEnd = windowHeight * 3.4;

    const nameSlideInStart = hiFadeOutEnd + windowHeight * 0.1;
    const nameSlideInEnd = nameSlideInStart + windowHeight * 0.6;

    const graduatedFadeInStart = nameSlideInEnd + windowHeight * 0.5;
    const graduatedFadeInEnd = graduatedFadeInStart + windowHeight * 0.6;
    const graduatedStayEnd = graduatedFadeInEnd + windowHeight * 0.3;
    const graduatedFadeOutEnd = graduatedStayEnd + windowHeight * 0.6;

    // === NEW: Below text (Computer Engineer TIP(QC) - 2025) ===
    const belowSlideInStart = graduatedFadeOutEnd + windowHeight * 0.2;
    const belowSlideInEnd = belowSlideInStart + windowHeight * 0.6;

    // === 1. Title fade-out ===
    if (scrollTop <= fadeOutEnd) {
      h1.style.opacity = 1 - scrollTop / fadeOutEnd;
    } else {
      h1.style.opacity = 0;
    }

    // === 2. Hero image fade-in ===
    if (scrollTop >= fadeInStart && scrollTop <= fadeInEnd) {
      const progress = (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart);
      image.style.opacity = progress;
    } else if (scrollTop < fadeInStart) {
      image.style.opacity = 0;
    } else {
      image.style.opacity = 1;
    }

    // === 3. Nav line fade-in ===
    const navOpacity = Math.min(1, Math.max(0, (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart)));
    navLine.style.opacity = navOpacity;

    // === 4. "Hi!" fade sequence ===
    if (scrollTop >= hiFadeInStart && scrollTop <= hiFadeInEnd) {
      const progress = (scrollTop - hiFadeInStart) / (hiFadeInEnd - hiFadeInStart);
      sideText.style.opacity = progress;
    } else if (scrollTop > hiFadeInEnd && scrollTop <= hiStayEnd) {
      sideText.style.opacity = 1;
    } else if (scrollTop > hiStayEnd && scrollTop <= hiFadeOutEnd) {
      const progress = 1 - (scrollTop - hiStayEnd) / (hiFadeOutEnd - hiStayEnd);
      sideText.style.opacity = Math.max(0, progress);
    } else {
      sideText.style.opacity = 0;
    }

    // === 5. Left name slide-in ===
    if (scrollTop >= nameSlideInStart && scrollTop <= nameSlideInEnd) {
      const progress = (scrollTop - nameSlideInStart) / (nameSlideInEnd - nameSlideInStart);
      leftText.style.opacity = progress;
      leftText.style.transform = `translate(${ -150 + progress * 130 }%, -50%)`;
    } else if (scrollTop < nameSlideInStart) {
      leftText.style.opacity = 0;
      leftText.style.transform = "translate(-150%, -50%)";
    } else {
      leftText.style.opacity = 1;
      leftText.style.transform = "translate(-20%, -50%)";
    }

    // === 6. "I graduated" fade sequence ===
    if (scrollTop >= graduatedFadeInStart && scrollTop <= graduatedFadeInEnd) {
      const progress = (scrollTop - graduatedFadeInStart) / (graduatedFadeInEnd - graduatedFadeInStart);
      rightText2.style.opacity = progress;
    } else if (scrollTop > graduatedFadeInEnd && scrollTop <= graduatedStayEnd) {
      rightText2.style.opacity = 1;
    } else if (scrollTop > graduatedStayEnd && scrollTop <= graduatedFadeOutEnd) {
      const progress = 1 - (scrollTop - graduatedStayEnd) / (graduatedFadeOutEnd - graduatedStayEnd);
      rightText2.style.opacity = Math.max(0, progress);
    } else {
      rightText2.style.opacity = 0;
    }

    // === 7. Below text slide-in (then stay fixed) ===
    if (scrollTop >= belowSlideInStart && scrollTop <= belowSlideInEnd) {
      const progress = (scrollTop - belowSlideInStart) / (belowSlideInEnd - belowSlideInStart);
      belowText.style.opacity = progress;
      belowText.style.transform = `translate(${ -150 + progress * 130 }%, -50%)`;
    } else if (scrollTop < belowSlideInStart) {
      belowText.style.opacity = 0;
      belowText.style.transform = "translate(-150%, -50%)";
    } else {
      // Once fully visible — keep it fixed and visible
      belowText.style.opacity = 1;
      belowText.style.transform = "translate(-20%, -50%)";
    }

  });
});
