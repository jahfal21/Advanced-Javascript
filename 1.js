function replaceRedWithBlue(objek) {
    Object.keys(objek).forEach((key) => {
      if (typeof objek[key] === "string") {
        objek[key] = objek[key].replace(/red/ig, "blue");
      } else if (typeof objek[key] === "object") {
        replaceRedWithBlue(objek[key]);
      }
    });
    return objek;
  };
  
let objek = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
      url: "https://dummy.com/red-image.jpg",
    },
  };

console.log(replaceRedWithBlue(objek));