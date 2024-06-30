import React, { useEffect, useState } from "react";
import style from "./about.module.css";
import Design from "../../assets/images/design.png";
import Yusif from "../../assets/images/yusif.png";
import Emil from "../../assets/images/emil.png";
import Tural from "../../assets/images/tural.png";
import Aynur from "../../assets/images/aynur.png";
import Gunel from "../../assets/images/gunel.png";
import Aydan from "../../assets/images/aydan.png";
import Mission from "../../assets/images/mission.jpg";
import Embawood from "../../assets/images/embawood.png";
import Butterfly from "../../assets/images/butterfly.png";
import Gulfstream from "../../assets/images/gulfstream.png";
import Defacto from "../../assets/images/defacto.svg";
import Carat from "../../assets/images/carat.png";
import Asth from "../../assets/images/asth.png";
import Worker from "../../Components/Worker/Worker";
import Statistic from "../../Components/Statistic/Statistic";
import Reasons from "../../Components/Reasons/Reasons";

const YourComponent = () => {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const fullText = "Biz iş tapmağı asanlaşdırırıq";

  useEffect(() => {
    let timeout;
    if (deleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
    }

    if (text === fullText) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (text === "" && deleting) {
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting]);

  return (
    <main>
      <section className={style.about}>
        <div className={style.autoType}>
          <span className={`${style.work} auto-type`}>
            {text}
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
          </span>
        </div>
        <div className={style.design}>
          <img className={style.designImg} src={Design} alt="design" />
        </div>
      </section>
      <section className={style.about}>
        <div className={style.container}>
          <Worker img={Aydan} name="Aydan" bgColor="#F7CF28" />
          <Worker img={Tural} name="Tural" bgColor="#005FF9" />
          <Worker img={Gunel} name="Günel" bgColor="#5E17EB" />
          <Worker img={Emil} name="Emil" bgColor="#5E17EB" />
          <Worker img={Yusif} name="Yusif" bgColor="#F7CF28" />
          <Worker img={Aynur} name="Aynur" bgColor="#005FF9" />
        </div>
      </section>
      <section className={style.numberStatistic}>
        <div className={style.statisticContainer}>
          <div className={style.numberHead}>
            <h1 className={style.numberAbout}>Qoy ədədlər danışsın</h1>
            <p className={style.digital}>
              Biz digital dünyanın adamlarıyıq, ona görə də statistikanı
              sevirik.
            </p>
          </div>
          <div className={style.numberBottom}>
            <Statistic number="261000" submissive="aylıq ziyarət sayı" />
            <Statistic number="6759" submissive="işəgötürən" />
            <Statistic number="119000" submissive="yerləşdirilmiş vakansiya" />
            <Statistic
              number="205000"
              submissive="Google-dan bizi axtaran ziyarətçi"
            />
          </div>
        </div>
      </section>
      <section className={style.reasons}>
        <div className={style.reasonsContainer}>
          <h1 className={style.reasonAbout}>Bizi seçmək üçün 6 səbəb</h1>
          <div className={style.reasonsAll}>
            <Reasons
              numberBg="1"
              reasonAbout="Məlumat bazası böyükdür"
              result="On minlərlə iş elanları, şirkətlər haqda məlumatlar, icmallar, ixtisaslar, bölgələr və s."
            />
            <Reasons
              numberBg="2"
              reasonAbout="Saytın istifadəsi rahatdır"
              result="Mobil cihazlardan rahat girmək, funksiyalardan asanlıqla istifadə etmək olur"
            />
            <Reasons
              numberBg="3"
              reasonAbout="Unikal Teleqram bot"
              result="Arzuladığınız iş telegramınıza gələn bildirişlə sizi tapır. İş özü telefonunuza gəlir:-)"
            />
            <Reasons
              numberBg="4"
              reasonAbout="Real effekt var"
              result="İş tapmaq yaxud peşəkarı işə götürmək daha asandır"
            />
            <Reasons
              numberBg="5"
              reasonAbout="Dijital transformasiya"
              result="Biz sadə prosesləri rəqəmsallaşdırırıq, elə ona görə də sürətliyik.
Bu səbəbdən Azərbaycanda digər iş saytlarını tez bir zamanda ötüb keçmişik:-)"
            />
            <Reasons
              numberBg="6"
              reasonAbout="Biz həm də məqalələr yazırıq"
              result="Busy.az-da yalnız iş elanları deyil, həm də karyera üçün biri-birindən maraqlı məqalələr, tövsiyələr, bloq yazıları qoyulur."
            />
          </div>
        </div>
      </section>
      <section className={style.mission}>
        <div className={style.missionContainer}>
          <div className={style.missionImg}>
            <img className={style.missionCompany} src={Mission} alt="" />
          </div>
          <div className={style.brend}>
            <p className={style.company}>
              Missiyamız — şirkətlərin öz imici, HR brendinqi üzərində işləməsi,
              mütəxəssislərin isə uğurlu karyera qurması, işaxtarma və
              işəgötürmə proseslərinin effektivliyini artırmaqdır.
            </p>
            <span className={style.ceo}>Tural Kərimov</span>
            <span className={style.site}>Saytın yaradıcısı</span>
          </div>
        </div>
      </section>
      <section className={style.busy}>
        <div className={style.busyContainer}>
          <h2 className={style.busyAbout}>
            Busy{" "}
            <span className={style.busyPiece}>
              ilə vaxtlarına qənaət edirlər
            </span>
          </h2>
          <div className={style.brands}>
            <img src={Embawood} alt="" />
            <img src={Butterfly} alt="" />
            <img className={style.asth} src={Asth} alt="" />
            <img className={style.carat} src={Carat} alt="" />
            <img className={style.gulfstream} src={Gulfstream} alt="" />
            <img className={style.defacto} src={Defacto} alt="" />
          </div>
        </div>
      </section>
      <section className={style.partner}>
        <div className={style.partnerContainer}>
          <div className={style.partnerAbout}>
            <h2>Partnyorluğa</h2>
            <h2>həmişə açığıq</h2>
            <p>Gəlin əməkdaşlıq edək</p>
          </div>
          <form className={style.collaboration}>
            <h2 className={style.collaborationAbout}>Bizə hər hansı əməkdaşlıq təklifiniz varsa, çəkinməyin</h2>
            <span className={style.fill}>Aşağıdakı formanı doldurun, sizə 24 saat ərzində geri zəng edəcəyik.</span>
            <input className={style.nameEmail} type="text" name="" id="" placeholder="Ad Soyad"/>
            <input className={style.nameEmail} type="text" name="" id="" placeholder="Email"/> 
            <input className={style.numberInp} type="tel" name="" id="" placeholder="50 555 55 55"/> 
            <button className={style.sendBtn}>Göndər</button>
            <span className={style.proffesional}>Peşəkarlar ilə işləməyə <span className={style.yes}>HƏ</span> de</span>
          </form>
        </div>
      </section>
    </main>
  );
};

export default YourComponent;
