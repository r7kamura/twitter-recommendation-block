export function compact(array: Array<any | null>) {
  return array.filter(self);
}

function self(value: any) {
  return value;
}
