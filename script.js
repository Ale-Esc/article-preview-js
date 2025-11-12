const shareMenu = document.querySelector('#share-menu');
const shareBtn = document.querySelector('#share-button');
const shareIcon = document.querySelector('#share-icon');

shareBtn.addEventListener('click', function () {
    if (shareMenu.classList.contains('share-hidden')) {
        shareMenu.classList.remove('share-hidden');
        shareBtn.classList.add('share-active');
        shareIcon.classList.add('share-icon-active');
    } else {        
        shareMenu.classList.add('share-hidden');
        shareBtn.classList.remove('share-active');
        shareIcon.classList.remove('share-icon-active');
    }
});
