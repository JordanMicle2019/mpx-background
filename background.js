$pdk.controller.addEventListener("OnReleasePreview", function(payload) {
    setBackgroundImage(payload.data.defaultThumbnailUrl);
});

function setBackgroundImage(backgroundUrl) {
    document.getElementsByClassName("tpVideo")[0].style.backgroundImage = "url(" + backgroundUrl + ")";
    document.getElementsByClassName("tpVideo")[0].style.backgroundSize = "cover";
}