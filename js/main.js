Vue.createApp({
    data(){
        return{
            navigations:['Home','About','Work','Access','Contact'],
            members:[
            {id:1,name:'James',image:'./img/photo01.jpg',color:'lightbule'},
            {id:1,name:'Jonh',image:'./img/photo02.jpg',color:'lightbule'},
            {id:1,name:'Olivia',image:'./img/photo03.jpg',color:'lightpink'},
            {id:1,name:'Kelly',image:'./img/photo04.jpg',color:'lightpink'}
            ]
        }
    },
    methods:{

    }


}).mount('#app')