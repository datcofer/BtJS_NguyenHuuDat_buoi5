//------------------BÀI TẬP 1: QUẢN LÝ TUYỂN SINH--------------------------------
document.getElementById("ketQua").onclick = () => {
    let diemChuan = document.getElementById("diemChuan").value;
    let doiTuong = document.getElementById("doiTuong").value;
    let khuVuc = document.getElementById("khuVuc").value;
    let diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
    let diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
    let diemMonThu3 = document.getElementById("diemMonThu3").value * 1;
  
    if (diemMonThu1 <= 0 || diemMonThu2 <= 0 || diemMonThu3 <= 0) {
        document.getElementById("ketQua1").innerHTML = `Rất tiếc bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    } else {
        let diemDoiTuong = 0;
        switch(doiTuong){
            case "1":
                diemDoiTuong = 2.5;
                break;
            case "2":
                diemDoiTuong = 2;
                break;
            case "3":
                diemDoiTuong = 1;
                break;
        }
        let diemKhuVuc = 0;
        switch (khuVuc) {
            case "A":
                diemKhuVuc = 2;
                break;
            case "B":
                diemKhuVuc = 1;
                break;
            case "C":
                diemKhuVuc = 0.5;
                break;
        }
        console.log(diemDoiTuong);
        console.log(diemKhuVuc);
        let tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemDoiTuong + diemKhuVuc;
        console.log(tongDiem);
        if (tongDiem >= diemChuan) {
            document.getElementById("ketQua1").innerHTML = `Chúc mừng bạn đã đậu với tổng điểm: ${tongDiem}`;
        } else {
            document.getElementById("ketQua1").innerHTML = `Rất tiếc bạn đã rớt với tổng điểm: ${tongDiem}`;
        }
    }
}
//------------------BÀI TẬP 2: TÍNH TIỀN ĐIỆN------------------------------------
document.getElementById("tinhTien").onclick = () => {
    let hoVaTen = document.getElementById("hoVaTen").value.trim();
    console.log(hoVaTen);
    let soKw = document.getElementById("soKw").value * 1;
    let tinhTienDien = 0;
    if (soKw <= 50) {
        tinhTienDien = soKw * 500;
    } else if (soKw <= 100) {
        tinhTienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        tinhTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        tinhTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tinhTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350)*1300; 
    }
    console.log(tinhTienDien);
    document.getElementById("ketQua2").innerHTML = `Tiền điện tháng này của chủ hộ ${hoVaTen} là ${tinhTienDien.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    })}`;
}
//------------------BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN------------------------------------
document.getElementById("tinhTienThue").onclick = () => {
    let hoVaTenCaNhan = document.getElementById("hoVaTenCaNhan").value.trim();
    console.log(hoVaTenCaNhan);
    let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    let tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
    let thuNhapTruSoNguoiPhuThuoc = tongThuNhapNam - (soNguoiPhuThuoc * 1600000);
    console.log(thuNhapTruSoNguoiPhuThuoc);
    if (thuNhapTruSoNguoiPhuThuoc < 4100000) {
        alert(`số tiền tổng thu nhập năm không đúng`);
        return;
    } else {
        let thueThuNhapCaNhan = 0;
        let thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc * 1600000);
        console.log(thuNhapChiuThue);
        if (thuNhapChiuThue<= 0) {
             thueThuNhapCaNhan= 0;
        } else if (thuNhapChiuThue <= 60000000) {
            thueThuNhapCaNhan = thuNhapChiuThue*0.05;
        } else if (thuNhapChiuThue>60000000 && thuNhapChiuThue <= 120000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
        } else if (thuNhapChiuThue>120000000 && thuNhapChiuThue <= 210000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
        } else if(thuNhapChiuThue>210000000 && thuNhapChiuThue <= 384000000){
            thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
        }else if(thuNhapChiuThue>384000000 && thuNhapChiuThue <= 624000000){
            thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
        }else if(thuNhapChiuThue>624000000 && thuNhapChiuThue <= 960000000){
            thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
        }else if(thuNhapChiuThue>960000000){
            thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
        }
        console.log(thueThuNhapCaNhan);
        document.getElementById("ketQua3").innerHTML = `Thuế thu nhập cá nhân của ${hoVaTenCaNhan} là ${thueThuNhapCaNhan.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
        })}`;
    }
}
//------------------BÀI TẬP 4: TÍNH THUẾ THU NHẬP CÁ NHÂN------------------------------------
// Hiển thị số kết nối (chỉ cho doanh nghiệp)
document.getElementById("loaiKhachHang").onchange = ()=> {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoi = document.getElementById("soKetNoi");

    if (loaiKhachHang === "doanhNghiep") {
        soKetNoi.style.display = "block";
    } else {
        soKetNoi.style.display = "none";
    }
}
// TÍNH TIỀN CÁP
document.getElementById("tinhTienCap").onclick = () => {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    let maKhachHang = document.getElementById("maKhachHang").value;
    let tienCap = 0;
    if (loaiKhachHang === "Chọn loại khách hàng") {
        alert("Vui lòng chọn loại khách hàng.");
        return;
    }
    if (loaiKhachHang === "nhaDan") {
        tienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
    } else if (loaiKhachHang === "doanhNghiep") {
        tienCap = 15 + 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0) + 50 * soKenhCaoCap;
    }
    document.getElementById("ketQua4").innerHTML = `Số tiền cáp của mã khách hàng: ${maKhachHang} phải trả là: ${tienCap.toLocaleString('us', {
        style: 'currency',
        currency: 'USD',
    })}`;
}














