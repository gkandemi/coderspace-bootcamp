import {createRouter, createWebHistory} from 'vue-router'
import AppHeader from "@/components/AppShared/AppHeader";
import store from "@/store";

const routes = [
    {
        path: "/",
        name: "HomeView",
        // component: () => import("@/views/HomeView")
        components: {
            default: () => import("@/views/HomeView"),
            AppHeader
        }
    },
    {
        path: "/question/:id",
        name: "QuestionDetailView",
        // component: () => import("@/views/QuestionDetailView")
        components: {
            default: () => import("@/views/QuestionDetailView"),
            AppHeader
        }
    },
    {
        path: "/favorites",
        name: "MyFavoritesView",
        meta: {authRequired: true},
        // component: () => import("@/views/User/Authenticated/FavoritesView"),
        components: {
            default: () => import("@/views/User/Authenticated/MyFavoritesView"),
            AppHeader
        }
    },
    {
        path: "/my-account",
        name: "MyAccountView",
        meta: {authRequired: true},
        // component: () => import("@/views/User/Authenticated/MyAccountView"),
        components: {
            default: () => import("@/views/User/Authenticated/MyAccountView"),
            AppHeader
        }
    },
    {
        path: "/my-questions",
        name: "MyQuestionsView",
        meta: {authRequired: true},
        // component: () => import("@/views/User/Authenticated/MyQuestionsView"),
        components: {
            default: () => import("@/views/User/Authenticated/MyQuestionsView"),
            AppHeader
        }
    },
    {
        path: "/new-question",
        name: "NewQuestionView",
        meta: {authRequired: true},
        // component: () => import("@/views/User/Authenticated/NewQuestionView"),
        components: {
            default: () => import("@/views/User/Authenticated/NewQuestionView"),
            AppHeader
        }
    },
    // No Header
    {
        path: "/login",
        name: "LoginView",
        component: () => import("@/views/User/LoginView")
    },
    {
        path: "/register",
        name: "RegisterView",
        component: () => import("@/views/User/RegisterView")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, _, next) => {
    const isAuthenticated = store.getters["users/isAuthenticated"]
    const authRequired = to.meta?.authRequired;
    // Eğer Gidilmek istenen Sayfa Auth gerekiyorsa ve Kullanıcı Giriş Yapmışsa o zaman devam et
    if (authRequired) {
        if (isAuthenticated) return next();
        return next({name: "LoginView"})
    }

    if (isAuthenticated) {
        if (["LoginView", "RegisterView"].includes(to.name)) {
            return next({ name : "HomeView"})
        }
    }
    if (!authRequired) next(); // Eğer Gidilmek istenen Sayfa Auth GEREKMİYORSA  o zaman başka bir şeye bakmadan devam et

})

export default router
