    var filtrevalue = document.getElementById("butonlar")




    function filtreler(){
        if (filtrevalue.style.display == "flex"){
            filtrevalue.style.display = "none"
        }
        else{
            filtrevalue.style.display = "flex"
        }
    }



    var buton = document.getElementsByClassName("filtre-buton")
    var wallpaper = document.getElementsByClassName("wallpaper")
    var light = document.getElementsByClassName("light")
    var dark = document.getElementsByClassName("dark")
    var color = document.getElementsByClassName("color")



    function filtrefonksiyon(c){

        for(i=0; i < wallpaper.length; i++)
        {
    
            wallpaper[i].style.display = "none"
        }
    
        for(i=0; i < c.length; i++)
        {
    
            c[i].style.display = "block"
        }
    }

    function filtretemizle(){

        for(i=0; i < wallpaper.length; i++)
        {
    
            wallpaper[i].style.display = "block"
        }
    }


    ClientScript.RegisterStartupScript(Page.GetType(), "alert", "alert('Gönderim işlemi başarılı. Projeniz uzmanları tarafından incelenecektir.');window.location='/tr/proje-ve-fikir.html';", true);