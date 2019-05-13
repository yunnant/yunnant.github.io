---
layout: post
title: "Crypto Value Test"
categories: Fund
excerpt:
---
<!-- AICoin Widget Begin -->
<script type="text/javascript"
    src="https://widget.aicoin.net.cn/chart/js/aicoin.js"
></script>
<script type="text/javascript">
new AICoin.markets({
    "symbols": [
        "bitfinexbtcusd",
        "bitfinexethusd",
        "bittrexxrpbtc",
        "bitfinexltcusd"
    ],
    "columns": [
        "degree",
        "vol",
        "buy",
        "sell"
    ],
    "style": "tr%7Bheight%3A34px%3B%7D",
    "container": "markets_container",
    "lang": "zh"
})
</script>
<!-- AICoin Widget End -->

<script type="text/javascript"
const BFX = require('bitfinex-api-node')
const bfxRest = new BFX(d8QPY2CMGBhinJaz7mkAyz4rYPC8rD0x1NXIZC7nAdN, pc91PkJ9JlCLkQCXaFXPwQBx30WVuXrQ5KEsp2UnMlA, {version: 1}).rest
bfxRest.wallet_balances((err, res) => {
	if (err) console.log(err)
	console.log(res)
})
</script>
