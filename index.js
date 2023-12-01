// Getting elements
const logo = document.querySelector('.logo');
const menuItems = document.querySelectorAll('#menu li');
// Click handler for the logo
logo.addEventListener('click', () => {
  // Redirect to the main page
  window.location.href = 'index.html';
});
// Click handler for menu items
menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Prevent default action for links
    event.preventDefault();
    // Get the link from the href attribute
    const link = item.querySelector('a').getAttribute('href');
    // Redirect to the selected page
    window.location.href = link;
  });
});
// Main Video autoplayer
var videoPlayer = document.getElementById('videoPlayer');
    var videoSources = videoPlayer.getElementsByTagName('source');
    var currentVideoIndex = 0;

    videoPlayer.addEventListener('ended', function() {
        currentVideoIndex++;
        if (currentVideoIndex >= videoSources.length) {
            currentVideoIndex = 0;
        }
        videoPlayer.style.opacity = 0;
        setTimeout(function() {
            videoPlayer.src = videoSources[currentVideoIndex].src;
            videoPlayer.load();
            videoPlayer.style.opacity = 1;
            setTimeout(function() {
                videoPlayer.play();
            }, 500);
        }, 500);
    });