<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="row mb-3">
            <label for="username" class="form-Label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              @blur="() => validateName(true)"
              @input="() => validateName(false)"
              v-model="formData.username"
            />
            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
          </div>
          <div class="row mb-3">
            <label for="password" class="text-Label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              @blur="() => validatePassword(true)"
              @input="() => validatePassword(false)"
              v-model="formData.password"
            />
            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="isResearcher"
                v-model="formData.isResearcher"
              />
              <label class="form-check-label" for="isResearcher">I am a researcher</label>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
          </div>
        </form>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const formData = ref({
  username: '',
  password: '',
  isResearcher: false
})

const errorMessage = ref('')

const handleLogin = () => {
  validateName(true)
  validatePassword(true)

  if (!errors.value.username && !errors.value.password) {
    const storedUserData = JSON.parse(localStorage.getItem('user') || '{}')

    if (
      formData.value.username === storedUserData.username &&
      formData.value.password === storedUserData.password &&
      formData.value.isResearcher === storedUserData.isResearcher // Check researcher status
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/about')
    } else {
      errorMessage.value = 'Invalid username or password.'
    }
  }
}

const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (formData.value.username < 3) {
    if (blur) errors.value.username = 'Name must be st least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = 'Password must be at least ' + minLength + ' characters long.'
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  margin-bottom: 1em;
}

.error {
  color: red;
  margin-top: 1em;
}

.error {
  color: red;
  margin-top: 1em;
}

.form-check {
  margin-bottom: 1em;
}

.form-check-input {
  margin-right: 0.5em;
}
</style>
