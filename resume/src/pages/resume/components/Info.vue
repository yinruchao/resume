<template>
    <el-container>
        <el-header height="50px">
            <img src="~img/logo1.png" alt="">
            <el-link type="info" :underline="false" @click="slide(0)">首页</el-link>
            <el-link type="info" :underline="false" @click="slide(1)">作品</el-link>
            <el-link type="info" :underline="false" @click="slide(2)">技能</el-link>
            <el-link type="info" :underline="false" @click="slide(3)">荣誉</el-link>
            <el-link type="info" :underline="false" @click="slide(4)">联系</el-link>
            <div class="space"></div>
            <el-dropdown>
                <span class="el-dropdown-link">
                   <el-button icon="el-icon-menu" plain></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><el-link type="info" :underline="false" @click="slide(0)">首页</el-link></el-dropdown-item>
                    <el-dropdown-item><el-link type="info" :underline="false" @click="slide(1)">作品</el-link></el-dropdown-item>
                    <el-dropdown-item><el-link type="info" :underline="false" @click="slide(2)">技能</el-link></el-dropdown-item>
                    <el-dropdown-item><el-link type="info" :underline="false" @click="slide(3)">荣誉</el-link></el-dropdown-item>
                    <el-dropdown-item><el-link type="info" :underline="false" @click="slide(4)">联系</el-link></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-footer height="calc(100vh - 50px)">
            <img src="~img/ren.png" alt="">
            <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
                <ul>
                    <li v-for="item in listData" :key="item.id">
                       {{item.date}}
                    </li>
                </ul>
            </vue-seamless-scroll>
        </el-footer>
    </el-container>
    
</template>

<script>
export default {
    name: 'ResumeInfo',
    props: ["to"],
    data () {
        return {
            listData: [{
                   'id': '0001',
                   'date': '姓名：尹如超'
                 }, {
                    'id': '0002',
                    'date': '出生日期：1996.12'
                 }, {
                     'id': '0003',
                     'date': '求职意向：前端工程师'
                 }, {
                     'id': '0004',
                     'date': '教育经历：淮阴工学院'
                 }, {
                     'id': '0005',
                     'date': '学历专业'
                 },{
                     'id': '0006',
                     'date': '本科/电气工程及其自动化'
                 },{
                     'id': '0007',
                     'date': '联系电话：18252579650'
                 } , {
                    'id': '0008',
                     'date': '联系邮箱'
             }, {
                    'id': '0009',
                     'date': '1433538263@qq.com'
             }]
        }
    },
    computed: {
        optionSingleHeight () {
            return {
                singleHeight: 47.52,
                waitTime: 2500,
                hoverStop:false,
            }
        }
    },
    methods: {
        slide (index) {
            this.to.$refs.mySwiper.$swiper.slideTo(index, 1000, false)
            const style = this.to.$refs.mySwiper.$swiper.activeIndex
            const pag = this.to.$refs.pag.classList
            if(style === 0 || style === 2){
                pag.add("swiper-pagination-white")
                pag.remove("swiper-pagination-black")
            }else if( style === 1 || style === 3 || style === 4){
                pag.add("swiper-pagination-black")
                pag.remove("swiper-pagination-white")
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-container
        background url("~img/sec1_bg.jpg") no-repeat center
        background-size cover
        color rgba(255,255,255,0.8);
        .el-header
            display flex
            align-items center
            img 
                width 30px
            .el-link 
                padding 20px
                font-size 11px
            .space
                flex-grow 1
            .el-dropdown
                .el-button
                    font-size 25px
                    padding 2px
                    background  none
                    border-color #606266
        .el-footer
            display flex
            flex-direction column
            justify-content center
            align-items  center
            img
                width 70px
                height 70px
                border-radius 50%
                padding 5px
                border 1px solid #606266
                margin-bottom  30px
            .seamless-warp 
                height: 150px;
                overflow: hidden;
                font-size 28px
                ul li
                    text-align center
                    padding 8px 0
@media all and (max-width: 480px)
    .el-container
            .el-header
                positon relative
                justify-content center
                img 
                    width 45px
                .el-link   
                    display none
                .space
                    display none 
                .el-dropdown
                    position absolute 
                    right 20px 
                    top 8px 
            .el-footer    
                .seamless-warp 
                    height: 250px;    
    

</style>