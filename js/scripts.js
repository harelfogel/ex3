// global variable
var myLastName = "fogel";

function initialize(rec) {
    var obj = document.createElement('section');
    obj.style.backgroundColor=getRandomColor(); 
    obj.tempColor=obj.style.backgroundColor;   // saving the color after clicking back from the white image.

// making a new rectangle.
    function addRect() {
        obj.plus=document.createElement('img');
        obj.plus.src="images/plus.png";
        obj.plus.alt="add rectangle";
        obj.plus.title="add rectangle";
        obj.plus.className = "plus";
        obj.plus.counter = findLengh();
        obj.plus.onclick = function() {
         initialize((obj.plus.counter)++);

        };
        obj.appendChild(obj.plus);
    }
// fucntion that will change the image afer clicking one of the boxes
    function toggelImage() {
        if (this.style.backgroundColor != "white") {
            this.style.backgroundColor = "white";
            this.style.backgroundSize="332px";
            this.style.backgroundImage="url(images/ramos.png)";
            if (this.batman){
                this.batman.style.visibility = "hidden";
            }

        } else {
            this.style.backgroundColor = this.tempColor; 
            this.style.backgroundImage="none";
            if ((this.batman)){
                this.batman.style.visibility = "visible";
                this.style.backgroundSize="none";
            }  
        }
    }
// adding a batman's image on the top of the rectangle
    function addBatman() {
        obj.batman = document.createElement('img');
        obj.batman.src = "images/batman.png";
        obj.batman.alt = "batman";
        obj.batman.title = "batman";
        obj.batman.className = "batman";
        obj.appendChild(obj.batman);
    }

    if (isDivideBy3(rec))
    addBatman();
   
    if (rec) {
        obj.onclick = toggelImage;

    } else {
        addRect();
    }

    document.getElementsByTagName('main')[0].appendChild(obj);
}

// dividing the object by 3 for making a new batman
function isDivideBy3(rec){
    return ((rec+1)%3==0);
}

function findLengh() {
    return (2 * myLastName.length);
}

// making a new object 
function rectCreator() {
    for (var i = 0; i < findLengh(); ++i) {
       obj=new initialize(i);
    }
}

// getting a random color for the object.
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

