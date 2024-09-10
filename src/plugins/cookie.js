import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();

// github.com/KanHarl/vue3-cookies



// 获取Token
export const getToken = () =>{
    return cookies.get("token") || "";
}

export const getUsername = () =>{
    return cookies.get("username") || "没有任何用户";
}

// 设置
export const setUserToken = (user , token) =>{
    cookies.set("username",user,"10s");
    cookies.set("token",token,"10s");
}


// 删除
export const clearUserToken = () =>{
    cookies.remove("username");
    cookies.remove("token")
}