import { createStore } from 'vuex'
import {setUserToken , getUsername , getToken , clearUserToken} from '../plugins/cookie.js'

export default createStore({
    state:{
        username:getUsername(),
        token:getToken()
    },
    getters:{

    },
    mutations:{
        // 登录 注册cookie
        login(state,{username , token}){
            state.username = username;
            state.token = token;

            setUserToken(username,token)
        },
        // 退出登录
        logout(state){
            state.username = " ";
            state.token = " ";

            clearUserToken();
        }
    },
    actions:{

    },
    modules:{

	},
})