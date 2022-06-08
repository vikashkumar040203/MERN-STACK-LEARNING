let cel = document.getElementById('cel');
let fah = document.getElementById("fah");
cel.addEventListener('input',function(){
    let c= this.value;
    let f= (c*9/5) + 32 ;

    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }

    fah.value= f;


    // console.log("cel changed");
    
})
fah.addEventListener('input',function(){
    // console.log("fah changed")\
    let f= this .value;
    let c= (f -32) * 5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(2);


    }
    cel.value=c;

})

