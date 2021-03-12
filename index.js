//HTML:
function myFunction() {
    var x = document.getElementById("loginn").elements[0].value;
    document.getElementById("demo").innerHTML = x;
    alert(x)
}
console.log(x)
alert(x)

function dashboard() {
    document.getElementById("health").innerHTML = "Bot health: no";
}
setInterval(async function() {
    dashboard();
}, 0.1 * 60000);

//health.insertAdjacentHTML('beforeEnd', ' yes')