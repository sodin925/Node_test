$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://randomuser.me/api/",
  })
    .done(function( msg ) {
      var email = (msg.results[0].email)
      $("div").append(email)
    });
})