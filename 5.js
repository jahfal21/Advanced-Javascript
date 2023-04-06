class Car {
    constructor(brand, year, country) {
      this.brand = brand;
      this.year = year;
      this.country = country;
    }
    //menghitung usia mobil
    getAge() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.year;
      return age;
    }
    //mobil di buat di US
    MadeInUS() {
      return this.country === "US";
    }
  }

const car = new Car("Toyota", 2020, "Jepang");

console.log(`merk: ${car.brand}`);
console.log(`tahun pembuatan: ${car.year}`); 
console.log(`negara pembuat: ${car.country}`); 
console.log(`usia mobil: ${car.getAge()} tahun`); 
console.log(`mobil di buat di US: ${car.MadeInUS()}`); 