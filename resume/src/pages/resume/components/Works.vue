<template>
    <el-container>
        <el-header height="100px">
            <h1>作品展示</h1>
            <h4>works</h4>
        </el-header>
        <el-footer class="honor" height="calc(100vh - 100px)">
            <ul>
               <li>
                    <a href="http://cv.yinruchao.cn/generator" target="_blank">
                        <i></i>
                        <div>
                            <h3>简历生成器</h3>
                            <p>应用技术：Vue ES6 Element swiper webpack等</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://cv.yinruchao.cn/Travel" target="_blank">
                        <i></i>
                        <div>
                            <h3>vue仿写去哪儿网</h3>
                            <p>应用技术：Vue swiper Vue-router  vuex axios webpack等</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://cv.yinruchao.cn/waterfall" target="_blank">
                        <i></i>
                        <div>
                            <h3>瀑布流布局</h3>
                            <p>应用技术：HTML CSS JavaScript</p>
                        </div>
                    </a>
                </li>       
                <li>
                    <a href="http://cv.yinruchao.cn/tourism" target="_blank">
                        <i></i>
                        <div>
                            <h3>旅游网</h3>
                            <p>应用技术：HTML CSS</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://cv.yinruchao.cn/mole" target="_blank">
                        <i></i>
                        <div>
                            <h3>打地鼠游戏</h3>
                            <p>应用技术：HTML CSS JavaScript</p>
                        </div>
                    </a>
                </li>
            </ul>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'ResumeWorks',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-container
        background #f7f7f7
        color #606266
        .el-header
            text-align center
        .el-footer
            padding 0
            max-width: 1200px;
            margin: 0 auto
            ul
                display flex
                flex-wrap wrap 
                justify-content space-around
                height 100%
                li
                    width 360px
                    a
                        display: block;
                        height: 300px;
                        color: #000;
                        overflow: hidden;
                        background rgb(240,239,238)
                        box-shadow: 0 2px 3px 0 #ddd
                        i
                            display block
                            width: 100%;
                            height: 250px;
                            background-repeat no-repeat 
                            background-position: center center
                        div
                            padding: 14px;
                            height: 200px;
                            background: rgba(255,255,255, 0.98)
                            transition: all 1s;
                            h3
                                margin 0 0 15px 0
                            p
                                color: #93999f
                li:nth-child(1) a i
                    background-image url('~img/work5.png')
                li:nth-child(2) a i
                    background-image url('~img/work3.png')
                li:nth-child(3) a i
                    background-image url('~img/work2.jpg')
                li:nth-child(4) a i
                    background-image url('~img/work1.jpg')
                li:nth-child(5) a i
                    background-image url('~img/work4.jpg')
                li:hover
                    a
                        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1)
                        div
                            transform: translateY(-30px)
                li:nth-child(1):hover,li:nth-child(2):hover
                    a
                        div
                            transform: translateY(-50px) 
@media all and (max-width: 480px)       
    .el-container
         .el-footer
            padding 0 18px
            ul
                li
                    width 340px
                    overflow hidden
                    background-size cover
                    a   
                        height 250px
                        i
                            height 200px
                            background-position top center        
                li:nth-child(3),li:nth-child(4),li:nth-child(5)
                    display none
@media all and (max-width: 1140px) and (min-width: 480px)     
    .el-container
         .el-footer
            ul       
                li:nth-child(5)
                    display none
                



                
                            
                
                    

</style>