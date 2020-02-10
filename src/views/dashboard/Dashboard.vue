<template>
    <div class="dashboard">
        <ProjectCard v-for="project in projects"
            :key="project.id"
            :project="project">
        </ProjectCard>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    components: { ProjectCard },
    data() {
        return {
            projects: [
                // TODO: Load data from server
                { id: '1', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '2', name: 'project2', desc: 'dlfdks dkfsl dlsd sl d d dljksl dk ls dfdsfsdf' },
                { id: '3', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '4', name: 'project2', desc: 'dlfdks dkfsl dlsd sl d d dljksl dk ls dfdsfsdf' },
                { id: '5', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '6', name: 'project2', desc: 'dlfdks dkfsl dlsd sl d d dljksl dk ls dfdsfsdf' },
                { id: '7', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '8', name: 'project2', desc: 'dlfdks dkfsl dlsd ㅇㄹㅁㄴㅇㄹ ㅇㄴㅁㄹㄴㅁㅇ ㄹㅁㄴㅇ ㄹㅇㄴㅁ ㄹㅁ ㄴㅇㅁ ㄹㄴㅁ ㄴㅇ ㄹㄴㅁ sl d d dljksl dk ls dfdsfsdf' },
                { id: '9', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '12', name: 'project2', desc: 'dlfdks dkfsl dlsd sl d d dljksl dk ls dfdsfsdf' },

            ],
        };
    },
};
</script>

<style scoped>
.dashboard {
    padding: 36px 50px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: #faffed;
    box-sizing: border-box;
}
</style>
