<template>
    <div class="swiper-container">
        <swiper class="myswiper" :modules="modules" :slides-per-view="1.5" :space-between="10" :loop="false"
            :centered-slides="true" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="slide-content" :style="{
                    backgroundColor: transparent,
                }">
                    <img class="shichenimg" :src="`../../public/shichen/${slide.imgname}`" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// Import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const modules = ref([Autoplay]);

const slides = ref([
    {
        imgname: 'zishi.png',
    },
    {
        imgname: 'choushi.png',
    },
    {
        imgname: 'yinshi.png',
    },
    {
        imgname: 'maoshi.png',
    },
]);

const onSwiper = (swiper) => {
    console.log('Swiper instance:', swiper);

    // 添加缩放效果
    const updateSlideStyles = () => {
        // 等待DOM更新后再执行
        setTimeout(() => {
            const slides = document.querySelectorAll('.swiper-slide');
            if (slides.length === 0) return;

            slides.forEach((slideEl) => {
                const slideContent = slideEl.querySelector('.slide-content');
                if (!slideContent) return;

                // 检查是否是active slide (居中显示的)
                if (slideEl.classList.contains('swiper-slide-active')) {
                    // 中间的slide (当前显示的)
                    slideContent.style.transform = 'scale(1.1)';
                    slideContent.style.zIndex = '2';
                    slideContent.style.opacity = '1';
                } else if (
                    slideEl.classList.contains('swiper-slide-prev') ||
                    slideEl.classList.contains('swiper-slide-next')
                ) {
                    // 左右两边的slide
                    slideContent.style.transform = 'scale(0.9)';
                    slideContent.style.zIndex = '1';
                    slideContent.style.opacity = '0.9';
                } else {
                    // 其他slide
                    slideContent.style.transform = 'scale(0.9)';
                    slideContent.style.zIndex = '0';
                    slideContent.style.opacity = '0.6';
                }
            });
        }, 50);
    };

    // 监听slide变化事件
    swiper.on('slideChangeTransitionStart', updateSlideStyles);
    swiper.on('slideChangeTransitionEnd', updateSlideStyles);

    // 初始设置
    updateSlideStyles();
};

const onSlideChange = () => {
    console.log('Slide changed');
};
</script>

<style scoped>
.myswiper {
    overflow: visible !important;
}

.swiper-container {
    width: 100%;
    height: 100%;
    padding-top: 3.5vh;
    overflow: visible !important;
}

.slide-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 37vh;
    border-radius: 4vw;
    color: white;
    transition: all 0.3s ease;
    /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); */
    position: relative;
    overflow: hidden;
}

.shichenimg {
    width: auto;
    height: 100%;
    border-radius: 4vw;
}
</style>