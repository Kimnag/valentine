let wrongCount = 0; // đếm số lần nhập sai

function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "1911"; // 🔑 mật khẩu
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
  } else {
    wrongCount++;

    if (wrongCount === 1) {
      error.innerText = "Sai rồi bạn ê";
    } else if (wrongCount === 2) {
      error.innerText = "Gợi ý: là một ngày trong năm";
    } else {
      error.innerText = "Chán bạn thí";
    }
  }
}
