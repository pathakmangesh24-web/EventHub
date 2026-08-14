const eventDates = [
  {
    title: 'Winter Night Market',
    date: 'January 1-3, 2025',
    time: '5:00-10:00 PM',
    venue: 'Themeland Harbor Center',
  },
  {
    title: 'Spring Night Market',
    date: 'March 1-3, 2025',
    time: '5:00-10:00 PM',
    venue: 'Themeland Harbor Center',
  },
  {
    title: 'Summer Night Market',
    date: 'July 1-3, 2025',
    time: '5:00-10:00 PM',
    venue: 'Themeland Harbor Center',
  },
  {
    title: 'Autumn Night Market',
    date: 'October 1-3, 2025',
    time: '5:00-10:00 PM',
    venue: 'Themeland Harbor Center',
  },
]

function Event() {
  return (
    <main className="flex w-full flex-col gap-6">
      <section
        className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] max-[620px]:min-h-[300px] mb-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(102,71,117,0.26)]" />

        <h1 className="relative z-[1] m-0 text-[clamp(2.8rem,4.5vw,5rem)] font-light leading-[1.1] tracking-[-0.04em] text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.25)]">
          Upcoming Event Dates
        </h1>
      </section>

      <section className="grid w-full grid-cols-4 gap-6 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1 px-5 pt-8 mt-12 mx-auto max-w-[1350px]">
        {eventDates.map((event) => (
          <article
            key={event.title}
            className="flex min-h-[210px] flex-col justify-center rounded-[14px] border border-slate-200 bg-white px-6 py-8 shadow-[0_4px_12px_rgba(15,23,42,0.08)]"
          >
            <h3 className="m-0 mb-4 text-[clamp(1.8rem,2vw,2.3rem)] font-medium leading-[1.15] text-blue-600 whitespace-nowrap">
              {event.title}
            </h3>

            <p className="my-[0.2rem] text-[1.02rem] leading-[1.6] text-slate-600">
              {event.date}
            </p>

            <p className="my-[0.2rem] text-[1.02rem] leading-[1.6] text-slate-600">
              {event.time}
            </p>

            <p className="my-[0.2rem] text-[1.02rem] leading-[1.6] text-slate-600">
                
              {event.venue}
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Event