const PicturesSection = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center py-32 gap-10 mt-12">
      <h1 className="text-4xl">Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        cupiditate voluptate porro non nemo est obcaecati provident laboriosam?
      </p>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 w-fit">
        <div>
          <img
            src="https://tailwindcss.com/_next/static/media/1.4985e539.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img
            src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div className="col-start-3">
          <img
            src="https://tailwindcss.com/_next/static/media/2.86c4c41e.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://tailwindcss.com/_next/static/media/3.19759950.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://tailwindcss.com/_next/static/media/4.a2ed7a78.jpg"
            alt
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PicturesSection;

{
  /* <div className="w-2/5 text-center ">
  <h1 className="text-3xl">Duty Toward Humanity</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas enim, rerum earum reprehenderit omnis velit quis, sed maxime cumque alias molestias officiis animi voluptatem voluptates eveniet odit ad. Incidunt modi ipsam magnam laudantium fugit laboriosam illo corporis, accusamus ex voluptatem ducimus porro dolorem consequatur! Quidem neque harum facere delectus.</p>
</div> */
}
