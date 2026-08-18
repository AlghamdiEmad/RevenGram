document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // مثال بسيط للتجربة
  if (email === "" || password === "") {
    alert("الرجاء تعبئة جميع الحقول");
    return;
  }

  alert("تم تسجيل الدخول بنجاح!");
});
