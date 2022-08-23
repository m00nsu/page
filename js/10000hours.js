const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");
const resultText = document.querySelectorAll(".result .result_wrap span");

window.onload = () => {
    let timer = 100;
    resultText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
    });
  };

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    const fieldResult = document.querySelector(".field_result");
    const artistResult = document.querySelector(".artist_result");
    const songResult = document.querySelector(".song_result");
    const artist = document.querySelector(".artist");
    const song = document.querySelector(".song");
    const albumResult = document.querySelector(".album_img");

    const regex = /^[0-9]+$/;

    if(fieldValue.value == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    }
    else if(regex.test(fieldValue.value)==false) {
        alert('숫자만 입력해주세요.');
        fieldValue.focus();
        return false;
    }
    else if((fieldValue.value < 0) || (fieldValue.value > 24)) {
        alert('0부터 23까지의 시간을 입력해주세요.');
        fieldValue.focus();
        return false;
    }
    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        if (fieldValue.value <= 6) {
            artistResult.innerText = "Tom Misch";
            artist.innerText = "Tom Misch";
            songResult.innerText = "We've Come So Far";
            song.innerText = "We've Come So Far";
            albumResult.innerHTML = "<img src='img/sofar.jpg' width=\"375\">";
        } 
        else if (fieldValue.value <= 12) {
            artistResult.innerText = "Post Malone, Swae Lee";
            artist.innerText = "Post Malone, Swae Lee";
            songResult.innerText = "Sunflower";
            song.innerText = "Sunflower";
            albumResult.innerHTML = "<img src='img/sunflower.jpg' width=\"375\">";
        }
        else if (fieldValue.value <= 17) {
            artistResult.innerText = "태연";
            artist.innerText = "태연";
            songResult.innerText = "Weekend";
            song.innerText = "Weekend";
            albumResult.innerHTML = "<img src='img/weekend.jpg' width=\"375\">";
        } 
        else if (fieldValue.value < 24) {
            artistResult.innerText = "Anderson .Paak";
            artist.innerText = "Anderson .Paak";
            songResult.innerText = "Fire In The Sky";
            song.innerText = "Fire In The Sky";
            albumResult.innerHTML = "<img src='img/fire.jpg' width=\"375\">";
        } 

    }, 1800);   
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}



shareButton.addEventListener('click', copyUrl);
startButton.addEventListener("click", calculator);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);


