/* Por W3C */

window.onscroll = function() { 
    navBarAdjustCSS();
};

function navBarAdjustCSS() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        addClassePorIdElemento("sec-navbar-top", "fixed-navbar");
        addClassePorIdElemento("sec-navbar-center", "nav-center-hidden-efect");
        document.getElementsByTagName("body").item(0).style.paddingTop = "3.5em";
        mudarDisplayPorIdElemento("nav-center-pages", "none");
        mudarDisplayPorIdElemento("nav-top-pages", "flex");
    } else {
        removerClassePorIdElemento("sec-navbar-top", "fixed-navbar");
        removerClassePorIdElemento("sec-navbar-center", "nav-center-hidden-efect");
        document.getElementsByTagName("body").item(0).style.paddingTop = "0px";
        mudarDisplayPorIdElemento("nav-center-pages", "block");
        mudarDisplayPorIdElemento("nav-top-pages", "none");
    }
}

function addClassePorIdElemento(idElemento, classe) {
    document.getElementById(idElemento).classList.add(classe);
}

function removerClassePorIdElemento(idElemento, classe) {
    document.getElementById(idElemento).classList.remove(classe);
}

function mudarDisplayPorIdElemento(idElemento, opcaoDisplay) {
    document.getElementById(idElemento).style.display = opcaoDisplay;

}