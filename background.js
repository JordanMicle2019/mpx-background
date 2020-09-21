$pdk.controller.addEventListener("OnReleasePreview", function(payload) {
    setBackgroundImage(payload.data.mediaPID, payload.data.url);
});

function setBackgroundImage(medaiPid, videoUrl) {
    var baseURL = "https://link.theplatform.com/s/ifSiAC/media/"
    document.getElementsByClassName("tpVideo")[0].style.backgroundImage = "url(" + baseURL + medaiPid + "?assetTypes=Poster)";
    document.getElementsByClassName("tpVideo")[0].style.backgroundSize = "cover";
}