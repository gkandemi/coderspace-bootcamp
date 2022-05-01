export const routes = [
    { path : "/", name : "HomePage", component : () => import("@/views/HomePage")},
    { path : "/giris", name : "LoginPage", component : () => import("@/views/LoginPage")},
    { path : "/kayit-ol", name : "RegisterPage", component : () => import("@/views/RegisterPage")},
    { path : "/yeni-makale", name : "NewArticle", component : () => import("@/views/NewArticle")},
]
