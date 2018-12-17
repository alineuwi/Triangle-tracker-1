
function track(){
    var firstvalue=parseInt(document.getElementById('one').value);
    var secondvalue=parseInt(document.getElementById('two').value);
    var thirdvalue=parseInt(document.getElementById('three').value);
    var text;
    var function={first,secondvalue,third}

    if(firstvalue <= 0|| secondvalue <= 0 || thirdvalue <=0 ){
        text="Undefined"
    }
    else if (
        (firstvalue + secondvalue <= thirdvalue &&secondvalue + firstvalue <= thirdvalue) ||(firstvalue + thirdvalue <= secondvalue &&thirdvalue + firstvalue <= secondvalue) ||(secondvalue + thirdvalue <= firstvalue && thirdvalue + secondvalue <= firstvalue)
      ) {
        text = "Not a Triangle.";
      }
    // Not a triangle
    else if(firstvalue === secondvalue && secondvalue === thirdvalue){
        text = "Equilaterial Triangle.";
    }
     //Equirateral Triangle
    
    else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
        text="Isoscele Trimugishangle.";
    } 
    //Isoscele Triangle
    else if(firstvalue!==secondvalue && firstvalue!==thirdvalue &&secondvalue!==thirdvalue){
        text="Scalene Triangle."
    }
    //Scalene Triangle
    
    else{
        text = "Error.";
    }
    document.getElementById('demo').innerHTML = text;
   "The value[" + array + "]" + " is " + text;
}
