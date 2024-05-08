<template>
    <Chart :options="options" />
</template>

<script lang="ts" setup>
const options = computed(() => ({
    width: '100%',
    height: '400',
    symbol: 'NASDAQ:AAPL',
    interval: 'D',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    backgroundColor: '#0C0C0D',
    locale: 'en',
    enable_publishing: false,
    allow_symbol_change: true,
    calendar: false,
    support_host: "https://www.tradingview.com",
    watchlist: [
        "OKX:PYTHUSER"
    ],
    // datafeed: new window.Datafeeds.UDFCompatibleDatafeed(datafeedUrl),
    
}))
</script>
