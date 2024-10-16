<!-- eslint-disable vue/multi-word-component-names -->
<!-- Form.vue -->
<template>
  <div class="containerd-flex mt-5 justify-content-center vh-100">
    <div class="row w-100">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Registrate</h1>
        <form @submit.prevent="submitForm" class="d-flex flex-column align-items-center">
          <div class="row mb-3 w-100">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
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
            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-Label">Password</label>
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
            <div class="col-md-6 col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <label for="gender" class="forn-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                v-model="formData.gender"
                @blur="() => validateGender(true)"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
          </div>
          <div class="row mb-3 w-100">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
            </div>
          </div>
          <div class="col-md-6">
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
          <div class="col-md-6 col-sm-6 w-100">
            <label for="age-group" class="form-label">Age Group</label>
            <select
              class="form-select"
              id="age-group"
              v-model="formData.ageGroup"
              @blur="() => validateAgeGroup(true)"
            >
              <option value="">Select Age Group</option>
              <option value="youth">Youth</option>
              <option value="middle-aged">Middle-aged</option>
              <option value="senior">Senior</option>
            </select>
            <div v-if="errors.ageGroup" class="text-danger">{{ errors.ageGroup }}</div>
          </div>
          <div class="col-md-6 col-sm-6 w-100">
            <label for="profession" class="form-label">Profession</label>
            <input
              type="text"
              class="form-control"
              id="profession"
              v-model="formData.profession"
              @blur="() => validateProfession(true)"
            />
            <div v-if="errors.profession" class="text-danger">{{ errors.profession }}</div>
          </div>
          <div class="col-md-6 col-sm-6 w-100">
            <label for="marital-status" class="form-label">Marital Status</label>
            <select
              class="form-select"
              id="marital-status"
              v-model="formData.maritalStatus"
              @blur="() => validateMaritalStatus(true)"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            <div v-if="errors.maritalStatus" class="text-danger">{{ errors.maritalStatus }}</div>
          </div>
          <div class="mb-3 w-100">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              @blur="() => validateReason(true)"
              @input="() => validateReason(false)"
              v-model="formData.reason"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
//import Column from 'primevue/column'
//import DataTable from 'primevue/datatable'
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  isResearcher: false,
  reason: '',
  gender: '',
  ageGroup: '',
  profession: '',
  maritalStatus: ''
})

//const submittedCards = ref([])

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  validateGender(true)
  validateReason(true)
  validateAgeGroup(true)
  validateProfession(true)
  validateMaritalStatus(true)

  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason &&
    !errors.value.ageGroup &&
    !errors.value.profession &&
    !errors.value.maritalStatus
  ) {
    // Save user data to localStorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: formData.value.username,
        password: formData.value.password,
        isResearcher: formData.value.isResearcher
      })
    )

    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    isResearcher: false, // Reset researcher status
    reason: '',
    gender: '',
    ageGroup: '',
    profession: '',
    maritalStatus: ''
  }
}

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  isAustralian: null,
  isResearcher: null, // Add error field for researcher status if needed
  gender: null,
  reason: null,
  ageGroup: null,
  profession: null,
  maritalStatus: null
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
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

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) errors.value.gender = 'Please select your gender.'
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  if (formData.value.reason.length < 10) {
    if (blur) errors.value.reason = 'Reason must be at least 10 characters long.'
  } else {
    errors.value.reason = null
  }
}

const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateAgeGroup = (blur) => {
  if (!formData.value.ageGroup) {
    if (blur) errors.value.ageGroup = 'Please select your age group.'
  } else {
    errors.value.ageGroup = null
  }
}

const validateProfession = (blur) => {
  if (!formData.value.profession) {
    if (blur) errors.value.profession = 'Please enter your profession.'
  } else {
    errors.value.profession = null
  }
}

const validateMaritalStatus = (blur) => {
  if (!formData.value.maritalStatus) {
    if (blur) errors.value.maritalStatus = 'Please select your marital status.'
  } else {
    errors.value.maritalStatus = null
  }
}

// Load submitted data from localStorage when the component is mounted
//loadSubmittedData()
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}

.data-table-header {
  background-color: #275fda;
  color: white;
}

.data-table-row {
  background-color: #f9f9f9;
  color: white;
}

.data-table-row:nth-child(even) {
  background-color: #e0e0e0;
}

.data-table-row:hover {
  background-color: #c1d8f0;
}
</style>
