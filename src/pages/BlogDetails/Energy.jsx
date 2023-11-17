import React, { useEffect } from "react";
import NavContact from "../../components/NavContact";
import img1 from "../../image/card-bg3.jpeg";
import img2 from "../../image/jisem.png";
import img3 from "../../image/fat.png";
import img4 from "../../image/spore.png";

const Energy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-auto w-full flex justify-center">
      <NavContact />
      <div className="container min-w-[375px] h-auto md:px-2 xsm:px-0 flex flex-col mt-28 items-center">
        <div className="lg:w-[60%] md:w-[80%] sm:w-[85%] xsm:w-[90%] flex flex-col items-center">
          <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-6">
            Energy
          </h1>
          <p className="text-black relative z-10 text-[16px] uppercase font-bold mb-8 left-[10px]">
            This article is written by{" "}
            <span className="text-red-600">Saad Chtou</span> and was published
            on <span className="text-red-600">Wednesday, June 24, 2020</span> It
            takes about <span className="text-red-600">5 minutes</span> to read.
          </p>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img1} alt="" />
          </div>
          <div className="w-full py-6">
            <h1 className="text-red-600 text-2xl font-primary font-bold">
              #Nutrition #Information
            </h1>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-lg">
              The human body is like a machine, much like an industrial machine
              that requires gasoline or electricity to function properly.
              Similarly, the human body obtains or stores its energy from the
              daily meals consumed throughout the day. This energy is crucial
              for maintaining the proper functioning of vital organs,
              contributing to their growth and strengthening. Therefore, the
              food we eat can be equated to the value of gasoline or a specific
              currency. Energy serves as the key or currency (such as a currency
              like the dirham) that enables us, as humans and living beings, to
              carry out our activities, whether they are related to education,
              work, sports, or movements during rest. In any movement we
              perform, we essentially exchange it, or in other words, we give
              back the equivalent - energy. The human body has various ways to
              acquire this energy and provide it to the body's cells for our
              daily activities. This can be achieved through either the intake
              of food or by utilizing stored energy (derived from food).
            </p>
          </div>
          <div className="px-3 text-gray-500">
            <li className="text-lg">
              What are the energy sources for the human body?
            </li>
            <li className="text-lg">And what are the storage methods?</li>
            <li className="text-lg">
              And what are the ways for the body to provide energy during
              physical activity?
            </li>
          </div>
          <div className="w-full py-6">
            <h1 className="text-black text-2xl font-primary font-bold">
              The energy sources:
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-lg">
              As we explained in the beginning, energy is the currency. We
              obtain it from three elements in our diet: carbohydrates (sugars
              and starches), which serve as the primary source of energy,
              constituting about 30% to 60% of our daily energy needs. For
              athletes, this can reach up to 70%. The majority comes from
              complex carbohydrates and a small amount of simple sugars, which
              can be consumed during exercise as they are readily absorbed and
              used by our bodies. Their primary role is to provide energy to the
              body and supply ribose sugar, which contains five carbon atoms in
              its structure, for nucleic acids. The second source is fats,
              comprising 20% to 40% of these requirements, with athletes ranging
              from 25% to 30%. Plant-based fats such as olive oil and nuts, like
              walnuts and almonds, are preferred. Fats from marine sources such
              as fish and seafood, rich in omega-3, omega-6, or omega-9 fatty
              acids, are also recommended. Besides their energy role, fats play
              a part in hormone production, such as testosterone and
              cholesterol, known as steroid hormones. Stored fats in the body,
              i.e., adipose tissue, have another role, stabilizing internal
              organs, absorbing shocks, and providing insulation for the body.
              Lastly, proteins, serving as the final energy provider. Their
              primary role is to supply amino acids to our body cells for
              rebuilding and maintaining their structure. For an average person,
              proteins account for 15% to 20% of daily energy needs, while for
              athletes, it ranges from 20% to 40%. It is advisable that proteins
              come from animal sources due to their high biological value, as
              opposed to plant sources with a lower biological value, meaning
              they lack essential amino acids such as lysine, methionine,
              phenylalanine, isoleucine, valine, threonine, histidine, and
              tryptophan. Plant proteins may not provide these essential amino
              acids in sufficient amounts (essential for our body to produce
              them on its own). Therefore, animal proteins are considered
              better, but a mix of both animal and plant sources is recommended.
              When considering these energy sources, it's crucial not only to
              focus on quantity but also on quality. For fats, their selection
              is critical, aiming for a ratio of 3:1 saturated to unsaturated,
              3:1 monounsaturated to polyunsaturated. Carbohydrates should
              mainly come from complex carbohydrates and starches, with a
              significantly higher ratio than simple and fast sugars. For those
              who want to delve deeper into this topic
            </p>
          </div>
          <div className="w-full py-6">
            <h1 className="text-black text-2xl font-primary font-bold">
              Storage:
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-lg">
              As for sugars, after the process of digestion and breakdown, they
              are converted into simple sugar, glucose, fructose, etc. The body
              stores them in the form of "glycogen" as a primary source for
              storage. Glycogen is a long chain of glucose stored in the liver
              and muscles for rapid use. An average person has around 400 to 500
              grams of glycogen.
            </p>
          </div>
          <div className="h-auto w-full mt-8">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-lg">
              As for the remaining glucose, in case of surplus, the body either
              converts it into fats and stores it in fat cells or eliminates it
            </p>
          </div>
          <div className="h-auto w-full mt-8">
            <img src={img3} alt="" className="w-full" />
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-lg">
              As for fats, after their digestion and breakdown in the small
              intestine, they are converted into simple fats, fatty acids, which
              are then stored in fat cells in the form of triglycerides. Here,
              body fat is formed, constituting around 20-30% in women and
              between 10-20% in men. Proteins, on the other hand, are not stored
              in the body but are used for various purposes, such as muscle
              building, enzyme production, and surface proteins on our cells.
              They also contribute to the production of intermediary proteins
              found in the cell wall. Proteins provide amino acids for the
              synthesis of ribonucleic acids. Therefore, proteins do not have a
              primary storage form. In the case of a surplus, the body converts
              them into glucose
            </p>
          </div>
          <div className="w-full mt-3">
            <h1 className="text-2xl font-primary font-bold">
              Providing energy during physical activity:
            </h1>
            <p className="text-gray-500 text-lg mt-3">
              Here, we discuss how our bodies utilize various sources to produce
              energy, and we have three systems:
            </p>
          </div>
          <div className="h-auto w-full mt-8">
            <img src={img4} alt="" className="w-full" />
          </div>
          <div className="w-full mt-3">
            <h1 className="text-2xl text-red-600 text-[18px] uppercase font-bold">
              The phosphagen system:
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-4">
              ATP-CP is an energy source stored in muscles, and its usage occurs
              at the beginning of physical activity. Unfortunately, the quantity
              of ATP-CP in the body is very low, providing explosive energy for
              a duration ranging from six to seven seconds. The body can
              regenerate ATP-CP through the breakdown product, which is ADP.
            </p>
            <h1 className="text-2xl text-red-600 text-[18px] uppercase font-bold">
              The lactic acid system:
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-4">
              After the depletion of phosphagen sources, our body turns to
              glycogen, producing energy through the breakdown of glycogen.
              Here, it returns to the process of glycolysis, giving us energy
              and lactic acid in the absence of oxygen. When the quantity is
              high in the body, it can lead to severe fatigue and muscle
              soreness. Typically, this system is active in short-duration
              activities, such as a 100m sprint or bodybuilding exercises.
              Therefore, it is recommended to consume foods and drinks that
              reduce lactic acid in the blood after a workout, often with an
              alkaline nature (opposite of acidic), such as milk and its
              derivatives during the first few hours post-training, or ingesting
              bicarbonates that help reduce it
            </p>
            <h1 className="text-2xl text-red-600 text-[18px] uppercase font-bold">
              The aerobic system:
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-4">
              This system is used in resistance exercises of long or moderate
              duration, providing a huge amount of energy from its storage
              sources. It gives us approximately: 36 ATP when using glycogen;
              147 ATP when using fatty acids, as well as carbon dioxide as a
              byproduct extracted through the exhalation process, and hydrogen
              dioxide released as sweat, which has no negative impact on our
              body. Therefore, it is recommended to train in well-ventilated
              sports environments to encourage our bodies to follow this system!
            </p>
            <h1 className="text-2xl text-[18px] uppercase font-bold">
              Summary:
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-4">
              The human body requires proper care to function optimally. We need
              to provide it with the best nutrients to ensure it doesn't fail us
              during challenging times. Additionally, optimizing energy
              efficiency is crucial while avoiding problems that could
              negatively impact our exercise and nutrition. Given all of the
              above, nutrition has a direct impact on our athletic performance.
              Therefore, it is our duty to balance and organize it in a way that
              our bodies can adapt to it without feeling pressured or
              overwhelmed. This is aimed at regulating and improving our
              performance.
            </p>
            <p className="text-gray-500 text-lg mt-3 mb-4">
              <span className="text-xl font-bold">Article author:</span> Saad
              Chtou
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Energy;
