function thi() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diemthi1 = Number(document.getElementById("diem1").value);
    var diemthi2 = Number(document.getElementById("diem2").value);
    var diemthi3 = Number(document.getElementById("diem3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemThi = 0;
    ketQua = thiDaiHoc(diemthi1, diemthi2, diemthi3, khuVuc, doiTuong);
    console.log(ketQua);
    if (diemThi < diemChuan) {
        document.getElementById("kqThi").innerHTML = "Bạn đả rớt, tổng điểm: " + ketQua;
    } else {
        document.getElementById("kqThi").innerHTML = "Bạn đả đậu, tổng điểm: " + ketQua;
    }
}

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

function thiDaiHoc(diemthi1, diemthi2, diemthi3, khuVuc, doiTuong) {
    var diemThi = 0;
    if (khuVuc == "k1") {
        if (doiTuong == "d1") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 2 + 2.5;
        } else if (doiTuong == "d2") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 2 + 1.5;
        } else if (doiTuong == "d3") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 2 + 1.5;
        } else {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 2;
        }
    } else if (khuVuc == "k2") {
        if (doiTuong == "d1") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1 + 2.5;
        } else if (doiTuong == "d2") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1 + 1.5;
        } else if (doiTuong == "d3") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1 + 1.5;
        } else {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1;
        }
    } else if (khuVuc == "k3") {
        if (doiTuong == "d1") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 0.5 + 2.5;
        } else if (doiTuong == "d2") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 0.5 + 1.5;
        } else if (doiTuong == "d3") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 0.5 + 1.5;
        } else {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 0.5;
        }
    } else {
        if (doiTuong == "d1") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 2.5;
        } else if (doiTuong == "d2") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1.5;
        } else if (doiTuong == "d3") {
            diemThi = diemthi1 + diemthi2 + diemthi3 + 1.5;
        } else {
            diemThi = diemthi1 + diemthi2 + diemthi3;
        }
    }
    return diemThi;
}