// GET ALL request example
fetch("https://xu2kt.sse.codesandbox.io/users")
  .then((res) => res.json())
  .then(console.log);

// GET ONE request example
fetch("https://xu2kt.sse.codesandbox.io/users/1")
  .then((res) => res.json())
  .then(console.log);

// POST request example
fetch("https://xu2kt.sse.codesandbox.io/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Boo" })
})
  .then((res) => res.json())
  .then(console.log);

// PUT request example
fetch("https://xu2kt.sse.codesandbox.io/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Transformer" })
})
  .then((res) => res.json())
  .then(console.log);

// DELETE request example
fetch("https://xu2kt.sse.codesandbox.io/users/1", {
  method: "DELETE"
})
  .then((res) => res.json())
  .then(console.log);
