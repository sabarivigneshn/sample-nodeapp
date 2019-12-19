var promise = new Promise (function(resolve, reject){
    setTimeout(function() {
        resolve('hi swarna');
    }, 5000);

})

promise.then(function (data){
    console.log(data);

}
    );




