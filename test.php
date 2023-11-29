<?php
$totalUsers = 100000;
$tokanPrice = 1000;
$companyProfit = 0;
$rewardGiven = 0;
$customers = [];
for ($i = 1; $i <= $totalUsers; $i++){
    $companyProfit += $tokanPrice;
    $customers [$i] = [
        'name' => 'Customer'.$i,
        'cash' => 0,
        'reward_added' => 0
    ];
    if($i%6 == 0){
        $customers[$i/6]['cash'] += 800;
        $customers[$i/6]['reward_added'] += 1;
        $rewardGiven += 800;
    }
    if($i%30 == 0){
        $customers[$i/30]['cash'] += 1500;
        $customers[$i/30]['reward_added'] += 1;
        $rewardGiven += 1500;
    }
    if($i%120 == 0){
        $customers[$i/120]['cash'] += 3500;
        $customers[$i/120]['reward_added'] += 1;
        $rewardGiven += 3500;
    }
    if($i%480 == 0){
        $customers[$i/480]['cash'] += 24200;
        $customers[$i/480]['reward_added'] += 1;
        $rewardGiven += 24200;
    }
}

var_dump($companyProfit, $rewardGiven);