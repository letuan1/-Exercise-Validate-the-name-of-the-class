function className(src) {
    src = prompt("nhập tên để kiểm tra xem có hợp lệ không");
    rexg = /^[C,A,P]{1}[0-9]{4}[G,H,I,K,L,M]{1}$/;
    if (rexg.test(src)){
        alert("tên hợp lệ")
    } else {
        alert("tên không hợp lệ")
    }
}
className();