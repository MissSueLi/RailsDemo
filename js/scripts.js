// Lesson 19
var myKitties = [ { title: "First Project", pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg" }, { title: "Second Project", pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg" }, 
{ title: "Third Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg" }, 
{ title: "Fourth Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg" }
];

for(var i=0; i<myKitties.length; ++i) {
        $( "#" + i ).css("background-image", "url(" + myKitties[i].pic + ")" );
    };

// Lesson 19 End

$( document ).ready( function() {

var paragraphs = $('.my-row');

for(var i=0; i<paragraphs.length; ++i) {
	if (i%2===0) {
	$(paragraphs[i]).css("background-color", "pink");
        };
    };
});
