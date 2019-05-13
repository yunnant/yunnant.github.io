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

<script type='text/Javascript' src='https://helloacm.com/jquery/jquery-2.1.4.min.js'></script>
<script type='text/Javascript'>
$(document).ready(function () {
  $.ajax(
    {
        dataType: "json",
        url: "https://helloacm.com/api/fortune/",
        cache: false,
        success: function (response) {
          document.write(response);
        }
    })        
});                
</script>
