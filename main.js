let worker;
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resultDiv = document.getElementById("result");

startBtn.addEventListener("click", () => {
  if (worker) {
    resultDiv.textContent = "Worker already running...";
    return;
  }

  worker = new Worker("worker.js");
  resultDiv.textContent = "Computing in background...";

  worker.postMessage({ type: "start", value: 40 });

  worker.onmessage = (event) => {
    resultDiv.textContent = `Result: ${event.data}`;
  };

  worker.onerror = (error) => {
    resultDiv.textContent = `Error in Worker: ${error.message}`;
  };
});

stopBtn.addEventListener("click", () => {
  if (worker) {
    worker.terminate();
    worker = null;
    resultDiv.textContent = "Worker stopped.";
  }
});