<template>
  <div id="user-hours">
    <div class="user-hours__container" :class="{ focus: inputFocus }">
      <div class="user-hours__icon">
        <img :src="student.image" alt="" />
      </div>
      <div>
        <label class="user-hours__label" for="hours-old"
          >{{ student.name }} is</label
        >
        <div class="flex items-center gap-3 text-lg font-inter">
          <input
            type="text"
            id="hours-old"
            name="hours-old"
            class="user-hours__input"
            v-model="inputValue"
            @input="formatInput"
            @keydown="handleKeyDown"
            :style="{ width: inputWidth + 'ch' }"
            @focus="inputFocus = true"
            @blur="inputFocus = false"
          />
          <div>hours old</div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import Student from '@/types/Student'
const emit = defineEmits(['changeAge'])

const props = defineProps({
  student: Object as PropType<Student>,
})

const inputWidth = ref<Number>(0)
const inputFocus = ref<Boolean>(false)
const inputValue = ref<String>(props.student.age?.toString())

const formatInput = () => {
  // Удаляем все символы, кроме цифр
  inputValue.value = inputValue.value.replace(/\D/g, '')

  // Обновляем значение age в объекте student
  emit('changeAge', +inputValue.value)

  // Добавляем пробелы каждые 3 цифры
  inputValue.value = inputValue.value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')

  // Обновляем ширину ввода в зависимости от длины значения
  inputWidth.value = inputValue.value.length + 2
}

const handleKeyDown = (event: any) => {
  // Разрешаем ввод только цифр и некоторых специальных клавиш
  const allowedKeys = [
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
  ]
  if (
    !/\d/.test(event.key) && // Проверяем, что введенный символ - не цифра
    !allowedKeys.includes(event.key) // Проверяем, что это не разрешенная специальная клавиша
  ) {
    event.preventDefault()
  }
}
</script>
 
<style scoped lang="postcss">
#user-hours {
  @apply max-w-lg mx-auto py-20;
}

#user-hours .user-hours__input {
  @apply p-2 pr-4 border font-medium min-w-[50px] w-[50px] inline-block rounded-md border-regular-2 text-regular-2;
}

#user-hours .focus .user-hours__input {
  @apply outline-regular-3 text-regular-0;
}

#user-hours .user-hours__label {
  @apply text-regular-0 mb-3 font-koulen;
}

#user-hours .focus .user-hours__label {
  @apply text-regular-1;
}

#user-hours .user-hours__icon {
  @apply rounded-full w-[88px] h-[88px] p-1;
}

#user-hours .focus .user-hours__icon {
  @apply outline outline-1 outline-regular-1;
}

#user-hours .user-hours__container {
  @apply flex items-center gap-4;
}

#user-hours .user-hours__icon img {
  @apply w-full h-full object-fill;
}
</style>