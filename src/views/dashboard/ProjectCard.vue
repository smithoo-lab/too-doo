<template>
    <div class="project-card" :style="cardColor">
        <strong>{{ project.name }}</strong>
        <p>{{ project.desc}}</p>
    </div>
</template>

<script>
import { colorUtil } from '@/utils';

export default {
    props: {
        project: Object,
    },
    computed: {
        cardColor() {
            const backgroundColor = colorUtil.getRandomBrightColor();
            return { backgroundColor };
        },
    },
};
</script>

<style scoped>
.project-card {
    display: inline-block;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    transition: transform .5 ease-out;
    transform: scale(1);
    cursor: pointer;
    padding: 12px 15px;
    box-sizing: border-box;
    color: 333;
}
.project-card:hover {
    transform: scale(1.05);
}
.project-card strong {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
}
.project-card p {
    margin-top: 6px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
