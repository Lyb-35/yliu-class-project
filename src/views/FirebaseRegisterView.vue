<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Create an Account</h1>
        <form @submit.prevent="register">
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
          <button class="w-100 btn btn-lg btn-primary" type="submit">Save to Firebase</button>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("")
const password = ref("")
const rememberMe = ref(false);
const router = useRouter()
const auth = getAuth()

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log("Firebase Register Successful!")
        router.push("/FireLogin")
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>

<style>

</style>


