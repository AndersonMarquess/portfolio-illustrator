/* Por W3C */

window.onscroll = function() { 
    navBarAdjustCSS();
};

function navBarAdjustCSS() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("sec-navbar-top").classList.add("fixed-navbar");
        changeCSS("none", "70px", "flex");
    } else {
        document.getElementById("sec-navbar-top").classList.remove("fixed-navbar");
        changeCSS("block", "0px", "none");
    }
}

function changeCSS(displayNavCenterPages, paddingTopBody, displayNavTopPages) {
    document.getElementById("nav-center-pages").style.display = displayNavCenterPages;
    document.getElementsByTagName("body").item(0).style.paddingTop = paddingTopBody;
    document.getElementById("nav-top-pages").style.display = displayNavTopPages;
}