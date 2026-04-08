<script setup>
import axios from "axios";
import { computed, reactive, ref } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

let characters = ref([]);
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});

let current = ref(1);

let searchInput = ref('');
let isLoading = ref(false);
const filters = reactive({
    status: '',
    gender: '',
});

const statusOptions = [
    { label: 'All', value: '' },
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' },
];

const genderOptions = [
    { label: 'All', value: '' },
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Genderless', value: 'genderless' },
    { label: 'Unknown', value: 'unknown' },
];

await getCharacters(current.value);

async function getCharacters(page) {
    current.value = page;
    isLoading.value = true;

    try {
        let res = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: page,
                name: searchInput.value,
                status: filters.status,
                gender: filters.gender,
            }
        });

        characters.value = res.data.results;
        pagination.value = res.data.info;
    } catch (error) {
        // The API returns 404 when no result matches filters/search.
        if (error.response && error.response.status === 404) {
            characters.value = [];
            pagination.value = {
                count: 0,
                pages: 0,
                next: null,
                prev: null,
            };
            current.value = 1;
            return;
        }

        throw error;
    } finally {
        isLoading.value = false;
    }
}

async function next() {
    await getCharacters(current.value + 1);
}

async function prev() {
    await getCharacters(current.value - 1);
}

async function setFilter(type, value) {
    filters[type] = value;
    await getCharacters(1);
}

async function clearFilters() {
    filters.status = '';
    filters.gender = '';
    searchInput.value = '';
    await getCharacters(1);
}

let pages = computed(() => {
    let pages = [];
    for (let i = 1; i <= 3; i++) {
        pages[i] = i;
    }
    if (current.value > 6) {
        pages.push("...");
    }
    for (
        let i = current.value - 2;
        i <= current.value + 2 && i <= pagination.value.pages;
        i++
    ) {
        pages[i] = i;
    }

    if (current.value < pagination.value.pages - 2) {
        pages.push("...");
    }

    for (let i = pagination.value.pages - 2; i <= pagination.value.pages; i++) {
        pages[i] = i;
    }

    return pages.filter((p) => p);
});

let searchTimeout = null;

async function search() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        await getCharacters(1);
    }, 1000);
}
</script>

<template>
    <div class="container">
        <div class="field is-grouped is-grouped-multiline mb-4">
            <div class="control">
                <p class="subtitle is-6"><strong>Status:</strong></p>
            </div>
            <div class="control">
                <div class="buttons has-addons">
                    <button
                        v-for="option in statusOptions"
                        :key="`status-${option.value || 'all'}`"
                        class="button is-small"
                        :class="filters.status === option.value ? 'is-link' : 'is-light'"
                        :disabled="isLoading"
                        @click="setFilter('status', option.value)"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>

            <div class="control">
                <p class="subtitle is-6"><strong>Gender:</strong></p>
            </div>
            <div class="control">
                <div class="buttons has-addons">
                    <button
                        v-for="option in genderOptions"
                        :key="`gender-${option.value || 'all'}`"
                        class="button is-small"
                        :class="filters.gender === option.value ? 'is-primary' : 'is-light'"
                        :disabled="isLoading"
                        @click="setFilter('gender', option.value)"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>

            <div class="control">
                <button
                    class="button is-small is-danger is-outlined"
                    :class="{ 'is-loading': isLoading }"
                    :disabled="isLoading"
                    @click="clearFilters"
                >
                    Clear All
                </button>
            </div>
        </div>

        <div class="field has-addons">
            <div class="control is-expanded">
                <input @input="search" v-model="searchInput" class="input" type="text" placeholder="Search character name">
            </div>
            <div class="control">
                <button class="button is-info" :class="{ 'is-loading': isLoading }" :disabled="isLoading" @click="search">
                    Search
                </button>
            </div>
        </div>

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <button class="pagination-previous" :disabled="!pagination.prev || isLoading" @click="prev">
                Previous
            </button>
            <button class="pagination-next" :disabled="!pagination.next || isLoading" @click="next">
                Next Page
            </button>
            <ul class="pagination-list">
                <li v-for="page in pages" :key="`page-${page}`">
                    <span v-if="page === '...'" class="pagination-ellipsis">&hellip;</span>
                    <button v-else-if="page === current" class="pagination-link is-current" aria-label="Current page">
                        {{ page }}
                    </button>
                    <button v-else class="pagination-link" aria-label="Go to page" :disabled="isLoading" @click="getCharacters(page)">
                        {{ page }}
                    </button>
                </li>
            </ul>
        </nav>

        <article v-if="!isLoading && characters.length === 0" class="message is-warning">
            <div class="message-body">
                No characters matched your current filters.
            </div>
        </article>

        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters" :key="character.id">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>
