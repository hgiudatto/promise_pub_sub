import fetch from "node-fetch";

const statuses = {
  Ok: "ok",
  Error: "error",
};

const response = await fetch("https://api.github.com/users/github");
let status = "";
if (response.status === 200) {
  status = statuses.Ok;
} else {
  status = statuses.Error;
}
console.log(`Response status: ${status}`);
const data = await response.json();
console.log(data);
