import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes : [
        {
            path : "/",
            name : "HomePage",
            component : () => import("@/views/HomePage"),
            meta : {
                authRequired : false
            }
        },
        {
            path : "/about",
            name : "AboutPage",
            component : () => import("@/views/AboutPage"),
            meta : {
                translationKey : "about_page",
                authRequired : true
            }
        },
        {
            path : "/about/:contentID/",
            name : "AboutPageWithParam",
            component : () => import("@/views/AboutPage"),
            meta : {
                translationKey : "about_page",
                authRequired : true
            }
        },
        {
            path : "/login",
            name : "LoginPage",
            component : () => import("@/views/LoginPage"),
            meta : {
                authRequired : false
            }
        },
        {
            path : "/contact",
            name : "ContactPage",
            component : () => import("@/views/ContactPage"),
            children : [
                {
                    path : "update",
                    name : "ContactUpdate",
                    component : () => import("@/views/Contacts/ContactUpdate")
                },
                {
                    path : "list",
                    name : "ContactList",
                    component : () => import("@/views/Contacts/ContactList")
                },
                {
                    path : "new",
                    name : "ContactNew",
                    component : () => import("@/views/Contacts/ContactNew")
                }
            ],
            meta : {
                authRequired : true
            }
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component : () => import("@/views/NotFound")},
    ],
    history : createWebHistory(),
    // mode : "hash | history"
})


router.beforeEach((to, from,next) => {
    // console.log(`${from.name} => ${to.name}`)
    // console.log("authRequired", to.meta.authRequired)
    next();
    const isAuthenticated = false;
    const authRequiredForRoute = to.meta.authRequired

    if(authRequiredForRoute){
        if(isAuthenticated){
            next()
        } else {
            next({ name : "LoginPage"})
        }
    } else {
        next();
    }
})

export default router;
