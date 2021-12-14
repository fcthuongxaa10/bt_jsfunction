function thi() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diemthi1 = Number(document.getElementById("diem1").value);
    var diemthi2 = Number(document.getElementById("diem2").value);
    var diemthi3 = Number(document.getElementById("diem3").value);
    var diemThi = 0;
    var diemVung = diemCongVung();
    var diemDoiTuong = diemCongDoiTuong();
    diemThi = diemthi1 + diemthi2 + diemthi3 + diemVung + diemDoiTuong;
    if (diemthi1 == 0 || diemthi2 == 0 || diemthi3 == 0) {
        document.getElementById("kqThi").innerHTML = "Bạn đả rớt vì có môn 0 điểm";
    } else {
        if (diemThi < diemChuan) {
            document.getElementById("kqThi").innerHTML = "Bạn đả rớt, tổng điểm: " + diemThi;
        } else {
            document.getElementById("kqThi").innerHTML = "Bạn đả đậu, tổng điểm: " + diemThi;
        }
    }
}

function diemCongVung() {
    var khuVuc = document.getElementById("khuVuc").value;
    var diemCong = 0;
    if (khuVuc = "k1") {
        diemCong = 2;
    } else if (khuVuc = "k2") {
        diemCong = 1;
    } else if (khuVuc = "k3") {
        diemCong = 0.5;
    } else {
        diemCong = 0;
    }
    return Number(diemCong);
    console.log("fail");
}

function diemCongDoiTuong() {
    var doiTuong = document.getElementById("doiTuong").value;
    var diemCong = 0;
    if (doiTuong = "d1") {
        diemCong = 2.5;
    } else if (doiTuong = "d2") {
        diemCong = 1.5;
    } else if (doiTuong = "d3") {
        diemCong = 1;
    } else { diemCong = 0; }
    return Number(diemCong);
    console.log("fail");
}