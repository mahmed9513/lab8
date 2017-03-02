function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  $(".facebookLogin").hide();
  $("#name").text("Mohsin Ahmed");
  $(".description").text("Studies Cognitive Science at UC San Diego");
  $("#photo").attr("src", "https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/10577135_627017030730946_3606550675144577807_n.jpg?oh=9c035f7ae485c3054ccfe3a54dd66258&oe=596C05BF");
}