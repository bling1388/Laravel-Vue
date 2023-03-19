<script setup>

import { useRouter } from "vue-router"

const router = useRouter();

const logout = () => {
    localStorage.removeItem('token')
    router.push('/')

}
</script>

<template>       
<h1>welcome to admin</h1> 

    <div>
        <router-link to="/" >Home page</router-link>
    </div>

    <button @click="logout">Log out</button>
</template>