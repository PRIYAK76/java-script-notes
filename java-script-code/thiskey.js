
let lap1={
    cpu:'i5',
    ram:16,
    brand:'dell',

    compare:function(other){
        if(this.cpu>other.cpu){
            console.log(this);
            console.log("lpa 1 is good");
        }
        else{
            console.log(other);
            console.log("lap2 is goood");
        }
    }
}
let lap2={
    cpu:'i7',
    ram:16,
    brand:'dell',

}
lap1.compare(lap2);