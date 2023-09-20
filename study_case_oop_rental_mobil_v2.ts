abstract class vec {
  constructor(
    protected nopol: string,
    protected vehicleType: string,
    protected year: number
  ) {}
  abstract getall_vec(): any;
  abstract getall_vec_table(): any;
}

class vehicle extends vec {
  static allvec: {
    noPolice: string;
    vehicleType: string;
    year: number;
    price: number;
    tax: number;
    seat: number;
    transactionDate: string;
    [key: string]: any;
  }[] = [];
  constructor(
    nopol: string,
    vehicleType: string,
    year: number,
    protected price: number,
    protected tax: number,
    protected seat: number,
    protected date: string
  ) {
    super(nopol, vehicleType, year);
  }

  public getall_vec() {
    console.log(vehicle.allvec);
  }

  public getall_vec_table() {
    console.table(vehicle.allvec);
  }

  protected input_data(data: any) {
    vehicle.allvec.push(data);
  }
}

class suv extends vehicle {
  constructor(
    nopol: string,
    vehicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    date: string,
    private rent: number,
    private driver: number
  ) {
    super(nopol, vehicleType, year, price, tax, seat, date);
    this.input_new();
  }

  private input_new() {
    let temp = {
      noPolice: this.nopol,
      vehicleType: this.vehicleType,
      year: this.year,
      price: this.price,
      tax: this.tax,
      seat: this.seat,
      transactionDate: this.date,
      rent: this.rent,
      driver: this.driver,
    };
    this.input_data(temp);
  }
}

class taxi extends vehicle {
  constructor(
    nopol: string,
    vehicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    date: string,
    private order: number,
    private orderPerKM: number
  ) {
    super(nopol, vehicleType, year, price, tax, seat, date);
    this.input_new();
  }

  private input_new() {
    let temp = {
      noPolice: this.nopol,
      vehicleType: this.vehicleType,
      year: this.year,
      price: this.price,
      tax: this.tax,
      seat: this.seat,
      transactionDate: this.date,
      order: this.order,
      orderPerKM: this.orderPerKM,
    };
    this.input_data(temp);
  }

  public getTotalVehicle() {
    return vehicle.allvec.length;
  }

  public getTotalIncome() {
    let total = 0;
    vehicle.allvec.forEach((item) => {
      if (item.rent) {
        total += item.rent + item.driver;
      } else {
        total += item.order * item.orderPerKM;
      }
    });
    console.log(total);
  }
}

const suv1 = new suv(
  "D 1001 UM",
  "SUV",
  2010,
  350000000,
  3500000,
  4,
  "10/01/2023",
  500000,
  150000
);
const suv2 = new suv(
  "D 1002 UM",
  "SUV",
  2010,
  350000000,
  3500000,
  4,
  "11/01/2023",
  500000,
  150000
);
const taxi1 = new taxi(
  "D 1002 UK",
  "Taxi",
  2002,
  175000000,
  1_750_000,
  4,
  "10/01/2023",
  45,
  4500
);
const taxi2 = new taxi(
  "D 1002 UK",
  "Taxi",
  2002,
  175000000,
  1_750_000,
  4,
  "10/01/2023",
  45,
  4500
);
//console.log(Vehicle.allvec);
taxi1.getall_vec_table();
