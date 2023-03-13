<template>
    <section>
        <div>
            <h1>Login to this app</h1>
            <div class="w-1/4 m-10">
                <input class="m-1 ring-1 focus:ring-2 w-full" type="email" v-model="email">
                <input class="m-1 ring-1 focus:ring-2 w-full" type="password">
                <button class="m-1 ring-1 focus:ring-2 hover:bg-blue-900 w-full bg-red-200  hover:bg-red-400 " @click="loginAction">Login</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import router from '../router';

import {userStore} from '../store/user_store'



const user = userStore()

const email = ref('')

function loginAction() {
    user.$patch({name: email.value})
    router.push('/')
    
}

</script>