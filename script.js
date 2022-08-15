const chakra = document.getElementsByClassName('ashok-chakra')[0];
for(let i = 0; i < 24; i++) {
    const spoke = document.createElement('div');
    spoke.style.transform = `rotate(${15 * i}deg)`;
    spoke.classList.add('spoke');
    chakra.append(spoke);
}