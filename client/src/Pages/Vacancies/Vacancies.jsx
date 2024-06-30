import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from "../../Redux/vacanciesSlice";
import Vacancycard from "../../Components/Vacancycard";

const Vacancies = () => {
  const dispatch = useDispatch();
  const { vacancies, vacancyStatus } = useSelector((state) => state.vacancies);
  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("0");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const handleMinAgeChange = (e) => {
    const value = Math.max(0, Math.min(70, e.target.value));
    setMinAge(value);
  };

  const handleMaxAgeChange = (e) => {
    const value = Math.max(0, Math.min(70, e.target.value));
    setMaxAge(value);
  };

  const handleResetFilters = () => {
    setSearch("");
    setMinAge("");
    setMaxAge("");
    setCityFilter("");
  };

  const filteredElements = () => {
    let filtered = vacancies.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );

    if (minAge !== "" || maxAge !== "") {
      filtered = filtered.filter((item) => {
        const age = parseInt(item.age, 10);
        return (
          (!minAge || age >= parseInt(minAge, 10)) &&
          (!maxAge || age <= parseInt(maxAge, 10))
        );
      });
    }

    if (cityFilter !== "") {
      filtered = filtered.filter((item) => item.location.toLowerCase().includes(cityFilter));
    }

    filtered = filtered.sort((a, b) =>
      a.premium === b.premium ? 0 : a.premium ? -1 : 1
    );

    return filtered;
  };

  useEffect(() => {
    dispatch(getVacancies());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="p-10 text-xl">Vakansiyalar | İş elanları</h1>
      <div className="container flex items-start lg:flex-row flex-col ">
        <div className="w-full shadow-custom mb-10 ">
          <div className="">
            {vacancyStatus === "loading" ? (
              <Loading />
            ) : (
              <div className="flex flex-wrap w-full justify-center">
                {filteredElements().length > 0 ? (
                  filteredElements().map((item, index) => (
                    <Vacancycard
                      key={item.id}
                      props={item}
                      backgroundColor={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    />
                  ))
                ) : (
                  <div className="text-center text-gray-600 mt-4">
                    Axtarışa uyğun heç bir vakansiya tapılmadı.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-4 py-4 lg:max-w-[450px]">
          <div className="w-[90%] min-h-36 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center">
              <div className="w-full mb-4 ">
                <h1 className="pb-6 font-semibold">
                  Açar-kəlmələr ilə axtarış
                </h1>
                <input
                  className="border p-1 pl-2 rounded w-full lg:w-72"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  placeholder="Axtar..."
                  type="text"
                />
              </div>
              <div className="w-full mb-4 hidden">
                <h1 className="pb-6 font-semibold">Minimum yaş</h1>
                <input
                  className="border p-1 rounded w-full "
                  type="number"
                  onChange={handleMinAgeChange}
                  value={minAge}
                  min="15"
                  max="70"
                />
              </div>
              <div className="w-full mb-4 hidden">
                <h1 className="pb-6 font-semibold">Maksimum yaş</h1>
                <input
                  className="border p-1 rounded w-full hidden"
                  type="number"
                  onChange={handleMaxAgeChange}
                  value={maxAge}
                  min="15"
                  max="70"
                />
              </div>
              <div className="w-full mb-4 ">
                <h1 className="pb-6 font-semibold">Şəhər </h1>
                <input
                  className="border p-1 rounded w-full lg:w-72"
                  placeholder="Şəhər adı yazın..."
                  onChange={(e) => setCityFilter(e.target.value.toLowerCase())}
                  value={cityFilter}
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button
                className="ml-4 border w-24 h-10 font-medium tracking-wide rounded bg-red-600 text-white border-none"
                onClick={handleResetFilters}
              >
                Təmizlə
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:w-[65%] w-full lg:px-0 p-8">
          <p>
            Saytımızda müxtəlif sahələrə aid vakansiyalar mövcuddur. Hər bir
            insanın bacarıq və təcrübəsindən asılı olaraq işləyə biləcəyi
            sahələr fərqlidir. Bu zaman namizədlər özlərinə uyğun iş elanlarına
            müraciət etməlidirlər. Təhsil, iş təcrübəsi və bacarıqlar
            namizədlərin iş tapması üçün ən vacib məqamlar sırasındadır. Namizəd
            yaşadığı yerdən asılı olaraq saytımızda Bakı, Gəncə kimi iş
            elanlarını axtarıb ona uyğun olan iş vakansiyalarını sıralaya
            bilərlər. Bundan əlavə olaraq saytımızda işəgötürənlər iş elanları
            paylaşmaqla özlərinə uyğun işçiləri asanlıqla tapa bilərlər.
          </p>
          <h3 className="text-2xl font-semibold my-4">
            Vakansiyalara müraciət etmək üçün hansı təhsil və sənədlər tələb
            olunur?
          </h3>
          <p>
            Vakansiyalarda göstərilən təhsil və sənəd tələbləri peşədən asılı
            olaraq dəyişir. Bəzi peşələr bakalavr və ya magistr dərəcəsi tələb
            edildiyi halda, bəzi peşələr üçün heç bir təhsil tələb
            olunmur.
          </p>
          <p>
            Vakansiyalara müraciət edərkən tələb olunan təhsil və sənədlər
            vakansiyanın özünə, şirkətin xüsusiyyətlərinə və sektorun
            tələblərinə asılı olaraq dəyişə bilər. Ümumiyyətlə, aşağıdakı
            sənədlər tələb oluna bilər:
          </p>
          <ol className="pl-8 my-4 list-decimal">
            <li>
              <em>Diplom və sertifikatlar:</em> Təhsil dərəcənizi və
              ixtisaslaşdığınız sahəni sübut edən sənədlər.
            </li>
            <li>
              <em>Referansla bağlı sənədlər:</em> Əvvəlki iş yerlərindən
              aldığınız referans və təcrübənizi sübut edən digər sənədlər.
            </li>
            <li>
              <em>CV:</em> Təhsil, uğurlarınız və iş təcrübənizi özündə əks
              etdirən sənəd.;
            </li>
            <li>
              <em>Sahəyə uyğun sertifikatlar:</em> Məsələn, 1C operator
              vakansiyasına müraciət etmisinizsə bu sahəyə aid sertifikat tələb
              oluna bilər.
            </li>
          </ol>
          <p>
            Hər vakansiya üçün müraciət edərkən tələb olunan sənədlərin
            siyahısını mütləq yoxlamaq lazımdır.
          </p>
          <h3 className="text-2xl font-semibold my-4">İş elanlarına necə müraciət edə bilərsiniz?</h3>
          <p>
            Busy.az-da iş elanlarına daxil olub müraciət edə bilərsiniz.
            Busy.az-ın filtrl’ri sayəsində namizədlər şəhər, rayon, iş tərzi,
            vəzifə kimi meyarları müəyyən edərək özünə uyğun elanları sıralaya
            bilər. Daha sonra özünüzə uyğun gördüyünüz elana tıkladıqdan sonra
            “müraciət et” düyməsini klikləyin, vakansiyadan asılı olaraq mail
            yaxud telefonla müraciətinizi göndərə bilərsiniz.
          </p>
          <p>
            İş elanlarını oxumaqda və müraciət etməkdə uğurlu olmaq üçün nəzərə
            almanızı tövsiyə etdiyim bəzi məqamlar:
          </p>
          <ul className="pl-8 my-4 list-disc">
            <li>
              <strong>İşəgötürən şirkət:</strong> Şirkətin adını, reytinqini və
              oradakı vəziyyəti araşdırmaq mühüm bir addımdır.
            </li>
            <li>
              <strong>Vəzifə təsviri:</strong> İşin tamamilə nə tələb etdiyinə
              diqqətli şəkildə baxın. Bu sizin işə uyğun olub-olmadığınızı
              aydınlaşdırmağa kömək edər.
            </li>
            <li>
              <strong>Tələb olunan bacarıqlar və təcrübə:</strong> Tələb olunan
              bacarıqlar və iş təcrübəsi sizin bu vəzifə üçün uyğun
              olub-olmadığınıza qərar verməniz üçün əsas faktorlardan biridir.
            </li>
            <li>
              <strong>Maaş və digər faydalar:</strong> İş elanında maaş və digər
              faydaların təsviri mövcuddursa, buna diqqət edin. Əgər maaş
              göstərilmirsə, müsahibə zamanı bu məsələni öyrənin.
            </li>
            <li>
              <strong>İşin yeri:</strong> İşin yerləşdiyi lokasiyanı nəzərə
              alın. Siz üçün nə qədər asan çatıla bilər olduğunu yoxlayın.
            </li>
            <li>
              <strong>İş qrafiki:</strong> Full-time və ya part-time iş günü,
              evdən iş, frilans, remote iş, səyahət və ezamiyyət tələb olunması
              və s. kimi detallara diqqət edin.
            </li>
            <li>
              <strong>Müraciət tarixi:</strong> İş elanında son müraciət tarixi
              göstərilibsə, məhz bu tarixdən əvvəl müraciət edin.
            </li>
            <li>
              <strong>Əlaqə məlumatları:</strong> İş elanında göstərilən əlaqə
              məlumatlarına diqqət edin və müraciət zamanı məhz bu məlumatları
              istifadə edin.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold my-4">İş elanları daha çox hansı bölgələrdə mövcuddur?</h3>
          <p>
            İş elanları daha çox inkişaf etmiş və şəhər tipli ərazilərdə vardır.
            Bakı şəhəri iş elanlarının ən çox paylaşıldığı bölgədir. Sumqayıt və
            Gəncə kimi inkişaf etmiş şəhərlərdə bir çox sektordan şirkətlər
            müxtəlif vəzifələr üçün iş elanları dərc edirlər. Kənd təsərrüfatı
            və ya turizmin inkişaf etdiyi bölgələrdə mövsümi işçilərə ehtiyac
            vardır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
