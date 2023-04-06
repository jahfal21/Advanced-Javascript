function calculateTotalSalary(company) {
    let totalSalary = 0;
  
    for (let key in company) {
      if (Array.isArray(company[key])) {
        // Jika nilai dari properti adalah array
        company[key].forEach((employee) => {
          totalSalary += employee.salary;
        });
      } else {
        // Jika nilai dari properti adalah objek
        totalSalary += calculateTotalSalary(company[key]);
      }
    }
  
    return totalSalary;
  }
  const company = {
    marketing: [
      {
        name: "Budi",
        salary: 5000000,
      },
      {
        name: "Agus",
        salary: 4500000,
      },
    ],
    engineer: {
      frontend: [
        {
          name: "Suci",
          salary: 8500000,
        },
        {
          name: "Lukito",
          salary: 7000000,
        },
      ],
      backend: [
        {
          name: "Bustomi",
          salary: 9500000,
        },
      ],
      devops: [
        {
          name: "Paul",
          salary: 9000000,
        },
      ],
    },
  };
  
  console.log('Total gaji yang harus dibayar: Rp',calculateTotalSalary(company));