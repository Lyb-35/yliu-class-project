<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Sign in</h1>
          <form @submit.prevent="signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" v-model="rememberMe" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in via Firebase</button>
            <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    </div>
  
  </template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";
const email = ref("")
const password = ref("")
const router = useRoute()
const auth = getAuth()
const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
        console.log("Firebase Register Successful!")
        router.push("/")
        console.log(auth.currentUser) // To check the current User signed in 
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>