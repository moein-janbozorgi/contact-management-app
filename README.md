# Contact Management App

یک اپلیکیشن ساده و کارآمد برای مدیریت مخاطبین، ساخته‌شده با React, react-hook-form, و yup.
این پروژه امکان افزودن، ویرایش، حذف تکی و حذف گروهی کاربران را فراهم می‌کند و از json-server به عنوان Backend موقت استفاده می‌کند.

## ویژگی‌ها:

➕ افزودن کاربر جدید

✏️ ویرایش اطلاعات کاربر

❌ حذف تکی کاربر

🗑️ حذف گروهی کاربران

✅ اعتبارسنجی فرم‌ها با yup و react-hook-form

⚡ ساختار ماژولار و قابل توسعه

# پیش نیاز ها:

Node.js نسخه 14 یا بالاتر

npm یا yarn

یک سرور backend موقت (در این پروژه json-server روی پورت 4000 استفاده می‌شود)

# ساختار:

├── components/ # کامپوننت‌های React (Contacts، EditContact و ...)
├── Context/ # مدیریت وضعیت با Context API و Reducer
├── services/ # درخواست‌های API با axios
├── utils/ # کدهای کمکی و schemaهای اعتبارسنجی
├── constants/ # داده‌های ثابت مثل فیلدهای فرم
├── styles/ # فایل‌های CSS Modules
└── App.js # ورودی اصلی برنامه

# نحوه اجرای برنامه :

1️⃣- پروژه را کلون کنید

git clone https://github.com/moein-janbozorgi/contact-management-app.git
cd contact-management-app

2️⃣-

npm install

3️⃣ اجرای سرور json-server:

json-server --watch db.json --port 4000

4️⃣ اجرای برنامه

npm run dev

# نمونه داده db.sjon:

{
"contacts": [
{
"id": 1,
"name": "Ali Reza",
"email": "ali@example.com",
"phone": "09121234567"
}
]
}

# 🖼️ پیش‌ نمایش

![نمایی از برنامه](https://imgur.com/a/9dkXWdo.png)

# اطلاعات تماس

شماره همراه 09370952694
ایمیل : moeinjanb84@gmail.com
