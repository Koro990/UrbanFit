// انتظار تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  // تحديد جميع الأزرار
  const cartButtons = document.querySelectorAll(".add-to-cart");
  const favButtons = document.querySelectorAll(".add-to-favorite");
  const buyButtons = document.querySelectorAll(".buy");

  // زر "إضافة إلى السلة"
  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("✅ تم إضافة المنتج إلى السلة بنجاح!");
    });
  });

  // زر "المفضلة"
  favButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("❤️ تمت إضافة المنتج إلى المفضلة!");
    });
  });

  // زر "شراء"
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("💳 جاري تنفيذ عملية الشراء التجريبية!");
    });
  });
});
