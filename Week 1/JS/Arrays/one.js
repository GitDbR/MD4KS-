var isArray = function(input){
    if(toString.call(input) === "[object Array]"){
            return true;
    }
    else {return false;}
}

console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

// +++++++++++++++++ Another way ++++++++++++++++


    function check(arr){
        if(Array.isArray(arr)){
        return true;
        }else{
        return false;
        }
    }
    console.log(check('w3resource'));
    console.log(check([1, 2, 4, 0]));




