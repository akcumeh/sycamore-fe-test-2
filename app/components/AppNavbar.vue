<template>
    <header class="border-b border-navy-800/60">
        <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <a href="#" class="flex items-center gap-2 shrink-0" aria-label="Staco home">
                <span class="h-7 w-7 rounded-full bg-gradient-to-br from-mint-300 to-mint-400"
                      aria-hidden="true"></span>
                <span class="text-lg font-semibold text-white">Staco</span>
            </a>

            <nav class="min-w-0 flex-1 flex justify-center" aria-label="Primary">
                <div ref="trackRef"
                     class="relative w-full max-w-md overflow-x-auto rounded-full bg-navy-800 p-1 sm:w-auto sm:overflow-visible scrollbar-hide">
                    <ul class="relative flex items-center gap-1 whitespace-nowrap">
                        <li v-for="(item, index) in navItems" :key="item.id">
                            <a
                            :ref="el => setTabRef(el as HTMLElement, index)"
                            :href="item.href"
                            class="relative z-10 inline-block rounded-full px-4 py-2 text-sm font-medium text-slate-300
                            transition-colors duration-200 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-mint-400"
                            :class="{ 'text-navy-900': index === activeIndex }"
                            :aria-current="index === activeIndex ? 'page' : undefined"
                            @click="handleClick(index, $event)"
                            >
                            {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="hidden shrink-0 items-center gap-4 sm:flex">
                <a href="#" class="text-sm text-slate-300 hover:text-white">Sign in</a>
                <a href="#"
                   class="rounded-full bg-mint-400 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-mint-300">Start
                    Free</a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'pages', label: 'Pages', href: '#pages' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'blogs', label: 'Blogs', href: '#blogs' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
]

const activeIndex = ref(0)
const trackRef = ref<HTMLElement | null>(null)
const tabRefs = ref<(HTMLElement | null)[]>([])

function setTabRef(el: HTMLElement | null, index: number) {
    tabRefs.value[index] = el
}

function handleClick(index: number, event: Event) {
    event.preventDefault()
    activeIndex.value = index
}
</script>