<template>
  <div class="flex min-h-screen flex-col">
    <header class="mb-4 bg-slate-500">
      <div class="container mx-auto p-4 sm:p-8 flex justify-between">
        <h1 class="font-bold text-white">irunatbullets</h1>
        <nav>
          <ul class="flex gap-4">
            <li><NuxtLink to="/" class="p-0.5 text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/resume" class="p-0.5 text-white">Resumé</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="container mx-auto flex-1 px-4 sm:px-8">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
nav .router-link-exact-active {
  @apply text-slate-500 bg-white rounded;
}
</style>
