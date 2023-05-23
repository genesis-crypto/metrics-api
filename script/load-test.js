import http from 'k6/http';
import { sleep } from 'k6';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ4ODUyNjcsInN1YiI6IjJjNTY0MGEwLWZkYzktNDYzOS1iOWJhLTE2YTczN2M2YzVkOSJ9.ql2pGh-szzuiKEIeiy1l7a7wqYWhZ4GJEmUidPIWOCg'

export default function () {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  http.get('http://localhost:8080/links/NjKRuAfr', params);
  sleep(1);
}
