interface Box<T> {
  value: T;
}

interface BoxDouble<T,S> {
  value: T;
  value2: S;
}

interface BoxBebas {
  value: any;
}

let box1: Box<string> = { value: "Buku" };
box1 = {value: 'gelas'};
box1 = {value: 90};

let boxBebas: BoxBebas = { value: "Buku" };
boxBebas = {value: 90};

let boxDouble: BoxDouble<string, number> = {value: "hello", value2: 26};

let box2: Box<number> = { value: 99 };
