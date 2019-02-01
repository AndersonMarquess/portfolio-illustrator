img_class = "";

function showFullImage(img) {
    var elementIMG = document.getElementById("img-viewer-id");
    if(elementIMG.classList.length >= 2) {
        return;
    }

    elementIMG.classList.add(img);
    openEffect();
    
    img_class = img;
}

function closeViewer() {
    document.getElementById("img-viewer-id").classList.remove(img_class);
    closeEffect();
}

function openEffect() {
    var viewContainer = document.getElementById("figure-main-viewer");
    viewContainer.classList.add("show-viewer");
    viewContainer.classList.remove("close-viewer");
    viewContainer.style.display = "block";
    document.getElementById("viewer-icon").style.display = "block";
}

function closeEffect() {
    var viewContainer = document.getElementById("figure-main-viewer");
    viewContainer.classList.remove("show-viewer");
    viewContainer.classList.add("close-viewer");
    viewContainer.style.display = "none";
    document.getElementById("viewer-icon").style.display = "none";
}