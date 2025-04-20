<template>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(thesis, index) in thesesData"
        :key="index"
        class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow"
      >
        <!-- Badges Row -->
        <div class="flex justify-between items-center mb-4">
          <!-- Type Badge -->
          <span
            :class="[
              'inline-block px-2 py-1 text-xs font-medium rounded-full',
              thesis.type === 'MT' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
            ]"
          >
            {{ thesis.type }}
          </span>
  
          <!-- Status Badge -->
          <span
            :class="[
              'inline-block px-2 py-1 text-xs font-semibold rounded-full',
              thesis.status === 'Finished'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            ]"
          >
            {{ thesis.status }}
          </span>
        </div>
  
        <!-- Content -->
        <h3 class="text-lg font-semibold mb-1">
          {{ thesis.year }} • {{ thesis.degree }} thesis
        </h3>
        <p class="text-sm text-gray-700 mb-2">{{ thesis.student }}</p>
        <p class="text-gray-600 leading-snug">{{ thesis.title }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
  // Local default array
  const defaultTheses = [
    { year: 2024, degree: 'Bachelor', student: 'Finn Krammer', title: 'Contributions of EMS to Motor Learning', type: 'BT', status: 'Finished' },
    { year: 2024, degree: 'Bachelor', student: 'Florian', title: 'Using Neurotechnologies for Enhanced Inhibition Control', type: 'BT', status: 'Finished' },
    { year: 2024, degree: 'Bachelor', student: 'Kenji Ishihara', title: 'Investigating Thermal‑Enabled Encountered‑type Haptics', type: 'BT', status: 'Finished' },
    { year: 2024, degree: 'Master', student: 'Sarita Sridharan', title: 'Exploring the Impact of a GPT‑4o Powered Dialogue System on Player Experience: A Comparative Analysis', type: 'MT', status: 'Finished' },
    // …add more entries here or import from external file
  ]
  
  // Define props without referencing local vars in default
  const props = defineProps({
    theses: {
      type: Array,
      default: () => []
    }
  })
  
  // Computed data: prefer passed-in array, else fallback to defaults
  const thesesData = computed(() =>
    props.theses && props.theses.length > 0 ? props.theses : defaultTheses
  )
  </script>
  
  <style scoped>
  /* You can tweak spacing or add hover styles here */
  </style>
  