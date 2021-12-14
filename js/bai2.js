function tienDien() {
    var name = document.getElementById("ten").value;
    var money = document.getElementById("sodien").value;
    var thanhToan = 0;
    thanhToan = tinhTienDien(money);
    document.getElementById("tienDien").innerHTML = "Họ tên: " + name + "; Tiền điện: " + thanhToan

}

function tinhTienDien(money) {
    var tienThanhToan = 0;
    if (0 < money && money <= 50) {
        tienThanhToan = money * 500;
    } else if (50 < money && money <= 100) {
        tienThanhToan = 50 * 500 + (money - 50) * 650;
    } else if (100 < money && money <= 200) {
        tienThanhToan = 50 * 500 + 50 * 650 + (money - 100) * 850;
    } else if (200 < money && money <= 350) {
        tienThanhToan = 50 * 500 + 50 * 650 + 100 * 850 + (money - 200) * 1100;
    } else {
        tienThanhToan = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (money - 350) * 1300;
    }
    return tienThanhToan;
}