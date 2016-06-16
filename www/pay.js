$(document).ready(
  function(){
    document.getElementById("video-img-cover").setAttribute("style","background: url('http://img.youtube.com/vi/" + window.URL + "/hqdefault.jpg') 50% 50% / cover no-repeat;")
    $('.title-video').text(window.title)

    console.log($('body'))
  }
)