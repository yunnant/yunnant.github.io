---
layout: post
title: "Crypto Quant Journal 加密货币量化开发日志 "
categories: Finance
excerpt:
---
原文网址Origin：https://zhuanlan.zhihu.com/p/66181973

Tobedone: Money Flow Analysis, Option Arbitrage, Options Strategy, High Frequency Probe, Market Status, Algorithmic Trading, Chip Analysis, Mining Cost, High Frequency Marketing, Hysteresis Research, Beta Hedging, Public Opinion Factor, Event Driven, Multi-factor portfolio, profit analysis (scatter plot).

#0. Algorithmic trading.
Detail: iceberg, reverse iceberg https://daily.zhihu.com/story/4081702
Issue:stack:
#0.():.


#0. Event driven.
Detail: Airdrop: https://medium.com/@xyshell/event-study-on-ignis-airdrop-2f7a93bb24f4
Off the markets: https://www.zhihu.com/column/p/57012933
issue:stack:
#0.() :.


#0. High frequency.
Detail: Market Making: https://www.htfc.com/wz_upload/png_upload/20181204/1543883952362f50e60.pdf http://blog.sina.com.cn/s/blog_8e6ab2610102v601.html http://www.hicend.com.cn/gpimage/gppage.pdf
Microstructure: Penny Jump: https://www.fmz.com/strategy/358
Issue:stack:
#0.():.
————————————————————————————————————————

2019.09.18
#0.47 Arbitrage, Momentum 0.5.
Detail:
#0.48():.

2019.08.23
#0.46 Web Backend, (Grid Strategy), Network Pricing.
Detail:
Web Page Backend: Add English interface, front and back end framework is completed, waiting for continuous update. Https://zhuanlan.zhihu.com/p/75805097
Network pricing: developed with Boyang
Stack: Flask Restful
#0.47(): Arbitrage, Momentum 0.5 .
Network Pricing
<center>
<img src="https://pic2.zhimg.com/v2-5989fc6597fa2587d2fcc7f6ae3be3f9_r.jpg" width="96%"/>
</center>

2019.07.27
#0.45 (Web Backend), (Server-To-Server Data Transfer), (Grid Strategy), (Network Pricing), Optimization Convergence Curve, Genetic Algorithm per generation statistical indicators, Rpc with multi-user, Record a variety of data.
Detail:
Casting the net 0.1:
Web page backend: Data: https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD
Other: Strategy Development https://www.jianshu.com/u/KWYc3d https://v.jfz.com/detail-23494.html
Sql:http://www.runoob.com/mysql/mysql-drop-tables.html On_query for each interface is written to the database
Issue:stack: Multi-page Django Mysql
#0.46():.

2019.07.24
#0.44 (Grid Strategy), (Network Pricing), (Optimized Convergence Curve), Multi-User Related Files, Front-End Console Design, (Genetic Algorithms for Each Generation of Statistical Indicators), rpc Server.
Detail:
Multi-user: http://www.vnpie.com/forum.php?mod=viewthread&tid=2017
Front end: https://zhuanlan.zhihu.com/p/27809706
Issue: The policy client and the transaction server are disconnected, the transaction server is abnormal, and the network security is: the webpage data is transmitted in one direction, and the user account password is encrypted. Stack:vue,Flask,Django,rpc
#0.45():.
Front end interface
<center>
<img src="https://pic4.zhimg.com/v2-46b66f51169d17306e33d1de245780d7_r.jpg" width="96%"/>
</center>

2019.07.21
#0.43 (Grid Strategy), (Network Pricing), (Optimized Convergence Curve), the process terminates the instant alarm, upgrades the server 4 core 4g again, (user settings file), status push 0.1.
Detail:
  Grid: https://www.fmz.com/bbs-topic/674 https://www.fmz.com/bbs-topic/182 Hedging Grid https://www.fmz.com/bbs-topic/ 718 https://www.fmz.com/bbs-topic/657 Trend Grid Hedge Grid Market https://zhuanlan.zhihu.com/p/34400090 Grid Market https://zhuanlan.zhihu.com /p/35170854
  Wanglou 0.1: current running time, current running strategy.
  Optimization Curve: https://deap.readthedocs.io/en/master/tutorials/basic/part3.html
Issue:stack:
Other: Full Market Commission https://data.bitcoinity.org/markets/books/USD
#0.44():.

2019.07.16
#0.42 (Funding Flow Analysis), (Network Pricing), (Drawing Optimization Convergence Curve), Strategy Daily Profit and Loss Report.
Detail: Network Pricing: https://www.blockchain.com/charts/n-unique-addresses
Avoid Over-optimization: Large sample Inside and outside the sample Large number of parameters Number of parameters Detecting near optimal parameters Porting other products Regularization
Issue:Stack:
#0.43() Grid Strategy:.

2019.07.14
#0.41 (fund flow analysis), (network pricing), sentiment index factor, under tick data.
Detail: Network pricing: https://www.chainnews.com/articles/187926866705.htm https://zh-cn.coinnewstelegraph.com/bitcoin-pricing-models-part-iii-bitcoin-usd-cryptocurrencybtc-usd/ Https://zhuanlan.zhihu.com/p/42085333 https://36kr.com/p/5136787
Other: classic strategy https://www.fmz.com/bbs-topic/50
Policy Encryption https://www.vnpy.com/forum/topic/72-vnpyce-lue-jia-mi-jiao-cheng
Logger.info, set proxy
Issue:sock, proxy, delegate decimal point (modify utility.roundto), multiple drawdowns. Stack:
#0.42(): High frequency market.
Emotional index and bitcoin price
<center>
<img src="https://pic4.zhimg.com/v2-6048abda5e51973d7e7dbd31a683f17b_r.jpg" width="96%"/>
</center>

2019.07.08
#0.40 The order is on the line. (It seems to go nowhere, shelving, power index)
Detail: Wave-by-wave tread 0.3:second class, increase the variable, increase the tick-level backtest interface function (engine, widget, engine, base).
#0.41(): Money flow analysis, social network pricing, sentiment index factor. Issue:stack:

2019.06.29
#0.35 Documentary strategy; Big Wave head 0.21; multi-user environment update.
Detail: Wave-by-wave tread 0.1: two directions, detection and calculation. High frequency http://www.vnpie.com/forum.php?mod=viewthread&tid=2815 http://www.vnpie.com/forum.php?mod=viewthread&tid=1445 The difference in server location is true More, the value of the flower
        Big wave head 0.21: Start immediately, increase the interval parameter, state push.
        Segmetation fault, api error message https://www.fmz.com/bbs-topic/597; sqlite3 -csv -header database.db "select * from dbtickdata" > stat.csv;
#0.36(0630): The follow-up strategy is online. Issue:rest/websocket stack:

2019.06.25
#0.33 Arbitrage strategy developing with Bo Yang, data source update.
Detail: current data source: vnpy record, coinapi.io, cryptocompare, 1token (https://1token.trade/docs#/hist-quote/historical-data?id=%e5%8e%86%e5%8f%b2candle %e6%95%b0%e6%8d%ae)
The platform price difference is more than 0.1: https://zhuanlan.zhihu.com/p/20090944 (super classic article); https://www.jianshu.com/p/735f2504c749; https://blog.csdn.net /weQuarter/article/details/76096239, disadvantages: less opportunities. Need to develop interfaces and find opportunities.
Inter-temporal arbitrage, arbitrage for the period, accumulated over the years 0.1: https://zhuanlan.zhihu.com/p/39236374; https://www.chainnode.com/post/43382 Advantages: Leverage, attention: inter-period Arbitrage needs to judge the basis trend has a higher risk, and needs to conduct a stationarity test; https://www.zhihu.com/question/38359735 https://www.joinquant.com/view/community/detail/724d837f8cc7cb1bb839a71edb84b515
Variety arbitrage: http://blog.sina.com.cn/s/blog_5008d72e0102vwtk.html
#0.34(0630): Arbitrage on-line real. Issue:stack:
Spread of a certain two products
<center>
<img src="https://pic4.zhimg.com/v2-cccf2944c56f2cb0438ffb81e6d58a7f_r.jpg" width="96%"/>
</center>

2019.06.19
#0.32 The turtle is on the line.
Detail: The original sin of the gods is not bad. . Code analysis https://blog.csdn.net/IAlexanderI/article/details/81457853; http://101.132.65.227/?cat=3; high frequency is a bit difficult; https://www.vnpy.com/forum/ Topic/16-vnpyde-si-wei-dao-tu-jia-gou architecture diagram
#0.33(0625): Spread strategy, capital flow analysis. Issue:stack:

Most of the above subsequent logs are strategic modeling and programming implementation, and if interested, you can contact me.

2019.06.06
#0.31 Backtesting, tuning, testing turtle strategy, nailing robot 0.2, windows environment configuration, multi-user environment building.
Detail: https://www.vnpy.com/user/KeKe/topics?page=2
#0.32(0609): The strategy of the order, the turtle is on the line. Issue:stack:


2019.06.05
#0.3 Change the server, configure the server (cheap is not good, no good goods), the original server is used to download data, the turtle is online.
Detail: resolution xrandr -s 1280x1024_60.02; swapon /mnt/swap;echo 10 >/proc/sys/vm/swappiness;bitmex overloadhttps://www.vnpy.com/forum/topic/147-hai-gui- Ce-lue-jiao-yi-bitmexde-xbtusdbei-ju-dan-de-wen-ti;
#0.31(0607):issue:stack:
<center>
<img src="https://pic3.zhimg.com/v2-f2acc3be31771bdf039134a6740d53aa_r.jpg" width="96%"/>
</center>

2019.06.02
#0.23 Calculate the volatility and nail robot status tracking.
Detail:std(diff(log)));
Code analysis: https://www.jyzzj.online/viewtopic.php?f=3&t=6&sid=1e09752fa66daaed7c6506197b9bac77;http://www.vnpie.com/forum.php?mod=viewthread&tid=1207&from=portal;https://github.com/vnpy/vnpy/wiki/%E4%BA%8B%E4%BB%B6%E5%BC%95%E6%93%8E
Market performance indicator calculation: volatility.
#0.3(0604): Change the server and go online turtle strategy. Issue:stack:
<center>
<img src="https://pic3.zhimg.com/v2-b4489e228c24d28189336d3fc9e8107e_r.jpg" width="96%"/>
</center>

2019.05.31
#0.22 Purchase Ali server ubuntu, configure the server.
Detail:https://www.vnpy.com/forum/topic/515-fen-xiang-ubuntuhuan-jing-xia-an-zhuang-vnpy-2-0-3-de-jiao-ben?page=1# Pid1841
Cd ~/.ssh rm known_hosts https://help.aliyun.com/knowledge_detail/42534.html?spm=5176.10695662.1996646101.searchclickresult.35aa544ckabE9u
Https://www.liquidweb.com/kb/troubleshooting-please-install-available-updates-release-upgrading/ sudo apt-get install libpq-dev
Https://blog.csdn.net/zouchengli/article/details/80320496
#0.23(0603): The server is on the line turtle policy. Issue:stack:

2019.05.28
#0.21 Turtle strategy.
Detail:
Big Wave Turns Over 0.1:
     Optimization goal: retracement of revenue balance
     Disadvantages: floating profit back. The floating profit that is chasing up is likely to be spit out due to a sudden drop. It is very strong in the big trend and not as good as it is in the shock city.
          It is impossible to respond in time and the phenomenon of income reversal occurs. This kind of digital currency has soared and plunged more, so when using the Tangqi'an channel and calculating the ATR, the return time should be appropriately shortened.
#0.22(0531): Server. Issue:stack:
<center>
<img src="https://pic1.zhimg.com/v2-3d4c560fc1580593e047b09d9068cd00_r.jpg" width="96%"/>
</center>

2019.05.25
#0.2 Back to the test engine, double moving average strategy.
Detail:query_history, history_data=True
Ebb and flow tide 0.1:
     Optimization goal: Kelly formula determines position management;
             The value of the dynamic decision line, https://www.abuquant.com/lecture/lecture_28.html;
             Dma,ama,trix;
     Disadvantages: shock city, repeated crossover, delay
#0.21(0528): Boll strategy, turtle strategy. Issue:stack:

2019.05.23
#0.12 Exchange loading, global configuration, market record.
Detail:setting.py,database.db, sqlite database, mainwindow.py, qt.bar, user files.
#0.13(0525): Back to the test engine. Issue:contract records data, external crawler data. Stack:SQL

2019.05.20
#0.11 Get the cleaning backtest data script.
Detail: pandas handles listcsvdict conversions, time handles timestamp conversions, urllib.request.
#0.12(0522): ubuntu, windows environment configuration, issue: exchange loading, market record. Stack:mongodb,qt
<center>
<img src="https://pic2.zhimg.com/80/v2-af842ed2d81aeeb334e2967bc76c55ed_hd.jpg" width="96%"/>
</center>

2019.05.17
#0.1 vnpy framework mac environment configuration is completed, backtest data resources are obtained.
Detail:https://www.vnpy.com/forum/topic/395-mac-xia-an-zhuang-yun-xing-vnpy-2-0
Setup.py install; bash install.sh; https://www.zhihu.com/question/265468047
#0.2(0520): Automated acquisition of cleaning backtest data script; market record. Issue: The exchange is loaded. Stack:mongodb
<center>
<img src="https://pic2.zhimg.com/v2-47925bb835e8398653d505d02d50b05d_r.jpg" width="96%"/>
</center>

2019.05.16
#0.0 In April, I got the start of the market, but the manual operation of one month was too tiring, and it was difficult to completely avoid negative emotions. Vnpy also updated version 2.0, so I finally decided to toss a quantitative platform.
#0.1(0517): Environment configuration, resource preparation.

————————————————————————————————————————

Running account starts

2018.01.08

Four years after the university, the code ability in the same age financial dog has been able to traverse, and also touched the quant platforms like joinquant candle ricequant . At this time, the market was active again, so I began to want to do crypto currency quantification, using the botvs (fmz) quantitative platform to develop cross-currency arbitrage robots, but the efficiency is not high, and development also delays making money. . If you have no time, you will not continue.


2013.12.01

Freshman touched crypto, looked at the candle line and found that the red, green and green can be a bit predictive (in fact, MACD), so I plan to use a computer to simulate the transaction, so I used the button wizard to develop (because there is image recognition...), the basis for judgment is only macdkdjrsi, risk management is only guaranteed. The source code changed to another computer and deleted. It’s a pity. After all, this broken thing finally has 300 lines (who know what I wrote).
