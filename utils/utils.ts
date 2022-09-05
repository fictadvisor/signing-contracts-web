import Home from "../pages/_app";

export function setValue(name: string, value: any) {
  Home.dataObject[name] = value;
  console.log(Home.dataObject);
}