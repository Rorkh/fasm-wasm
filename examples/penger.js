
WebAssembly.instantiateStreaming(fetch("example.wasm")).then(
  (result) => window.instance = result.instance,
);