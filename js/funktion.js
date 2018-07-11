function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function() {
    $("#myUL").hide();
    $("#myInput").hide();

    $("#searchicon").click(function(){
        //$("#myUL").show();
        $("#myUL").slideToggle();
        $("#myInput").show();
    });
})
  var config = {
    apiKey: "AIzaSyBg19pHf5epYU5vRzfvSyfQnaBGPcBxUHU",
    authDomain: "komentarsfalt-recept.firebaseapp.com",
    databaseURL: "https://komentarsfalt-recept.firebaseio.com",
    projectId: "komentarsfalt-recept",
    storageBucket: "",
    messagingSenderId: "1044351497645"
};
firebase.initializeApp(config);
var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer").child(receptnamn);
    return $firebaseArray(ref);
  }
);

// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };

$scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    if ($scope.kommentar.text.length>0){{}}
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};

  }
);

