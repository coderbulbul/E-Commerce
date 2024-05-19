import Image from "next/image";

export default function Home() {
  return (
    <main className="container m-auto">
      {/* Section one flex row title */}
      <div className="bg-green-500 text-center p-10">
        <h1 className="text-4xl">Flex Direction : Row</h1>
      </div>

      {/* 50% each block */}
      <div className="text-center gap-2 my-2 max-w-full m-auto">
        <div className=" bg-lime-500">
          01<small> no need flex</small>
        </div>
      </div>

      {/* 50% each block */}
      <div className="flex flex-row text-center gap-2 my-2">
        <div className="basis-1/2 bg-fuchsia-500">01</div>
        <div className="basis-1/2 bg-fuchsia-500">02</div>
      </div>

      {/* 25% 2 block & 50% another block */}
      <div className="flex flex-row text-center gap-2">
        <div className="basis-1/4 bg-green-500">01</div>
        <div className="basis-1/4 bg-green-500">02</div>
        <div className="basis-1/2 bg-green-500">03</div>
      </div>

      {/* 25% left block & 75% right block */}
      <div className="flex flex-row text-center gap-2 my-2">
        <div className="basis-1/4 bg-indigo-500">01</div>
        <div className="basis-3/4 bg-indigo-500">02</div>
      </div>

      {/* 25% each block */}
      <div className="flex flex-row text-center gap-2 my-2">
        <div className="basis-1/4 bg-red-500">01</div>
        <div className="basis-1/4 bg-red-500">02</div>
        <div className="basis-1/4 bg-red-500">03</div>
        <div className="basis-1/4 bg-red-500">04</div>
      </div>

      {/* 75% left block & 25% right block */}
      <div className="flex flex-row text-center gap-2 my-2">
        <div className="basis-3/4 bg-indigo-500">01</div>
        <div className="basis-1/4 bg-indigo-500">02</div>
      </div>

      {/* 25% 2 block & 50% another block */}
      <div className="flex flex-row text-center gap-2 my-2">
        <div className="basis-1/2 bg-green-500">01</div>
        <div className="basis-1/4 bg-green-500">02</div>
        <div className="basis-1/4 bg-green-500">03</div>
      </div>

      {/* Section flex: column title */}
      <div className="bg-slate-500 text-center p-10 my-2">
        <h1 className="text-4xl">Flex Direction : Column</h1>
      </div>

      <div className="flex flex-col text-center">
        <div className="bg-orange-500 my-1">01</div>
        <div className="bg-orange-500 my-1">02</div>
        <div className="bg-orange-500 my-1">03</div>
      </div>

      {/* Section three - flex (column into row) title */}
      <div className="bg-slate-500 text-center p-10 my-2">
        <h1 className="text-4xl">Flex Direction : Row & Column</h1>
      </div>

      {/* left portion 50% & right portion 50% also divided as per column each 50% */}
      <div className="flex flex-row mb-2 text-center">
        <div className="basis-1/2 bg-green-500 mr-1 py-3">
          <p>01</p>
        </div>
        <div className="basis-1/2 flex-col">
          <div className="bg-green-500 mb-1">02</div>
          <div className="bg-green-500">03</div>
        </div>
      </div>

      {/* left portion 50% also divided as per column each 50% & right portion 50% */}
      <div className="flex flex-row mb-2 text-center">
        <div className="basis-1/2 flex-col">
          <div className="bg-lime-500 mb-1">01</div>
          <div className="bg-lime-500">02</div>
        </div>
        <div className="basis-1/2 bg-lime-500 ml-1 py-3">03</div>
      </div>

      {/* left portion 50% also divided as per column each 50% & right portion 50% */}
      <div className="flex flex-row mb-2 text-center">
        <div className="basis-1/4 bg-rose-500 mr-1 py-3">03</div>
        <div className="basis-1/4 bg-rose-500 mr-1 py-3">04</div>
        <div className="basis-1/2 flex-col">
          <div className="bg-rose-500 mb-1">01</div>
          <div className="bg-rose-500">02</div>
        </div>
      </div>
    </main>
  );
}
