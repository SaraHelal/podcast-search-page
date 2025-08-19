# 🎧 Podcast Search Project

## 📌 وصف المشروع

مشروع **Podcast Search** يسمح بالبحث عن البودكاست والحلقات باستخدام **iTunes Search API**.

- **Backend**: NestJS + MongoDB
- **Frontend**: Next.js + TailwindCSS
- البحث يخزن النتائج في قاعدة البيانات لتقليل طلبات الـ API المتكررة.

---

## 📂 هيكل المشروع

```
podcast-search/
│
├── backend/          # NestJS (REST API)
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/         # Next.js + Tailwind
│   ├── pages/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 🚀 خطوات التشغيل محليًا

### 1. Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

- يشتغل على: `http://localhost:3001`
- الـ endpoint الأساسي:

```
GET http://localhost:3001/search?q=كلمة_البحث
```

### 2. Frontend (Next.js + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

- يشتغل على: `http://localhost:3000`
- يتواصل مع الباك إند ويعرض النتائج.

---

## 🗄️ قاعدة البيانات

- المشروع يستخدم **MongoDB Atlas** (Free Tier).
- ضع **connection string** في **backend/.env**:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/podcast_search
```



---

##

---

##
