
const hideMe = document.getElementsByTagName('display-none');
for (let i = 0; i < hideMe.length; i++) {
    hideMe[i].setAttribute('style', 'display: none; pointer-events: none;');
}