<script setup lang="ts">
import { onMounted, reactive } from 'vue';

let state = reactive({ records: [] as string[] })

const emit = defineEmits({
    clickHistory(name: string) { }
})

function clickHistory(name: string) {
    if (name.indexOf('.btc') != -1) {
        name = name.substring(0, name.length-4)    
    }
    emit('clickHistory', name)
}

onMounted(() => {
    let localString = localStorage.getItem('domain_history')
    if (localString) {
        let localItems = localString.split(',');
        if (localItems.length > 0) {
            state.records = localItems
        }
    }
})
</script>

<template>
    <div class="history-container">
        <div class="hist-title-view">History records</div>

        <div class="name-view">NAME</div>

        <div class="records-view" v-for="(item, index) in state.records" :key="index" @click="clickHistory(item)">{{ item }}
        </div>
    </div>
</template>

<style scoped>
.history-container {
    padding-top: 40px;
    padding-left: 20px;
    padding-bottom: 40px;
}

.hist-title-view {
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #2E2F3E;
    line-height: 28px;
}

.name-view {
    margin-top: 10px;
    height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #A7A9BE;
    line-height: 20px;
}

.records-view {
    padding-left: 10px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #2E2F3E;
    line-height: 60px;
    cursor: pointer;
}
</style>
