<template>
    <div>
        <nav>
            <ul class="flex space-x-3">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link  to="/about">About</router-link>
                </li>
                <li  class="absolute right-5"><span>
                    Welcome {{ user.name }}
                </span></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
    
</template>

<script setup lang="ts">

import {userStore} from '../store/user_store'


const user = userStore()

</script>