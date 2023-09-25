// info 
console.log("Time Start: 06:48 | 25/09/2023 |Nguyen Hoang Hop")
console.log("Time End: 06:48 | 25/09/2023 |Nguyen Hoang Hop")
// Bài tập #1
function tinhKetQua(){
    var diemChuan = parseFloat(document.getElementById("diem-chuan").value);
    var diemMon1 = parseFloat(document.getElementById("diem-mon-1").value);
    var diemMon2 = parseFloat(document.getElementById("diem-mon-2").value);
    var diemMon3 = parseFloat(document.getElementById("diem-mon-3").value);
    var khuVucSelect = document.getElementById("khu-vuc");
    var khuVucDaChon = parseFloat(khuVucSelect.value);
        
    var doiTuongSelect = document.getElementById("doi-tuong");
    var doiTuongDaChon = parseFloat(doiTuongSelect.value);
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVucDaChon + doiTuongDaChon ;
    diemChuan = tongDiem;
    if (diemChuan >= 30 ){
        document.getElementById("ket-qua").innerText=(`Tổng Điểm Của Bạn Là: ${tongDiem} Bạn đã trúng tuyển 😱 `)
    }else {
       document.getElementById("ket-qua").innerText=(`Tổng Điểm Của Bạn Là: ${tongDiem} Ôi không bạn đã trượt 😭 `)
    }

}
// Bài tập #2 
function tinhTienDien(){
    var hoTen = document.getElementById("ho-ten").value;
    var soKW = parseFloat(document.getElementById("so-kw").value);
    var tienDien = 0;
    if (soKW <= 50) {
        tienDien = soKW * 500; // 500đ /1 kww
        // done 
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + ( soKW - 50 )*650 ; // 650đ/kw
        // done 
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850; //850/kw
        //  done 
    }else if (soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200 ) * 1100;
    }else{
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 +  150 * 1100 + (soKW-350) *1300;
    }
    document.getElementById("tongtiendien").innerText = `Tổng Tiền Điện Của Khách Hàng ${hoTen} Là: ${tienDien.toLocaleString()} VND`;
}
// Bài tập #3 😭 
function tinhThue(){
    var nguoiDongThue = document.getElementById("nguoi-dong-thue").value;
    var tongThuNhap = document.getElementById("thu-nhap-nam").value;
    var nguoiPhuThuoc = document.getElementById("nguoi-phu-thuoc").value;
    var tienPhuThuoc = 1600000;
    var tienMienThue = 4000000;
    var tienPhaiDong = 0;
    var truocThue = tongThuNhap - tienMienThue  - (nguoiPhuThuoc*tienPhuThuoc) ;
    if(tongThuNhap < 6e6) { // 60m
        tienPhaiDong = 0;
    } else if (tongThuNhap == 60000000) {
        tienPhaiDong =  truocThue *0.05;
    } else if (tongThuNhap >= 60000000 && tongThuNhap <= 120000000) {
        tienPhaiDong =  truocThue * 0.1 ;
    } else if (tongThuNhap >= 120000001 && tongThuNhap <= 210000000) {
        tienPhaiDong =  truocThue * 0.15 ;
    } else if (tongThuNhap >= 210000001 && tongThuNhap <= 384000000) {
        tienPhaiDong =  truocThue * 0.2 ;
    }else if (tongThuNhap >= 384000001 && tongThuNhap <= 624000000) {
        tienPhaiDong =  truocThue * 0.25 ;
    }
    else if (tongThuNhap >= 624000001 && tongThuNhap <= 960000000) {
        tienPhaiDong =  truocThue * 0.30 ;
    } else  {
        tienPhaiDong =  truocThue * 0.35 ;
    }
     
    
    document.getElementById("tong-tien-thue").innerText = `Tổng Tiền Thuế Của Người Dân: ${nguoiDongThue} Là: ${tienPhaiDong.toLocaleString()} VND`;

}

// bài tập 4 🥹
// display 
var loaiKhachHang = document.getElementById("loaiKhachHang");
var soKetNoiCap = document.getElementById("soKetNoiCap");
loaiKhachHang.addEventListener("change", function() {
    if (loaiKhachHang.value === "doanhNghiep") {
        soKetNoiCap.style.display = "block";
    } else {
        soKetNoiCap.style.display = "none";
    }
});
// tinhTienCap
function tinhTienCap(){

var soKetNoiDoanhNghiep = document.getElementById("soKetNoiDoanhNghiep").value;
var maKhachHang = document.getElementById("maKhachHang").value;
var kenhCaoCap = document.getElementById("kenhCaoCap").value;
var loaiKhach = loaiKhachHang.value;
var tongTien = 0;
var phiXuLyDN = 15;
var giaCaoCapDN = 50;
var phiXuLy = 4.5;
var giaCaoCap = 7.5;

if (loaiKhach == "caNhan"){
    var dVCoBan = 20.5;
    
    tongTien = dVCoBan + phiXuLy + (kenhCaoCap*giaCaoCap);
   

} else if (loaiKhach == "doanhNghiep"){
    
    if (soKetNoiDoanhNghiep == 10){
        dVCoBan = 75;
        tongTien = dVCoBan + phiXuLyDN + (kenhCaoCap*giaCaoCapDN);
       

    } else if (soKetNoiDoanhNghiep > 10){
        var ketNoiThem = soKetNoiDoanhNghiep - 10;
        dVCoBan = 75 + ketNoiThem * 5;
        tongTien = dVCoBan + phiXuLyDN + (kenhCaoCap*giaCaoCapDN);
       
    } else{

        Swal.fire('Số kết nối của doanh nghiệp phải lớn hơn hoặc bằng 10 kết nối')

    }
    
  
    
} else {
    console.log(`Không hợp lệ nè ní`)
}
document.getElementById("tong-tien-cap").innerText = `Tổng Tiền Cap Của Mã Khách Hàng: ${maKhachHang} Là: ${tongTien.toLocaleString()} VND`;      
}

