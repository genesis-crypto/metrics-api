import http from 'k6/http';
import { sleep } from 'k6';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU0MDM0NjUsInN1YiI6IjJjNTY0MGEwLWZkYzktNDYzOS1iOWJhLTE2YTczN2M2YzVkOSJ9.aySBf6RciCjM4Tj-6G9M2zEIp-6PALdzNk7K1VkNQ6U'

export const options = {
  vus: 200,
  iterations: 10000,
  duration: '60s',
};

export default function () {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  http.get('http://localhost:8080/links/YxrQtK8Z', params);
  sleep(1);
}
