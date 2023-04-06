const urls = [
  "https://www.boredapi.com/api/activity",
  "https://www.boredapis.com/api/activity",
  "https://www.boredapis2.com/api/activity",
];

// Membuat fungsi untuk melakukan fetch terhadap satu URL
const fetchUrl = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(function(user){
      console.log(user);
    })
    .then((data) => {
      return {
        url: url,
      };
    })
    .catch((error) => {
      return {
        url: url,
        error: error.message,
      };
    });
};

// Membuat array dari promise-promise yang akan dijalankan menggunakan Promise.all()
const promises = urls.map((url) => {
  return fetchUrl(url);
});

// Menjalankan promise-promise tersebut dan mencari URL yang tepat
Promise.all(promises)
  .then((results) => {
    const validResult = results.find((result) => !result.error);
    console.log(`url: ${validResult.url}`);
  })
  .catch((error) => {
    console.log(error.message);
  });