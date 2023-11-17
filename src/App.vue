<template>
  <div>
    <UserHours :student="student" @change-age="(el) => (student.age = el)" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import Student from '@/types/Student'
import UserHours from '@/components/UserHours.vue'

const student = reactive<Student>({
  name: 'Hugh',
  age: null,
  image: '/samuel.png',
})
</script>