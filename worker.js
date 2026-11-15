function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

self.onmessage = function (event) {
  if (event.data.type === "start") {
    const value = event.data.value;
    const result = fibonacci(value);
    postMessage(result); 
  }
};