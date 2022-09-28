interface Error {
  status?: number;
}

declare module "*.png" {
  const value: any;
  export default value;
}
