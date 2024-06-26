<template>
  <div class="flex min-h-screen flex-col">
    <header class="mb-4 bg-slate-500">
      <div class="container mx-auto flex justify-between p-4 sm:p-8">
        <h1 class="font-bold text-white">irunatbullets</h1>
        <nav>
          <ul class="flex gap-4">
            <li>
              <NuxtLink
                to="/"
                class="rounded border border-transparent px-2 py-1 text-white hover:border-white"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/resume"
                class="rounded border border-transparent px-2 py-1 text-white hover:border-white"
                >Resumé</NuxtLink
              >
            </li>
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
  @apply bg-white text-slate-700 bg-opacity-90;
}
</style>
