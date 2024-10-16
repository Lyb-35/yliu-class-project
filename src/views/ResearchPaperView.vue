<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Mental Health and Well-being</h2>
            <p class="card-text">
              Maintaining good mental health is essential for overall well-being. It's important to
              recognize the signs of stress and seek help when necessary. In this article, we
              explore various ways to improve mental health...
            </p>
          </div>
        </div>

        <div class="mt-4">
          <h3>Rate this article</h3>
          <div class="rating-container">
            <button
              v-for="rating in [1, 2, 3, 4, 5]"
              :key="rating"
              :class="['btn', rating <= selectedRating ? 'btn-primary' : 'btn-outline-primary']"
              @click="submitRating(rating)"
            >
              {{ rating }}
            </button>
          </div>
        </div>

        <div v-if="averageRating !== null" class="mt-4">
          <h4>Average Rating: {{ averageRating.toFixed(1) }} / 5</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedRating = ref(null)
const ratings = ref([])

const submitRating = (rating) => {
  selectedRating.value = rating
  ratings.value.push(rating)
  calculateAverageRating()
}

const averageRating = ref(null)

const calculateAverageRating = () => {
  const sum = ratings.value.reduce((total, rating) => total + rating, 0)
  averageRating.value = sum / ratings.value.length
}
</script>

<style scoped>
.rating-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.card {
  margin-bottom: 20px;
}

h3,
h4 {
  text-align: center;
}

.btn {
  font-size: 1.5em;
  padding: 10px 20px;
}

@media (max-width: 576px) {
  .rating-container {
    flex-direction: column;
  }

  .btn {
    font-size: 1.2em;
    width: 100%;
  }
}
</style>
