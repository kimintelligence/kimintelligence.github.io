// 모달 열기
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // 뒷배경 스크롤 막기
}

// 모달 닫기
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 다시 허용
}

// 모달 바깥 클릭 시 닫기
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
