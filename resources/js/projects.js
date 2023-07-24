function videoLoaded(video) {
    // Video has loaded, hide the loading GIF
    video.parentElement.querySelector('.loading-overlay').style.display = 'none';
    video.pause();
}