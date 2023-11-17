import React from "react";
import { useEffect } from "react";
import NavContact from "../../components/NavContact";
import img1 from "../../image/card-bg2.jpeg";
import img2 from "../../image/tele.webp";
import img3 from "../../image/bent.jpeg";
import img4 from "../../image/har.jpeg";
import img5 from "../../image/bent2.jpeg";
import img6 from "../../image/food.jpeg";

const Calories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-auto w-full flex justify-center">
      <NavContact />
      <div className="container min-w-[375px] h-auto md:px-2 xsm:px-0 flex flex-col mt-28 items-center">
        <div className="lg:w-[60%] md:w-[80%] sm:w-[85%] xsm:w-[90%] flex flex-col items-center">
          <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-6">
            How to Burn Calories Easily and Without a Coach
          </h1>
          <p className="text-black relative z-10 text-[16px] uppercase font-bold mb-8 left-[10px]">
            This article is written by{" "}
            <span className="text-red-600">Mohammed El andalosy</span> and was
            published on{" "}
            <span className="text-red-600">Wednesday, July 22, 2020</span> It
            takes about <span className="text-red-600">5 minutes</span> to read.
          </p>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img1} alt="" />
          </div>
          <div className="w-full py-6">
            <h1 className="text-red-600 text-2xl font-primary font-bold">
              #Information #Tips
            </h1>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-lg">
              As we learned on Fitnessbdarija, the more calories you burn
              compared to what you consume during the day, the more weight you
              will lose, and vice versa. This is a simple, understandable, and
              logical process. Before we continue with this topic, let's briefly
              review the concept of calories (what are calories) according to
              Saber. Now that you know what calories are, here are some
              essential things you can do to burn a significant amount of
              calories.
            </p>
          </div>
          <div className="w-full mt-3 mb-4">
            <h1 className="text-2xl font-primary font-bold">
              Sufficient Sleep
            </h1>
            <p className="text-gray-500 text-lg mt-3">
              The sufficient amount of sleep in a day will improve your overall
              life and your body specifically, as everything is interconnected.
              Specialists (such as the Sleep and Rest Association) recommend
              that every adult should sleep between six and a half to eight and
              a half hours, with rates varying for young children and older
              individuals. This quality sleep helps process memories and brain
              health, relaxes muscles and organs active during waking hours, and
              enhances the individual's immune system. According to an American
              scientific study, sleep also aids in fat burning. You can find a
              link to the study below, and for a more in-depth exploration,
              Saaber has a video discussing the importance of sleep.
            </p>
            <p className="text-gray-500 text-lg mt-3 mb-3">
              And according to scientific studies from Brigham Young University
              (https://www.byu.edu), getting between six and a half to eight and
              a half hours of sleep each night, consistently maintaining the
              same sleep schedule, significantly contributes to maintaining a
              healthy weight. People who stay up late watching TV or movies
              until sunrise are engaging in unhealthy behavior, jeopardizing
              their health. As our wise ancestors used to say, "Early to bed and
              early to rise, makes a man healthy, wealthy, and wise." It's not a
              problem; you can tell them at work that you were wishing for six
              and a half to eight and a half hours of sleep to maintain your
              health, but we are not responsible for their reaction.
            </p>
            <h1 className="text-2xl font-primary font-bold">Stop watching</h1>
            <p className="text-gray-500 text-lg mt-3">
              One of the things that many of us have become addicted to in the
              past ten years is constantly being on our phones or tablets,
              spending hours scrolling through Facebook, Instagram, Netflix, or
              other applications. This behavior contributes to inactivity and
              results in fewer calories being burned compared to activities that
              involve movement. Consequently, it negatively impacts your health.
              Consider taking thirty minutes from those long hours to engage in
              physical activities or follow a workout video at home without
              equipment, to avoid falling into the trap of prolonged sedentary
              behavior (link to a full-body home workout without equipment).
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div className="w-full mt-3 mb-4">
            <h1 className="text-2xl font-primary font-bold">
              Walk a lot = Burn a lot
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-3">
              Many people have a car or motorcycle; if you ask them to walk 50
              meters, they might refuse, while with a few steps, you can burn a
              lot of calories. According to a scientific study by Richardsson
              and colleagues (you can find it below), regular walking with
              simple steps can lead to weight loss. They say the more you walk,
              the more weight you lose. Another study by Professor Ed Gappmaier
              at the University of Utah states that significant weight loss can
              be achieved by walking for 45 minutes four times a week. So, don't
              just stroll with your friends every five minutes; 45 consecutive
              minutes are required. Another important thing, which Saber might
              not mention on his <span className="text-red-600">Instagram</span>
              , is that it's better to use stairs instead of the elevator.
              Stairs are essential for burning fat and working on leg and thigh
              muscles, especially if there are many stairs. It's a great way to
              stay fit.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img3} alt="" />
          </div>
          <div className="w-full mt-3 mb-4">
            <h1 className="text-2xl font-primary font-bold">
              Eat all spicy foods and their derivatives
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-3">
              All spicy foods are good for health, but not suitable for people
              who are harmed by them (without generalizing). Here we talk about
              those who have no problem eating spicy dishes like Harissa and
              various types of spicy foods, whether meat, vegetables, or ground.
              Some consider spicy food as the number 1 in weight loss because it
              contains a chemical compound called Capsaicin, which helps
              maintain (increase the speed of) metabolism. In a study conducted
              by the scientist Lejeune and his team in 2003, Capsaicin was found
              to be very effective in oxidizing stored fats in the body (it
              literally melts the fat). Moreover, this element also contains
              vitamin C, which helps maintain immune system strength. If you
              have no objections, you can start incorporating spicy foods into
              your diet, but be cautious because spicy foods can make you
              hungry.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img4} alt="" />
          </div>
          <div className="w-full mt-3 mb-4">
            <h1 className="text-2xl font-primary font-bold">
              Stop drinking soda
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-3">
              This is a well-known fact worldwide: Energy drinks or alcoholic
              beverages are also unhealthy because they contain a lot of sugars
              and calories that are not needed to meet your daily requirements.
              Sweet sodas are strongly linked to obesity. There are other
              alternatives such as fruit or vegetable juice, or even sugar-free
              beverages. You might ask an important question: Are sugar-free
              soft drinks calorie-free, or is it just advertising? Here, Saad
              explains in this video his experiment with a sugar-free soft
              drink, and you will find out the answer!
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img5} alt="" />
          </div>
          <div className="w-full mt-3 mb-4">
            <h1 className="text-2xl font-primary font-bold">
              Spice up your small and pure bites with flavor
            </h1>
            <p className="text-gray-500 text-lg mt-3 mb-3">
              One day Saber said, 'I eat small bites of popcorn, didn't
              understand it well, and it gave me a headache. Does small popcorn
              have anything to do with what you eat?' Until I found it in an
              American study (Wansink & Kim). You can find the link to it below.
              They conducted it on popcorn, and found that large portions of
              seasoning contribute to eating more, even if you don't like the
              food much, just to finish the seasoning. So, if you're trying to
              control your eating, be careful not to over-season your food. By
              the way, for lunch, try using less seasoning so you don't get
              tired of the food. Remember, wasting food is not good, but don't
              sacrifice your health because of excessive eating. Speaking of
              food, the type of food you consume should consist of 50%
              non-starchy vegetables, 30% protein rich in nutrients, and 20%
              fruits and dietary fats. And don't forget to drink water
              throughout the day!
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={img6} alt="" />
          </div>
          <div className="w-full mt-3 mb-4">
            <p className="text-gray-500 text-lg mt-3 mb-3">
              Finally, these are just simple steps for an ordinary person to
              burn and avoid a significant amount of excess calories that can
              lead to obesity. Before we move on to those who are proficient in
              English and love to read books, I recommend this beautiful book by
              Jonathan Bailor called The Calorie Myth
            </p>
            <hr />
          </div>
          <div className="px-3 text-gray-500">
            <li className="text-md">
              The first study is an American scientific study on sleep and fat
              burning: Bailey BW, Allen MD, LeCheminant JD, Tucker LA, Errico
              WK, Christensen WF, Hill MD (2013) Objectively measured sleep
              patterns in young adult women and the relationship to adiposity.
              American Journal of Health Promotion: 131107080257006 DOI:
              10.4278/ajhp.121012-QUAN-500.
            </li>
            <li className="text-md">
              The second study by Richardson and colleagues emphasizes the
              importance of walking: Richardson CR, Newton TL, Abraham JJ, Sen
              A, Jimbo M, Swartz AM (2008) A meta-analysis of pedometer-based
              walking interventions and weight loss. Annals of Family Medicine
              6:69-77..
            </li>
            <li className="text-md">
              The third study is about the significance of large portion sizes,
              conducted by Wansink and Kim: Wansink B, Kim J (2005) Bad popcorn
              in big buckets: portion size can influence intake as much as
              taste. Journal of Nutrition Education and Behavior 37:242-245.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calories;
