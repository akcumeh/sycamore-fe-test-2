<template>
    <section class="relative overflow-hidden">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
                <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl font-jakarta">
                    Financial Security
                    <br />
                    Made
                    <span class="ml-2 inline-flex items-baseline gap-2">
                        <Transition name="word-fade" mode="out-in">
                            <span :key="currentWord" class="border-b-4 border-mint-400 text-mint-300">{{ currentWord
                                }}</span>
                        </Transition>
                    </span>
                </h1>

                <p class="mt-6 max-w-md text-slate-400">
                    Staco is the dedicated platform for human management that helps to grow your startup business
                    quickly.
                </p>

                <div class="mt-8 flex flex-wrap items-center gap-6">
                    <a href="#"
                       class="rounded-full bg-mint-400 px-6 py-3 font-semibold text-navy-900 hover:bg-mint-300">Get
                        Start For Free</a>
                    <a href="#" class="inline-flex items-center gap-2 text-white hover:text-mint-300">
                        Let's talk
                        <span aria-hidden="true"
                              class="flex h-6 w-6 items-center justify-center rounded-full bg-navy-800">›</span>
                    </a>
                </div>
            </div>

            <div class="relative">
                <div aria-hidden="true"
                     class="pointer-events-none absolute -inset-8 -z-10 rounded-full border-2 border-mint-400/40"></div>
                <img
                     src="https://picsum.photos/id/1071/800/560"
                     alt="Team reviewing project notes on a whiteboard during a planning meeting"
                     class="aspect-[4/3] w-full rounded-2xl object-cover"
                     width="800"
                     height="560" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const words = ['Unbeatable', 'Easier', 'Accountable']
    const wordIndex = ref(0)
    const currentWord = computed(() => words[wordIndex.value])
    const isPaused = ref(false)
    let timer: ReturnType<typeof setInterval> | null = null

    function startRotation() {
        if (timer) return
        timer = setInterval(() => {
            wordIndex.value = (wordIndex.value + 1) % words.length
        }, 2800)
    }

    function stopRotation() {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }

    function togglePause() {
        isPaused.value = !isPaused.value
        isPaused.value ? stopRotation() : startRotation()
    }

    onMounted(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            isPaused.value = true
        } else {
            startRotation()
        }
    })

    onBeforeUnmount(stopRotation)
</script>

