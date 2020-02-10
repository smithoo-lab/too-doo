<template>
    <div class="auth-button">
        <div v-if="loggedIn">
            <!-- TODO: add profile and nickname from google account -->
            <button type="button">Sign out</button>
        </div>
        <div v-else>
            <button type="button">Sign in</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false,
        };
    },
};
</script>

<style scoped>
.auth-button {
    float: right;
}
.auth-button button {
    margin-top: 12px;
    border-radius: 3px;
    width: 80px;
    height: 36px;
    border: 1px solid #fff;
    line-height: 36px;
    text-align: center;
    box-sizing: border-box;
}
.auth-button button:hover {
    background-color: #30a471;
    box-shadow: 1px 1px 1px #ccc;
}
</style>
