import React from "react";
import style from "./blog.module.css";
import Cart from "../../Components/Cart/Cart";
import Spicker from "../../assets/images/spiker.jpg";
import Globe from "../../assets/images/globe.jpg";
import Man from "../../assets/images/man.jpg";
import Meet from "../../assets/images/meet.jpg";
import Group from "../../assets/images/group.jpg";
import Understand from "../../assets/images/understand.jpg";
import Handtohand from "../../assets/images/handtohand.jpg";
import Work from "../../assets/images/work.jpg";
import Rising from "../../assets/images/rising.jpg";
import Meeting from "../../assets/images/meeting.jpg";
import Blueroom from "../../assets/images/blueroom.jpg";
import Team from "../../assets/images/team.jpg";
import Statisticteam from "../../assets/images/statisticteam.jpg";
import Satisfied from "../../assets/images/satisfied.jpg";
import Computer from "../../assets/images/computer.jpg";
import Agree from "../../assets/images/agree.jpg";
import Human from "../../assets/images/human.jpg";

const Blog = () => {
  return (
    <main>
      <section className={style.blogSec}>
        <h2 className={style.blogHead}>Bloq</h2>
        <div className={style.blogProducts}>
          <Cart
            img={Spicker}
            text="Azərbaycanda HR avtomatizasiyanın bugünkü durumu. Səbinə Mehtizadə ilə müsahibə."
          />
          <Cart
            img={Globe}
            text="Karyera üçün xaricdə təhsil nə qədər önəmlidir?"
          />
          <Cart
            img={Man}
            text="İnkişaf etməyən işçilərə qarşı nə edə bilərsiniz?"
          />
          <Cart
            img={Meet}
            text="İşçilərə mükafat verərkən nələrə diqqət etməlisiniz?"
          />
          <Cart img={Group} text="Layihə idarəetməsi üçün əsas 7 bacarıq" />
          <Cart
            img={Understand}
            text="Satış komandasına ideal namizədləri seçərkən diqqət etməli olduğunuz 7 məqam"
          />
          <Cart
            img={Handtohand}
            text="İşçiləri mükafatlandırmanın məqsədi və əhəmiyyəti nədir?"
          />
          <Cart
            img={Work}
            text="İnsan resurslarının qarşılaşdığı ən böyük 5 problem"
          />
          <Cart
            img={Meeting}
            text="Etdiyiniz səhvdən sonra inamı bərpa etməyin 5 yolu"
          />
          <Cart
            img={Team}
            text="Komandanızın sizə olan etibarını necə sınaya bilərsiniz?"
          />
          <Cart
            img={Blueroom}
            text="İş yerində ünsiyyət dili işçilərin işə cəlb edilməsinə necə təsir edir?"
          />
          <Cart
            img={Rising}
            text="Yüksəliş 2024 (Azərbaycan, Dünya, İdarəetmənin əsasları, Müasir trendlər bloku) sualları"
          />
          <Cart
            img={Computer}
            text="Azərbaycanda IT sahəsi üzrə əmək bazarının analizi. Ən çox hansı bacarıqlara ehtiyac var?"
          />
          <Cart 
          img={Computer} 
          text="İşçiləri inkişaf etdirməyin 5 yolu" />
          <Cart
            img={Statisticteam}
            text="Frilans yoxsa full-time işçi daha yaxşıdır?"
          />
          <Cart
            img={Satisfied}
            text="İşçilərin xüsusi bacarıqlarını tapmağın 4 yolu"
          />
          <Cart
            img={Agree}
            text="İş elanlarınızla namizədlərin diqqətini necə cəlb edə bilərsiniz?"
          />
          <Cart
            img={Human}
            text="İnsan resurslarında texnologiyanın hansı rolları var?"
          />
        </div>
      </section>
    </main>
  );
};

export default Blog;
