const DetailComp = ({ data, type }) => {
  const isJobDetail = type === 'job';

  return (
    <div>
      <div className="w-full h-32 flex items-center justify-center bg-slate-100">
        <div className="container">
          <h1 className="text-3xl mb-2">{isJobDetail ? data.title : data.name}</h1>
          <h2 className="text-lg">{isJobDetail ? data.company : data.job}</h2>
        </div>
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <div className="container">
          <h2 className="text-2xl mb-2">{isJobDetail ? 'İşin təsviri' : 'Haqqında'}</h2>
          <div className="flex md:flex-row flex-col-reverse">
            <div className="pr-4 md:w-2/3 md:pb-6 mt-6">
              <p>{isJobDetail ? data.content : data.about}</p>
              {!isJobDetail && <p>{data.bday}</p>}
            </div>
            <div className="md:h-[370px] flex flex-col gap-3 justify-between">
              {!isJobDetail && <img className="w-40 lg:w-48" src={data.avatar} alt="" />}
              <div>
                <h2 className="text-xl my-1">{isJobDetail ? 'İş məlumatları' : 'Şəxsi məlumatları'}</h2>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    {isJobDetail ? (
                      <>
                        <p><b>Şəhər:</b></p>
                        <p><b>Məşğulluq növü:</b></p>
                        <p><b>Maaş:</b></p>
                        <p><b>Əlaqə telefonu:</b></p>
                        <p><b>E-mail:</b></p>
                      </>
                    ) : (
                      <>
                        <p><b>Yaş:</b></p>
                        <p><b>Cins:</b></p>
                        <p><b>Mobil telefon:</b></p>
                        <p><b>E-mail:</b></p>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {isJobDetail ? (
                      <>
                        <p>{data.location}</p>
                        <p>{data.jobtype}</p>
                        <p>{data.salary}</p>
                        <p>{data.number}</p>
                        <p>{data.email}</p>
                      </>
                    ) : (
                      <>
                        <p>{data.age}</p>
                        <p>{data.gender}</p>
                        <p>{data.number}</p>
                        <p>{data.email}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
