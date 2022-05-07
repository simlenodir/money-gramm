var dollar = 11137.5;
var euro = 11738.93;
var rubl = 167.57;

var select = document.getElementById("converter");

function changer() {
    var money = document.getElementById("usersumm").value;
  var chosed = select.options[select.selectedIndex].value;
  if (chosed == 1) {
    money /= dollar;
    money = money.toFixed(2) + `$ sizning puulingiz `;
  } else if (chosed == 2) {
    money /= euro;
    money = money.toFixed(2) + ` € sizning puulingiz`;
  } else if (chosed == 3) {
    money /= rubl;
    money = money.toFixed(2) + `₽ sizning puulingiz `;
  }
  document.getElementsByClassName("lastsum")[0].innerHTML = money;
}
