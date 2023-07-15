const imga = document.querySelector(".imageblockIMG");

let count = 6;

function prevPage(){
    count -=1;
    if (count < 1){
        count = 7;
    }
    imga.src = "images/" + count + ".png";
}

function nextPage(){
    count +=1;
    if (count > 7){
        count = 1;
    }
    imga.src = "images/" + count + ".png";
}