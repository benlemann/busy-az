import useravatar from "../assets/useravatar.png"

const DetailComp = ({ data, type }) => {
  const isJobDetail = type === 'job';
  return (
    <div>
      <div className="w-full h-32 flex items-center justify-center bg-slate-100">
        <div className="container">
          <h1 className="text-3xl mb-2">{isJobDetail ? data.title : data.name}</h1>
          <h2 className="text-lg">{isJobDetail ? data.user.name : data.workare}</h2>
        </div>
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <div className="container">
          <h2 className="text-2xl mb-2">{isJobDetail ? 'İşin təsviri' : 'Haqqında'}</h2>
          <div className="flex md:flex-row flex-col-reverse">
            <div className="pr-4 md:w-2/3 md:pb-6 mt-6">
              <p>{isJobDetail ? data.description : data.description}</p>
              {!isJobDetail && <p>{data.bday}</p>}
            </div>
            <div className="md:h-[370px] flex flex-col gap-3 justify-between">
              {!isJobDetail && <img className="w-40 lg:w-48" src={data.avatar ? data.avatar : useravatar } alt="" />}
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
                        <p>{data.location ? data.location : "Daxil edilməyib" }</p>
                        <p>{data.jobtype  ? data.jobtype : "Daxil edilməyib" }</p>
                        <p>{data.salary  ? data.salary : "Daxil edilməyib" }</p>
                        <p>{data.phone  ? data.phone : "Daxil edilməyib" }</p>
                        <p>{data.email  ? data.emial : "Daxil edilməyib" }</p>
                      </>
                    ) : (
                      <>
                        <p>{data.birthday  ? data.birthday : "Daxil edilməyib" }</p>
                        <p>{data.gender  ? data.gender : "Daxil edilməyib" }</p>
                        <p>{data.phone  ? data.phone : "Daxil edilməyib" }</p>
                        <p>{data.email  ? data.email : "Daxil edilməyib" }</p>
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
