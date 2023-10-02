import http from 'k6/http';
import { sleep } from 'k6';

// 30秒の間に10人の仮想ユーザー(vus)がシナリオを並列で実行する
export const options = {
  vus: 10,
  duration: '30s',
};

// シナリオ
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
