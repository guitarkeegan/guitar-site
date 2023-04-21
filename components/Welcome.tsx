export default function Welcome() {
  return (
    <section className="flex justify-center flex-col items-center">
      <h2 className="md:text-8xl sm:text-6xl text-4xl">Welcome!</h2>
      <video
        className="lg:w-1/2 md:w-3/4 sm:w-4/5 w-screen"
        controls
        autoPlay={false}
        muted
      >
        <source type="video/mp4" src="/holder.mp4" />
      </video>
    </section>
  );
}
