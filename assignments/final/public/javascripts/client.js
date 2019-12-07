function CarsApi(){

}
CarsApi.prototype.getCars = function() {
    $.get('/api/cars', function(data){
        console.log(data);
    });
};