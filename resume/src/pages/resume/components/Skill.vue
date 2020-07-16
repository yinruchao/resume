<template>
    <el-container>
        <el-header height="100px">
            <h1>我的技能</h1>
            <h4>skill</h4>
        </el-header>
        <el-footer height="calc(100vh - 100px)">
            <ul>
                <li>
                    <div>
                        <p class="iconfont" style="color:#F56C6C">&#xe620;</p>
                        <p>HTML</p>
                    </div>
                    <div>熟悉HTML，理解Web标准以及标签语义化。了解HTML 5新特性，掌握新增语义化标签，媒体标签及标签属性等。</div>
                </li>
                <li>
                    <div>
                        <p class="iconfont" style="color:#409EFF">&#xe61e;</p>
                        <p>CSS</p>
                    </div>
                    <div>熟悉CSS，理解视觉格式化，盒模型，BFC，浮动和定位。熟悉CSS 3新特性，掌握新增选择器，转换，过渡，动画等。掌握浮动+定位布局及flex布局，掌握响应式页面。</div>
                </li>
                <li>
                    <div>
                        <p class="iconfont" style="color:#E6A23C">&#xe676;</p>
                        <p>JavaScript</p>
                    </div>
                    <div>熟悉Javascript，掌握基本DOM操作，理解事件模型，熟悉ajax，jsonp，跨域，闭包，原型链,了解面向对象编程思想。</div>
                </li>
                <li>
                    <div>
                        <p class="iconfont" style="color:#67C23A">&#xe799;</p>
                        <p>Vue</p>
                    </div>
                    <div>了解Vue，了解数据绑定，计算属性，模板渲染，指令，过渡，组件，组件间通信等。了解使用Vue-cli，Vue-router，axios及webpack等构建Vue单页应用。</div>
                </li>
            </ul>
        </el-footer>
    </el-container>
    
</template>

<script>
export default {
    name: 'ResumeSkill',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-container
        background url("~img/chalkboard.jpg") no-repeat center
        background-size cover
        color #DCDFE6
        .el-header
            text-align center
        .el-footer 
            ul
                display flex
                min-width 100%
                width 100%
                flex-wrap wrap
                align-items center
                height calc(100vh - 100px)
                li
                    flex 0 0 50%
                    display flex
                    justify-content center
                    text-align:justify
                    div:first-child
                        flex 0 0 30%
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center
                        p:first-child
                            font-size 50px           
                    div:last-child
                        text-indent 32px
                        flex 0 0 40%
                        line-height 1.4
@media all and (max-width: 1000px)
    .el-container
        .el-footer
            ul
                flex-direction column
                justify-content  space-around
                li  
                    flex 0 1 auto
                    display block
                    div:first-child
                        flex 0 1 auto
                        padding-bottom 8px
                        p:first-child
                            font-size 30px
                    div:last-child
                        text-indent 28px
                        flex 0 1 auto
                        font-size 14px
                        line-height 1.2

@media all and (max-width: 1000px) and (min-width: 750px)
    .el-container
        li
            div:last-child
                text-align center
                text-indent 0px

</style>