import error from '../../assets/error.jpg';
const Error = () => {
  return (
    <section className=" flex flex-col items-center justify-center md:flex-row">
      <img src={error} className=" rounded-2xl" width={400} alt="404 Error" />
      <div className=" mx-6 flex flex-col">
        <h3 className=" my-6 text-2xl">데이터를 불러오지 못했어요</h3>
        <p>F5를 눌러 새로고침을 시도하세요</p>
      </div>
    </section>
  );
};

export default Error;
