# k6-handson

## セットアップ

### k6のインストール

Macの場合

```
brew install k6
```

[その他の場合](https://k6.io/docs/get-started/installation/)

## テストの実行

```
k6 run src/script.js
```

## テスト結果のサンプル

```
$ k6 run src/script.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: src/script.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 2.4 MB 78 kB/s
     data_sent......................: 44 kB  1.4 kB/s
     http_req_blocked...............: avg=13.87ms  min=1µs      med=6µs      max=465.13ms p(90)=15µs     p(95)=8.66ms  
     http_req_connecting............: avg=7.98ms   min=0s       med=0s       max=181.82ms p(90)=0s       p(95)=7.24ms  
     http_req_duration..............: avg=249.34ms min=164.66ms med=261.15ms max=924.34ms p(90)=315.58ms p(95)=372.49ms
       { expected_response:true }...: avg=249.34ms min=164.66ms med=261.15ms max=924.34ms p(90)=315.58ms p(95)=372.49ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 400 
     http_req_receiving.............: avg=6.29ms   min=15µs     med=93µs     max=169.76ms p(90)=197µs    p(95)=573.74µs
     http_req_sending...............: avg=40.42µs  min=4µs      med=25µs     max=886µs    p(90)=53µs     p(95)=64.04µs 
     http_req_tls_handshaking.......: avg=5.2ms    min=0s       med=0s       max=290.35ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=243.01ms min=164.55ms med=216.53ms max=924.24ms p(90)=303.37ms p(95)=372.41ms
     http_reqs......................: 400    12.812507/s
     iteration_duration.............: avg=1.52s    min=1.41s    med=1.46s    max=2.62s    p(90)=1.61s    p(95)=1.74s   
     iterations.....................: 200    6.406253/s
     vus............................: 2      min=2       max=10
     vus_max........................: 10     min=10      max=10


running (0m31.2s), 00/10 VUs, 200 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

### 主要なメトリクス

| メトリクス名  | 説明 |
| ------------- | ------------- |
| http_req_duration | リクエストのレイテンシ |
| http_req_failed | リクエストの失敗率 ※サーバーが高負荷な状態だとおそらくこの数値が大きくなる |
| http_reqs | リクエストの合計数 |
| vus | 仮想ユーザー(シナリオの並列実行数) |

[その他のメトリクス](https://k6.io/docs/using-k6/metrics/reference/)
