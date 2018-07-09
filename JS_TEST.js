// function bake(degrees){
//     var message;
//     if(degrees > 500){
//         message="1";
//     }
//     else if(degrees < 100){
//         message="2";
//     }
//     else{
//         message="3";
//         // console.log("123");
//     }
//     return message;
// }
// var a = bake(350);

var ss = function (a) {
    console.log(a);
}(1);


function m(a) {      //需命名
    console.log(a); 
};
m(1);


(function (a) {
    console.log(a);
})(1);