function Banner() {
  return (
    <div className="space-y-6 my-10 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Friends to keep close in your life
      </h1>

      <p className="max-w-2xl mx-auto text-sm md:text-base font-normal text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="inline-block bg-[#244D3F] py-2 px-4 rounded-sm text-white text-base md:text-lg font-medium transition duration-100 hover:scale-95">
        + Add a Friend
      </button>
    </div>
  );
}

export default Banner;
