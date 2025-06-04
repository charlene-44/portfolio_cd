import Preloader from "@/app/components/PreLoader";
// import Image from "next/image";
// import data from "./data/data.json";

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="App">
        <h1>Hola</h1>
      </div>
    </>
  );
}
