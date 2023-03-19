
<script setup>
import { reactive } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

let form = reactive({
    email: '',
    password: '',
})

// let error = ref('')

const login = async() =>{
    await axios.post('/api/login', form)
    .then(response =>{
        if (response.data.success) {
            localStorage.setItem('token', response.data.data.token);
            router.push('/admin/home')
        }else{
            error.value = response.data.message;
        }
    })
}
</script>
<template>
    <div class="login">
        <div class="formLogin">
        <p class="text-danger" v-if="error">{{ error }}</p>
            <form  @submit.prevent="login">
                <input type="email" placeholder="Enter your email" v-model="form.email">
                <br>
                <input type="password" placeholder="Enter your password" v-model="form.password">
                <br>
                <input type="submit" value="Login" class="submit">
            </form>
        </div>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira sans' sans-serif;
    font-size: 16px;
}

.login{
    background: #6c5ce7;
    margin: 0;
    padding: 0;
    width: 100%;
    /* height: 100vh; */
}

.formLogin{
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    width: 22.8em;
    height: 55em;
    margin:0 auto 0 auto;
    overflow: hidden;
}

input{
background: rgba(228, 232, 243, 0.8);
background-position: 0.5em 0.6em;
border: none;
color: rgba(80, 80, 80, 1);
padding:0 0 0 4rem ;
margin: 0 0 1em 0;
width: 200em;
height:2.8em ;
outline: none;
transition: background-color 0.4s;
}

input:hover{
    background-color: rgba(255, 255, 255, 255);
}
input:focus{
    background-color: rgba(255, 255, 255, 255);
}

.submit{
    color: rgba(35, 35, 35, 0.8);
    background:rgba(220, 220, 220, 1) ;
    padding: 0;
    margin: 2.5em 0 0 7em;
    width: 10em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.4s;
}

.submit:hover{
    background: #43467f;
    color: #ffffff;
}
.submit:focus{
    background: #43467f;
    color: #ffffff;
}

.text-danger{
    color: red;
    font-size: 16px;
}
</style>