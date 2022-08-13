var filtrevalue = document.getElementById("butonlar")




function filtreler() {
    if (filtrevalue.style.display == "flex") {
        filtrevalue.style.display = "none"
    }
    else {
        filtrevalue.style.display = "flex"
    }
}



var buton = document.getElementsByClassName("filtre-buton")
var wallpaper = document.getElementsByClassName("wallpaper")
var light = document.getElementsByClassName("light")
var dark = document.getElementsByClassName("dark")
var color = document.getElementsByClassName("color")



function filtrefonksiyon(c) {

    for (i = 0; i < wallpaper.length; i++) {

        wallpaper[i].style.display = "none"
    }

    for (i = 0; i < c.length; i++) {

        c[i].style.display = "block"
    }
}

function filtretemizle() {

    for (i = 0; i < wallpaper.length; i++) {

        wallpaper[i].style.display = "block"
    }
}

var popup = document.getElementById("popup")
var indir = document.getElementById("popup-indir-buton")
var isim = document.getElementById("popup-isim")
var risim = document.getElementById("popup-img")
var içerik = document.getElementById("içerikler")
var header = document.getElementById("header")
var end = document.getElementById("end")



function popupac(deger) {

    popup.style.display = "flex"
    içerik.style.display = "none"
    header.style.display = "none"
    end.style.display = "none"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (deger == 1) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER aklydrk.png') 
        risim.src="./img/goruntulenen-ıcerık/aklydrk.png"
        isim.innerHTML="Akulay Dark"
    }
    else if (deger == 2) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER aplpz.png')
        risim.src="./img/goruntulenen-ıcerık/aplpz.png"
        isim.innerHTML="Apple Pizza"
    }
    else if (deger == 3) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER bğdylr.png')
        risim.src="./img/goruntulenen-ıcerık/bğdylr.png"
        isim.innerHTML="Sarı Buğday"
    }
    else if (deger == 4) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER clrskllr.png')
        risim.src="./img/goruntulenen-ıcerık/clrskllr.png"
        isim.innerHTML="Renkler"
    }
    else if (deger == 5) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER cptnmrc.png')
        risim.src="./img/goruntulenen-ıcerık/cptnmrc.png"
        isim.innerHTML="Kaptan Amerika"
    }
    else if (deger == 6) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER aklylght.png')
        risim.src="./img/goruntulenen-ıcerık/aklylght.png"
        isim.innerHTML="Akulay Light"
    }
    else if (deger == 7) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER czglclr.png')
        risim.src="./img/goruntulenen-ıcerık/czglclr.png"
        isim.innerHTML="Gökkuşağı"
    }
    else if (deger == 8) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER dgfrst.png')
        risim.src="./img/goruntulenen-ıcerık/dgfrst.png"
        isim.innerHTML="Dağ Manzarası"
    }
    else if (deger == 9) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER dğrmn.png')
        risim.src="./img/goruntulenen-ıcerık/dğrmn.png"
        isim.innerHTML="Hollanda Değirmeni"
    }
    else if (deger == 10) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER gglecrplm.png')
        risim.src="./img/goruntulenen-ıcerık/gglecrplm.png"
        isim.innerHTML="Eriyen Google"
    }
    else if (deger == 11) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER grnnmxr.png')
        risim.src="./img/goruntulenen-ıcerık/grnnmxr.png"
        isim.innerHTML="Yeşilin 50 Tonu"
    }
    else if (deger == 12) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER jblksk.png')
        risim.src="./img/goruntulenen-ıcerık/jblksk.png"
        isim.innerHTML="Kesik JBL"
    }
    else if (deger == 13) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER lrmpsmdrk.png')
        risim.src="./img/goruntulenen-ıcerık/lrmpsmdrk.png"
        isim.innerHTML="Lorem İpsum Dark"
    }
    else if (deger == 14) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER lrmpsmlght.png')
        risim.src="./img/goruntulenen-ıcerık/lrmpsmlght.png"
        isim.innerHTML="Lorem İpsum Light"
    }
    else if (deger == 15) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER mnzryty.png')
        risim.src="./img/goruntulenen-ıcerık/mnzryty.png"
        isim.innerHTML="Manzara (Yatay)"
    }
    else if (deger == 16) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER pwrbtn.png')
        risim.src="./img/goruntulenen-ıcerık/pwrbtn.png"
        isim.innerHTML="Mavi Güç"
    }
    else if (deger == 17) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER rgbsc.png')
        risim.src="./img/goruntulenen-ıcerık/rgbsc.png"
        isim.innerHTML="Neon ESC"
    }
    else if (deger == 18) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER rkrctr.png')
        risim.src="./img/goruntulenen-ıcerık/rkrctr.png"
        isim.innerHTML="Ark Reaktörü"
    }


}
function popupkapa() {

    popup.style.display = "none"
    içerik.style.display = "flex"
    header.style.display = "flex"
    end.style.display = "flex"




}
