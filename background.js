$pdk.controller.addEventListener("OnReleasePreview", function(payload) {
    setBackgroundImage(payload.data.url);
});

function setBackgroundImage(videoUrl) {
    document.getElementsByClassName("tpVideo")[0].style.backgroundImage = "url(" + videoUrl + "?assetTypes=Poster)";
    document.getElementsByClassName("tpVideo")[0].style.backgroundSize = "cover";
}