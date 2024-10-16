<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <div class="alert alert-danger" role="alert">
          <h1 class="display-4">Access Denied</h1>
          <p class="lead">You must be logged in to view this page.</p>
          <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
