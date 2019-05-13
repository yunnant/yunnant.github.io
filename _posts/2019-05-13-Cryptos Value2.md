---
layout: post
title: "Crypto Value Test2"
categories: Fund
excerpt:
---
<script type='text/Javascript' src='https://helloacm.com/jquery/jquery-2.1.4.min.js'></script>
<script type='text/Javascript'>
$(document).ready(function () {
  $.ajax(
    {
        dataType: "json",
        url: "https://helloacm.com/api/fortune/",
        cache: false,
        success: function (response) {
          $(‘#fortune_text’).html(response);
        }
    })
});
</script>
