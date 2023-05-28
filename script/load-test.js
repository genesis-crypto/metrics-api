import http from 'k6/http';
import { sleep } from 'k6';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODUzMDg2NzIsInN1YiI6IjJjNTY0MGEwLWZkYzktNDYzOS1iOWJhLTE2YTczN2M2YzVkOSJ9.qhVdXR3cwT74Fn7FUtXDIep_2-OzQRUCWBCgcjXmB-s'

export const options = {
  vus: 10000,
  iterations: 100000,
  duration: '60s',
};

export default function () {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  http.get('http://localhost:8080/links/71xmAR5Z', params);
  sleep(1);
}
