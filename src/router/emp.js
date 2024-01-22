export default [
    {
        // 회원관리
        path: "/emp",
        component: () => import(),
        children: [
            {
                // 입점사 공지 관리
                path: "emplist", //RULE :전부소문자로
                component: () => import("@/views/emp/EmpList.vue"),
            },
            {
                // 입점사 공지 등록
                path: "emplistdetail", //RULE :전부소문자로
                component: () => import("@/views/emp/EmpListDetail.vue"),
            },
        ]
    },
]