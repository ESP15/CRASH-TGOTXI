function incrementarProgreso() {
    var progressBar = document.getElementById("progress-bar");
    var width = parseInt(progressBar.style.width, 10) || 0;
    if (width < 100) {
    width += 10;
    progressBar.style.width = width + "%";
    }
}