<template>
    <div>
      <h2>Books with ISBN > 1000</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }},
        </li>
      </ul>
    </div>
  </template>
  
<script>
import { collection, getDocs, query, where } from "firebase/firestore";
import { onMounted, ref } from "vue";
import db from "../firebase/init.js";
  
  export default {
    setup() {
      const books = ref([]);
  
      const fetchBooks = async () => {
        try {
          const q = query(collection(db, 'books'), where('isbn','>', 1000));
          const querySnapshot = await getDocs(q)
          const booksArray = [];
          querySnapshot.forEach((doc) => {
            booksArray.push({id: doc.id, ...doc.data() });
          });
          books.value = booksArray;
        } catch (error) {
          console.error("Error fetching books: ", error);
        }
      };
  
      onMounted(() => {
        fetchBooks();
      });
  
      return {
        books
      };
    }
  };
</script>
  
<style scoped>
h2 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>
  