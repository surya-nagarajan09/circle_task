var circle = /** @class */ (function () {
    function circle(obj) {
        this.circleRadius = obj.radius;
    }
    circle.prototype.getradius = function () {
        return this.circleRadius;
    };
    circle.prototype.setRadius = function (obj) {
        this.circleRadius = obj.radius;
    };
    circle.prototype.getarea = function () {
        return (Math.PI * this.circleRadius * this.circleRadius);
    };
    circle.prototype.getcircum = function () {
        return (Math.PI * 2 * this.circleRadius);
    };
    return circle;
}());
(document.getElementById("radiusbutton")).addEventListener("click", function () {
    var radius = +(document.getElementById("radius").value);
    var c = {
        radius: radius
    };
    var cir = new circle(c);
    document.getElementById("area").innerHTML = cir.getarea().toFixed(2);
});
(document.getElementById("circumbutton")).addEventListener("click", function () {
    var radius = +(document.getElementById("radius").value);
    var c = {
        radius: radius
    };
    var cir = new circle(c);
    document.getElementById("circum").innerHTML = cir.getcircum().toFixed(2);
});
(document.getElementById("reset")).addEventListener("click", function () {
    document.getElementById("area").innerHTML = "";
    document.getElementById("circum").innerHTML = "";
});
