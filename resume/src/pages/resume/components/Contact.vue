<template>
    <el-container>
        <div>
            <h1>联系我</h1>
            <h4>contact me</h4>
        </div>
        <el-footer height="100vh">
            <ul>
                <router-link to="/wx" target="_blank">
                    <li class="iconfont" style="color:green" on:mouseover="">&#xe61a;</li>
                </router-link>
                <router-link to="/qq" target="_blank">
                    <li class="iconfont" style="background:#4da7de;color:white">&#xe667;</li>
                </router-link>
                <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Dj86PT07PTY8OD1Of38gbWFj">
                    <li class="iconfont" style="background:#64c5d6;color:white">&#xe65e;</li>
                </a>
                <a target="_blank" href="https://github.com/yinruchao">
                    <li class="iconfont" style="background:#dfdfdf;color:#606266">&#xea0a;</li> 
                </a>
            </ul>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'ResumeContact',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-container
        position relative
        background #f7f7f7;
        color #606266
        div
            position absolute
            text-align center
            top 0
            left 50%
            transform: translate(-50%, 0);
        .el-footer
            ul  
                height 100%
                display flex
                justify-content center
                flex-wrap wrap
                align-items center
                a
                    transition: all 1s 
                    border-radius 50%
                a:hover
                    background #DCDFE6
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)
                li  
                    width 60px
                    height 60px
                    line-height 60px
                    border-radius 50%
                    font-size 50px
                    text-align center
                    margin 10px
                    cursor pointer
                a:first-child li
                    font-size 60px
                    background #fff
                a:last-child li
                    font-size 40px
@media all and (max-width: 380px)
    .el-container
        .el-footer
            ul
                align-content center
            a
                flex 0 0 50%
                text-align center
                li
                    margin 0 auto
            a:nth-child(1)
                margin-bottom 30px
            a:nth-child(2)
                margin-bottom 30px
                
</style>