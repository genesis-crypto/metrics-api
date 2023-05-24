import http from 'k6/http';
import { sleep } from 'k6';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ4ODYzODEsInN1YiI6IjJjNTY0MGEwLWZkYzktNDYzOS1iOWJhLTE2YTczN2M2YzVkOSJ9.lL9ZnjXZW519_u4d0qzLD-Q-8iphCSvNuEcalz1kBkw'

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
