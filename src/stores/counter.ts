export interface CounterState {
  count: number;
}

export const useCounterStore = defineStore('counter', () => {
  const state = ref<CounterState>({
    count: 0
  })

  const count = computed(() => state.value.count)

  const increment = () => {
    state.value.count += 1
  }

  const decrement = () => {
    state.value.count -= 1
  }

  return {
    count,
    increment,
    decrement
  }
})
