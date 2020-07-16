<template>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide>
            <resume-info :to="this"></resume-info>
        </swiper-slide>
        <swiper-slide>
            <resume-works></resume-works>
        </swiper-slide>
        <swiper-slide>
            <resume-skill></resume-skill>
        </swiper-slide>
        <swiper-slide>
            <resume-self></resume-self>
        </swiper-slide>
        <swiper-slide>
            <resume-contact></resume-contact>
        </swiper-slide>
        <div id="pag" class="swiper-pagination" slot="pagination" ref="pag"></div>
    </swiper> 
</template>

<script>
import ResumeInfo from './components/Info'
import ResumeSkill from './components/Skill'
import ResumeSelf from './components/Self'
import ResumeContact from './components/Contact'
import ResumeWorks from './components/Works'
export default {
  name: 'Info',
    components: {
        ResumeInfo,
        ResumeSkill,
        ResumeSelf,
        ResumeContact,
        ResumeWorks
    },
    data() {
        return {
            swiperOption: {
                pagination : '.swiper-pagination',
                slidesPerView :'auto',
                direction:'vertical',
                grabCursor:true,
                autoplayDisableOnInteraction:false,
                mousewheelControl:true,
                autoHeight:true,
                speed:800,
                paginationClickable :true,
                onInit: function(swiper){
                    const style = swiper.activeIndex
                    const pag = document.getElementById("pag").classList
                    pag.add("swiper-pagination-white")
                },
                onSlideChangeEnd: function(swiper){
                    const style = swiper.activeIndex
                    const pag = document.getElementById("pag").classList
                    if(style === 0 || style === 2){
                        pag.add("swiper-pagination-white")
                        pag.remove("swiper-pagination-black")
                    }else if(style === 1 || style === 3 || style === 4){
                        pag.add("swiper-pagination-black")
                        pag.remove("swiper-pagination-white")
                    }
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>