export default function LessonDemos() {
  return (
    <section className="flex lg:flex-row flex-col gap-4 px-4 text-2xl text-center">
      <div>
        <h3>Beginner</h3>
        <video
          className=""
          controls
          autoPlay={false}
          muted
        >
          <source type="video/mp4" src="/holder.mp4" />
        </video>
      </div>
      <div>
        <h3>Intermediate</h3>
        <video
          className=""
          controls
          autoPlay={false}
          muted
        >
          <source type="video/mp4" src="/holder.mp4" />
        </video>
      </div>
      <div>
        <h3>Advanced</h3>
        <video
          className=""
          controls
          autoPlay={false}
          muted
        >
          <source type="video/mp4" src="/holder.mp4" />
        </video>
      </div>
    </section>
  );
}
