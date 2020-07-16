<template>
    <el-container>
        <el-header height="100px">
            <h1>个人荣誉</h1>
            <h4>personal honor</h4>
        </el-header>
        <el-footer class="honor" height="calc(50vh - 100px)">
            <div>
                <p>2015年-2016年</p>
                <p>全国计算机信息高新技术考试计算机组装与维护职业资格四级证书，全国计算机信息高新技术考试PS职业资格四级证书，校二等奖学金；</p>
                <p>2016年-2017年</p>
                <p>江苏省高等职业院校职业技能大赛计算机网络应用项目二等奖（H3C杯）、校二等奖学金，计算机技术与软件专业技术资格（水平）考试网络工程师证书；</p>
                <p>2017年-2018年</p>
                <p>江苏省高等职业院校职业技能大赛计算机网络应用项目二等奖（中锐网络杯）、校优秀毕业生；</p>
            </div>
        </el-footer>
        <el-header height="100px">
            <h1>自我评价</h1>
            <h4>self-assessment</h4>
        </el-header>
        <el-footer class="assessment" height="calc(50vh - 100px)">
            <div>
                <p>热爱编程，熟悉Html、Css、JavaScript等语言；熟悉基本的数据结构与算法；希望在3年内称为独立的前端工程师。</p>
                <p>工作认真负责，不推卸责任，能承受工作中的压力。具有团队精神，能与同事，其它部门积极配合。为人诚实，正直且好学上进，能不断提高自己工作能力。</p>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'ResumeSelf',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-container
        background #f7f7f7;
        color #606266
        .el-header
            text-align center
        .el-footer
            line-height 1.5
            div
                font-size 15px
                padding 30px 
                text-align center
@media all and (max-width: 480px)
    .el-container
        .el-footer
            line-height 1.3
            div
                padding 10px 
                font-size 14px
        .honor
            div
                p:nth-child(2n)
                    text-align left 
                    text-indent 28px
        .assessment
            div
                p
                    text-align left 
                    text-indent 28px
@media all and (max-width: 321px)
    .el-container
        .el-footer
            line-height 1.2
            div
                padding 10px 
                font-size 12px
        .honor
            div
                p:nth-child(2n)
                    text-align left 
                    text-indent 24px
        .assessment
            div
                p
                    text-align left 
                    text-indent 24px
</style>