function hello() {
  console.log("Hello");
}

setTimeout(hello, 2000); //timeout asynchronous

setTimeout( () => {
  console.loh("hello world");
},2000);

 console.log("Hello");
