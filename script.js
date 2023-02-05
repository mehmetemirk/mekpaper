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
var içerik = document.getElementById("paper")
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
        isim.innerHTML="PizzApple"
    }
    else if (deger == 3) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER bğdylr.png')
        risim.src="./img/goruntulenen-ıcerık/bğdylr.png"
        isim.innerHTML="YelloWheat"
    }
    else if (deger == 4) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER clrskllr.png')
        risim.src="./img/goruntulenen-ıcerık/clrskllr.png"
        isim.innerHTML="Rainbow"
    }
    else if (deger == 5) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER cptnmrc.png')
        risim.src="./img/goruntulenen-ıcerık/cptnmrc.png"
        isim.innerHTML="Captain America"
    }
    else if (deger == 6) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER aklylght.png')
        risim.src="./img/goruntulenen-ıcerık/aklylght.png"
        isim.innerHTML="Akulay Light"
    }
    else if (deger == 7) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER czglclr.png')
        risim.src="./img/goruntulenen-ıcerık/czglclr.png"
        isim.innerHTML="Color Wave"
    }
    else if (deger == 8) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER dgfrst.png')
        risim.src="./img/goruntulenen-ıcerık/dgfrst.png"
        isim.innerHTML="First"
    }
    else if (deger == 9) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER dğrmn.png')
        risim.src="./img/goruntulenen-ıcerık/dğrmn.png"
        isim.innerHTML="Holland"
    }
    else if (deger == 10) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER gglecrplm.png')
        risim.src="./img/goruntulenen-ıcerık/gglecrplm.png"
        isim.innerHTML="Molten Google"
    }
    else if (deger == 11) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER grnnmxr.png')
        risim.src="./img/goruntulenen-ıcerık/grnnmxr.png"
        isim.innerHTML="Yeşilin 50 Tonu"
    }
    else if (deger == 12) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER jblksk.png')
        risim.src="./img/goruntulenen-ıcerık/jblksk.png"
        isim.innerHTML="JamesBL"
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
        isim.innerHTML="Mountain Landscape"
    }
    else if (deger == 16) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER pwrbtn.png')
        risim.src="./img/goruntulenen-ıcerık/pwrbtn.png"
        isim.innerHTML="Cyan Power"
    }
    else if (deger == 17) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER rgbsc.png')
        risim.src="./img/goruntulenen-ıcerık/rgbsc.png"
        isim.innerHTML="Neon ESC"
    }
    else if (deger == 18) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER rkrctr.png')
        risim.src="./img/goruntulenen-ıcerık/rkrctr.png"
        isim.innerHTML="Arc Reactor"
    }
    else if (deger == 19) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER mrdvn.png')
        risim.src="./img/goruntulenen-ıcerık/mrdvn.png"
        isim.innerHTML="Perspective"
    }
    else if (deger == 20) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER pncr.png')
        risim.src="./img/goruntulenen-ıcerık/pncr.png"
        isim.innerHTML="UnRecap"
    }
     else if (deger == 21) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER stvjbs.png')
        risim.src="./img/goruntulenen-ıcerık/stvjbs.png"
        isim.innerHTML="Steve Jobs"
    }
    else if (deger == 22) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER arsnlpn.png')
        risim.src="./img/goruntulenen-ıcerık/arsnlpn.png"
        isim.innerHTML="LUPIN"
    }
    else if (deger == 23) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/MEKPAPER 2023.png')
        risim.src="./img/goruntulenen-ıcerık/2023.png"
        isim.innerHTML="Special For 2023"
    }
    else if (deger == 101) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Minecraft Collection.png')
        risim.src="./img/goruntulenen-ıcerık/mcmncrft.png"
        isim.innerHTML="Special Minecraft Collection"
    }
    else if (deger == 102) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Creeper (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mccrpr.png"
        isim.innerHTML="Creeper Boom!!!"
    }
    else if (deger == 103) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Totem of Undying (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mcttm.png"
        isim.innerHTML="Cheating Death"
    }
    else if (deger == 104) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Painting (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mctbl.png"
        isim.innerHTML="That's Better"
    }
    else if (deger == 105) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Monster Hunter (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mcmnstrhntr.png"
        isim.innerHTML="Monster Hunter"
    }
    else if (deger == 106) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Diamond (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mcdmnd.png"
        isim.innerHTML="Diamonds"
    }
    else if (deger == 107) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Layers (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mclyrs.png"
        isim.innerHTML="Do You Want Mine?"
    }
    else if (deger == 108) {
        indir.setAttribute('href', 'img/ındırılen-ıcerık/Animals (collection).png')
        risim.src="./img/goruntulenen-ıcerık/mcnmls.png"
        isim.innerHTML="AnimalS"
    }



}
function popupkapa() {

    popup.style.display = "none"
    içerik.style.display = "flex"
    header.style.display = "flex"
    end.style.display = "flex"




}





