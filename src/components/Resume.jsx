import { resumeData } from './data';

export function Resume() {
  return (
    <div className='animate-slide-in-fwd-center bg-orange-50 ml-4 md:mx-96'>
      <p className='font-bold text-4xl mt-20'>
        Resume
      </p>
      {resumeData.map((D, id) => {
        return (<><ResumeCategory key={id} header={D.header} data={D.data} /> <hr className={`w-full border border-black ${resumeData.length - id > 1 ? "block" : "hidden"}`} /></>);
      })}
    </div>
  );
}
function ResumeCategory({ header, data }) {
  return (
    <div className='mb-20 mt-10 md:mt-20 flex gap-y-10 flex-wrap'>
      <p className='font-bold text-2xl md:text-3xl w-48'>{header}</p>
      <div className='md:ml-auto'>
        {data.map((d, id) => (<ResumeData key={id} year={d.year} title={d.title} info={d.info} />))}
      </div>
    </div>
  );
}
function ResumeData({ year, title, info }) {
  return (
    <div className='flex md:gap-x-10 mb-10 flex-wrap'>
      <p className='text-m font-thin'>{year}</p>
      <div className='flex flex-col gap-y-2 md:ml-auto'>
        <p className='font-bold text-l'>{title}</p>
        <ul className='w-72'>
          {info.map((d, id) => (<li key={id}>{d}</li>))}
        </ul>
      </div>
    </div>
  );
}
