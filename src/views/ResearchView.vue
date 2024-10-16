<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card-container">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="card"
            @click="goToArticle(article.id)"
          >
            <img :src="article.image" alt="Article image" class="card-image" />
            <div class="card-content">
              <h2>{{ article.title }}</h2>
              <p>{{ article.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Center Researcher Entry -->
    <div class="mt-5 text-center">
      <button @click="goToResearcherArea" class="btn btn-primary">
        Data Center Researcher Entry
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const articles = ref([
  {
    id: 1,
    title: 'Mental Health and Well-being',
    summary:
      "Maintaining good mental health is essential for overall well-being. It's important to recognize the signs of stress and seek help when necessary. In this article, we explore various ways to improve mental health...",
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Article 2',
    summary: 'This is the summary of article 2.',
    image: 'https://via.placeholder.com/150'
  }
  // add more article
])

const goToArticle = (id) => {
  router.push(`/article/${id}`)
}

// Check user login and role
const checkUserRole = () => {
  // Replace with actual user role check logic
  const user = JSON.parse(localStorage.getItem('user'))
  return user && user.isResearcher === true
}

// Navigate to researcher area or show access denied
const goToResearcherArea = () => {
  if (checkUserRole()) {
    router.push('/researcher-area')
  } else {
    router.push('/access-denied')
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-content {
  padding: 15px;
  text-align: center;
}

h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
}

p {
  margin: 0;
  color: #555;
}
</style>
