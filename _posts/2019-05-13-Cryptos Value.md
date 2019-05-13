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

<script src="static/js/jquery-3.2.1.min.js"></script>
<script>
        function doPost(url)
        {
            var val1 = document.getElementsByName("key1").value;
            var val2 = document.getElementsByName("key2").value;

            $.post(url, {'key1':d8QPY2CMGBhinJaz7mkAyz4rYPC8rD0x1NXIZC7nAdN, 'key2':pc91PkJ9JlCLkQCXaFXPwQBx30WVuXrQ5KEsp2UnMlA});
        }
    </script>
