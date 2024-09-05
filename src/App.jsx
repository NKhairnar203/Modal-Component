import React, { useState } from "react";
import Model from "./components/Model";

const App = () => {
  const [open, setOpen] = useState(false);

  function hadleOpen() {
    setOpen(true);
  }
 

  const model = () => setOpen(false);

  return (
    <div>
      <button className="open-btn" onClick={hadleOpen}>
        Open Model
      </button>

      {open && <Model model={model} />}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sunt
        odit, temporibus aliquam amet doloribus sequi suscipit voluptate esse a
        voluptatum quisquam sed eum recusandae rerum nihil accusantium.
        Excepturi, deleniti. Minus aspernatur, error vitae sed sint doloremque,
        earum quo sunt magni ratione vero dolore ducimus odit, reiciendis
        aliquid quas numquam in ut natus amet. Ipsam earum quam voluptatibus
        possimus dignissimos! Ea perspiciatis a quas quibusdam rem possimus
        exercitationem vitae dignissimos eos natus mollitia, officiis facilis
        itaque. Vero voluptas quis et, libero veritatis nihil? Veritatis
        mollitia dolores illum sed maxime dolor. Ut vero eligendi atque rem
        perspiciatis praesentium veniam blanditiis ullam expedita? Id magnam,
        non cumque obcaecati quasi temporibus! Incidunt quia ipsa expedita
        quibusdam consequatur libero ducimus, saepe quas vero dolorem.
        Architecto doloremque, quisquam fugit voluptatem minus molestiae impedit
        aspernatur eos, ad numquam repellat voluptas ab dicta odio! Suscipit
        reiciendis animi numquam culpa voluptatem iusto, recusandae amet sit
        harum cumque doloremque. Facilis aspernatur illum quas, ipsa architecto
        voluptatum illo, asperiores neque iusto sapiente at nobis! Quam sed
        dolor facilis accusantium? Temporibus rerum nihil quaerat minima? Atque
        consectetur sunt tempore ab mollitia. Qui eum recusandae asperiores,
        praesentium debitis esse deserunt assumenda corrupti, porro itaque
        doloremque necessitatibus officia voluptatibus, mollitia dolores facere
        blanditiis quaerat distinctio dignissimos soluta. Fugiat nesciunt
        commodi minus expedita odit. Exercitationem blanditiis repellat numquam
        dolorem consequuntur assumenda nihil quae dolor voluptatem voluptates
        vitae dicta vel repudiandae, sed ratione laborum minima optio. A non
        modi aliquam sed asperiores! Dolore, nam officia. Nihil consequatur
        ullam voluptate officiis assumenda, tenetur beatae. Quidem molestiae
        facilis accusantium ipsam vitae nesciunt voluptates harum, libero ipsa
        minima consequuntur ad eos fuga id repudiandae amet, similique pariatur
        nam. Maiores earum corporis impedit ipsum. Ducimus, quis? Nihil est
        deleniti esse deserunt minus vitae ullam vero recusandae debitis
        reprehenderit qui eos excepturi quo, omnis labore placeat nesciunt
        facere error! Exercitationem! Ab, laborum dolores possimus magni
        distinctio debitis veniam dicta voluptates error eius tempora beatae
        labore repellat perferendis animi sed doloremque. Tempora iusto aliquam
        ipsam cupiditate quidem placeat sapiente aspernatur vel? Nulla, nesciunt
        dolor. Ab nam incidunt obcaecati iste, odio commodi consequatur eligendi
        molestias itaque et tempore odit hic maiores cumque praesentium non sint
        magni facere at aut eum enim ut. Possimus id voluptatem voluptatum nam
        reiciendis fugiat dolores porro, alias delectus facilis eius magnam odit
        doloribus recusandae, reprehenderit qui obcaecati laborum, facere
        quisquam voluptatibus maxime ipsam sint! Modi, veniam eaque. Blanditiis
        ullam suscipit alias reiciendis? Magni quo architecto nisi perferendis
        officia aliquam quos? Expedita perferendis totam ab, aliquam quaerat
        quam veniam adipisci voluptate pariatur deleniti eveniet. Eveniet vitae
        rem quas. Consequuntur voluptates quod tenetur cupiditate consectetur,
        commodi eos nihil, laborum vero possimus recusandae earum nemo quaerat
        dolore voluptatibus perspiciatis. Corrupti voluptatibus dignissimos
        fugiat et. Deleniti ut debitis laudantium corrupti eligendi! Facere
        laboriosam voluptatem itaque, rerum laborum reprehenderit doloribus
        pariatur provident dolore possimus aliquid obcaecati inventore.
        Explicabo, error aspernatur. Corrupti aut ipsam esse temporibus. Hic
        quaerat ut, illo eius commodi alias! Molestiae perspiciatis quia
        recusandae doloremque aspernatur odit, expedita architecto? Minima,
        accusamus! Debitis molestias, neque aliquam assumenda pariatur facere
        repellat, quos voluptate maiores quod, molestiae laudantium vel illo
        tenetur quasi incidunt. Quia reiciendis, iusto, aperiam ullam soluta
        optio voluptatem, aut unde cupiditate dolores consectetur neque ipsum.
        Possimus dicta commodi tenetur doloremque ut repudiandae maiores, earum
        sequi, incidunt atque consectetur tempore nesciunt. Numquam voluptatum
        suscipit eaque aliquid voluptas quibusdam quo! Natus expedita debitis
        assumenda veritatis incidunt cum maxime molestias ex, veniam quisquam
        odit vel quam? Fugiat dolorem doloremque aspernatur hic unde possimus.
        Dolor, perspiciatis. Quis placeat ad mollitia accusamus, ipsum incidunt
        molestias! Incidunt hic perspiciatis totam maxime alias aliquid sed ex
        earum laboriosam voluptatibus accusamus neque repellendus quidem, nihil
        ipsa eaque adipisci.
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          at obcaecati rerum nam beatae doloremque aliquid iusto quisquam illum
          dolorum iste expedita ab eum, dolor itaque maxime! At, repellendus
          nulla. A quas eos voluptatem odio sunt, quae sit ducimus eligendi
          quam? Quaerat ab, unde voluptatibus quam optio eum natus sint beatae
          blanditiis. Autem, quod beatae qui vero vitae adipisci perferendis.
          Mollitia dolores veritatis accusantium eum tempora repellat quibusdam
          id accusamus optio asperiores possimus adipisci placeat cumque
          nesciunt, sequi porro fugiat quae! Enim repellendus quae ab temporibus
          expedita praesentium quasi incidunt? Inventore autem repellat quos,
          iusto earum velit. Consectetur nulla, quas labore fugiat modi
          obcaecati, beatae suscipit debitis vitae cumque optio vero molestias
          repudiandae, sapiente assumenda? Sit id dolor ipsum ducimus.
          Voluptatem corporis quibusdam laboriosam placeat. Voluptas
          voluptatibus incidunt at sed magni, laudantium quaerat ullam, et
          accusamus aspernatur est maiores unde modi placeat voluptate, officia
          sint minima id obcaecati labore quidem. Incidunt officiis culpa
          facilis eius impedit, corrupti animi, harum voluptatum quaerat, modi
          enim sit amet repellendus. Possimus quis expedita, quam, esse
          cupiditate placeat aut praesentium amet provident molestiae dolores
          nihil? Ipsum blanditiis quis laudantium obcaecati! Eum, mollitia?
          Nisi, illo voluptates ipsa, deleniti odit minima officia minus
          consequuntur, nam adipisci omnis impedit blanditiis cupiditate!
          Perferendis sint harum officia, quos voluptatem voluptatibus! Rem sit
          pariatur modi a voluptatum harum in natus adipisci autem tempore
          sapiente maiores possimus quidem fugiat tempora veritatis distinctio
          asperiores nobis voluptate soluta doloremque consectetur, laborum
          fugit aperiam? Voluptatem. Labore commodi, quaerat maxime sint porro
          similique, debitis amet veritatis corporis architecto perspiciatis
          voluptas praesentium. Blanditiis laudantium culpa, cumque cupiditate,
          ad incidunt quis enim consequatur quam veniam ea, molestiae quidem?
          Tenetur sunt quidem quisquam libero, error obcaecati autem iste
          impedit earum velit architecto blanditiis similique, iure excepturi
          corrupti et atque nemo nisi fuga corporis. Perferendis magnam
          exercitationem assumenda dolore a. Non nostrum nobis soluta earum.
          Voluptates, ipsam, sunt corporis corrupti earum ipsa quibusdam rem,
          debitis quos illo in. Nisi provident repudiandae eius quam ex
          cupiditate, blanditiis tempora praesentium reiciendis voluptate. Quis
          laudantium, ipsa quia minus voluptatem officiis praesentium libero,
          accusamus autem veniam architecto exercitationem magni atque nemo.
          Quo, ipsam iure, omnis nam, labore qui consequuntur corrupti et
          pariatur ea delectus. Eum, necessitatibus! Totam nihil aliquid sint
          blanditiis eius ratione quae expedita praesentium, nesciunt deserunt!
          Dolores dolor, eligendi rem fugiat odio omnis ad, accusamus beatae
          facilis enim quidem blanditiis laboriosam facere! Nisi minus ab est
          distinctio reiciendis odio pariatur ipsa soluta eveniet earum quam,
          praesentium exercitationem numquam ipsum voluptatibus totam voluptatem
          consequuntur iure deserunt neque possimus a? Ipsum omnis ex sint!
          Optio maxime temporibus similique et necessitatibus nobis, numquam
          odio hic quisquam quos non? Mollitia, a dolor expedita tempore
          pariatur debitis vel, similique dicta inventore amet recusandae, aut
          dolorum ut rerum. Qui libero aliquid, dolor maxime exercitationem nam
          sequi beatae consequuntur fugit, ipsam culpa modi doloremque illo
          tempora iusto nobis. Sunt, corporis. Atque ducimus veniam aperiam
          magnam, saepe nam totam est. Iste itaque atque quia in labore.
          Obcaecati aspernatur, nesciunt facilis, illo temporibus ut asperiores
          veniam, dicta fugiat neque ex quos. Suscipit fugit provident
          dignissimos aliquam? Necessitatibus pariatur inventore neque expedita!
          Sequi commodi aut veritatis odit consequatur! Nobis tenetur et rem
          dolorem totam alias, corporis modi, voluptates repellat, distinctio
          optio at molestias. Impedit, in? Sequi quasi iusto repellendus facilis
          est eaque. Natus dolor placeat molestiae tempora repellendus deleniti
          in rem similique blanditiis quidem odit quae quam necessitatibus
          voluptas, magni animi amet voluptate et, labore non sequi illo nobis.
          Error, maxime odit. Libero similique adipisci minima enim voluptates,
          distinctio, iure quis autem molestias, corrupti sit? Ullam eos saepe
          consequatur repudiandae perspiciatis veniam soluta vel, error quas
          ducimus commodi dolorem autem harum magni!
        </p>
      </p>
    </div>
  );
};

export default App;
