/* gallery.js */

function upDate(previewPic){

    console.log("Mouse or keyboard event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage =
    "url('" + previewPic.src + "')";

    imageDiv.innerHTML =
    previewPic.alt;
}


function unDo(){

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage =
    "url('')";

    imageDiv.innerHTML =
    "Hover over an image below to display here.";
}



function addTabFocus(){

    console.log("Page loaded");

    let images =
    document.querySelectorAll(".preview");


    for(let i=0;i<images.length;i++){

        images[i].setAttribute(
            "tabindex","0"
        );

        console.log(
            "tabindex added to image " + i
        );

    }

}