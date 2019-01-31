
function showFullImage(img) {
    var elementIMG = document.getElementById("img-viewer-id");
    elementIMG.classList.add(img);

    var viewContainer = document.getElementById("figure-main-viewer");
    viewContainer.style.display = "block";
}