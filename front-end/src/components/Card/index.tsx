function Card() {
  return (
    <div className="w-11/12 h-44 rounded flex bg-slate-200 p-2 cursor-pointer">
      <img
        className="w-20 h-20 rounded-full object-cover box-content mr-2"
        src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
        alt="pet"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">Tom</p>
          <p className="text-zinc-500">(00) 00000-0000</p>
        </div>
        <p className="line-clamp-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ab consequuntur nobis soluta molestias deleniti totam doloribus ad
          voluptates explicabo veniam officiis saepe nulla, a voluptatem
          accusamus in quod odit.
        </p>
      </div>
    </div>
  );
}

export default Card;
