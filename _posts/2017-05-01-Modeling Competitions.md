---
layout: post
title: "Undergraduate and Graduate Modeling Compettions 本科研究生建模竞赛"
categories: Competition
excerpt: This is the summary of the competitions I attendt during my undergraduate and graduate degree.
---
"Huawei Cup" 14th China Graduate Mathematical Modeling Contest

"The optimal use of drones in disaster relief"<br>

Summary:<br>

The significance of drone rescue and disaster relief is very important. This paper establishes a model to simulate the various applications of drones in disaster relief.<br>

For the first problem, the coverage model is used to calculate the optimal coverage. Secondly, the external optimization path of the seven key seismic regions is calculated by the TSP algorithm. The A* algorithm is used to calculate the internal optimization path of the earthquake zone. Finally, we concluded at least three Drone are needed. <br>

For the second problem, the TSP algorithm and the A-STAR algorithm are used to decompose the problem from the macroscopic and microscopic perspectives. After the TSP algorithm is used to obtain the general route, the A-STAR algorithm is used to solve the obstacle avoidance problem and multi-objective optimization on the route. The problem, using the design of the objective function and weight in the A-STAR algorithm, can achieve multi-objective planning and some strain processing in practical problems. In the application process, various constraints of the human-machine in practical application are fully considered and incorporated into the actual implementation of the algorithm. <br>

For question three, in order to make the problem intuitively simplified, it is assumed that only the movement of the unmanned aerial vehicle in the (x, y) plane is considered, and the z-direction is not considered, that is, the three-dimensional problem is transformed into a two-dimensional plane problem. Also due to the moving distance of the terminal does not exceed 2000m, the movement of the 72 points within the range of 2000m can be neglected. It is assumed that the communication ground terminal will take advantage of the mobile advantage and automatically move closer to the nearest drone communication relay. Since it is necessary to keep communication between the two, it is meaningless to exchange relay status between aircraft. If it is determined that the number of aircraft in the optimized position does not allow the ground terminals to be interconnected, then the cruise exchange of these aircraft will not interconnect the ground terminals.<br>

In question four, we first simplify the model, regardless of the vertical height, and only optimize the calculation in the plane. For this problem, it can be converted to cover all ground terminals with a circle with a minimum radius of 3000m, the center of which is the position that the three airplanes need to reach. The result is the circle that covers the point in question three. At each location, the aircraft needs to continue to transmit data for a period of time. According to Figure 13, the actual situation will not reach 10 user limits. With the transmission power allocation, we make the transmission of all points in the coverage area completed at the same time, which is the most time-saving allocation scheme.<br>

题 目 无人机在抢险救灾中的优化运用<br>

摘 要:<br>

无人机抢险救灾意义十分重大，本篇论文建立模型模拟了无人机在抢险救灾 多种应用情形。<br>
对于问题一，首先采用覆盖率模型计算最优覆盖率，其次利用 TSP 算法计算 了 7 个重点地震区域的外部优化路径，利用 A*算法计算震区的内部优化路径， 最后得出最少需要三架无人机。<br>
对于问题二，同理采用 TSP 算法和 A-STAR 算法从宏观和微观角度对问题进 行分解，通过 TSP 算法得到大致路线后用 A-STAR 算法解决路线上的障碍物躲避 问题和多目标最优化的问题，利用 A-STAR 算法中对目标函数及权重的设计，可 以实现多目标的规划和实际问题中的一些应变处理。在应用过程中充分考虑了无 人机在实际应用中的各种约束性条件并纳入算法实际执行时的考量中。 <br>

问题三中，为了使问题直观简化，现假定只考虑(x,y)平面内无人机的移 动情况，不考虑 z 方向，即把三维空间问题转化为二维平面问题。同时由于地面终端的移动距离不超 2000m，则可忽略这 72 个点在范围 2000m 内的移动,假定为 了实现通信地面终端会利用移动优势，自动向最近的无人机通信中继靠拢。由于 要保持两两之间时时刻刻均可通信，则飞机之间交换中继地位是没有意义的。如 果确定架数的飞机在最优化后的定点不能使得地面终端互联，那么这些飞机进行 巡航交换也不会使得地面终端互联。<br>

问题四中，我们先对模型进行简化，不考虑垂直高度，只在平面进行优化计 算。对于此问题，即可以转换为用最少的 3000m 半径的圆去覆盖所有的地面终端， 这些圆的圆心就是 3 架飞机需要到达的位置。结果即问题三中覆盖到点的圆。在每个位置，飞机需持续一段时间进行数据传输，根据图 13，实际情况不会达到 10 个用户上限。传输功率分配，我们使得在覆盖区域内所有点的传输都同时完 成，这样即是最省时间的分配方案。<br>

<a href="https://ibb.co/CJPnW7r"><img src="https://i.ibb.co/RhjC705/2019-11-04-12-58-34.png" alt="2019-11-04-12-58-34" border="0"></a>
<br>

<a href="https://ibb.co/0Z707tX"><img src="https://i.ibb.co/d6TNTgc/2019-11-04-1-08-52.png" alt="2019-11-04-1-08-52" border="0"></a>
<br>

S prize-2017 COMAP's Mathematical Contest in Modeling (MCM)<br>

Optimization of fan-in toll plaza design<br>

Summary<br>

We use queuing theory and cellular automata to simulate the traffic across the fan - in area of a barrier toll ,aiming at finding the balance between throughput (number of vehicles per hour passing the point where the end of the plaza joins the outgoing traffic lanes) maximization and cost (land and road construction are expensive) minimization to ensure our long term benefits. Set traffic is Poisson flow, simplifying the fan-in area as a M/M/L/B model. As the independent variable and dependent variable in the model is positive correlated, we use data envelopment analysis (DEA) CCR model to find out the optimal design, and know the number of B, L and corresponding cost, as well as the size of the fan-in area.<br>

But the conclusion of queuing theory model tells us that the specific shape of the trapezoidal area does not affect traffic throughput, this does not accord with our experience of life obviously. So, we determine a suitable random slowing rate by referring to the proportion of self-driving cars, together with the parameters got from the queuing model, put into the cellular automata to explore the optimal merge pattern. The results show that when the pattern is “merger on both side”, the shorter average through time is, the larger throughput is. But due to the existing of interaction and the random slowing of vehicles, the shortest through time is still longer than the queuing theory’s optimal through time, so it is necessary to add releasing value to the height of the trapezoidal fan-in area, or when the system facing of heavy traffic or accidents, road blocks.<br>

In our third model, we perfect the queuing and cellular automata models by taking into consideration the effect of tollbooths’ service efficiency as M/M/B. When you alter the proportions of conventional (human-staffed) tollbooths, exact-change (automated) tollbooths, and electronic toll collection booths (such as electronic toll collection via a transponder in the vehicle), tollbooths’ service efficiency change and we could get a new sets of optimal designs.<br>

<a href="https://ibb.co/4VNn4yB"><img src="https://i.ibb.co/gRgLt1s/2019-11-04-1-12-33.png" alt="2019-11-04-1-12-33" border="0"></a>
<br>

Advisor, Second Prize, Asia and Pacific Mathematical Contest in Modeling<br>

Stack: Data Analysis, Web Crawler, Python, Analytic Hierarchy Process.<br>

S Prize-2016 COMAP's Interdisciplinary Contest in Modeling<br>
Used the Portfolio Theory model, through the modeling of income and risk, optimized the quotas for each US university funding and gave advice on funding.<br>

Stack: Big Data, Portfolio Theory, Data Analysis, Matlab, Genetic algorithm.<br>

2015-National 2nd Place & Provincial 1st Place, Mathematical Contest in Modeling<br>

Collected data, established models to describe the supply and demand of taxis in different time and space, and proposed a new subsidy policy.<br>

Stack: Matlab, Web Crawler, Big Data, Data Analysis, Data Visualization.<br>

<a href="https://ibb.co/TgjKnFs"><img src="https://i.ibb.co/XC0ydvq/image.png" alt="image" border="0"></a>
