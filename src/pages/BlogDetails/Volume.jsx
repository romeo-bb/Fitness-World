import React, { useEffect } from "react";
import NavContact from "../../components/NavContact";
import card from "../../image/card-bg4.jpeg";
import bg_2 from "../../image/tor.jpeg";
import img1 from "../../image/Img1.png";

const Volume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-auto w-full flex justify-center">
      <NavContact />
      <div className="container min-w-[375px] h-auto md:px-2 xsm:px-0 flex flex-col mt-28 items-center">
        <div className="lg:w-[60%] md:w-[80%] sm:w-[85%] xsm:w-[90%] flex flex-col items-center">
          <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-6">
            Volume
          </h1>
          <p className="text-black relative z-10 text-[16px] uppercase font-bold mb-8 left-[10px]">
            The article is written by{" "}
            <span className="text-red-600">Radwan Al-Haydouri</span> and was
            published on{" "}
            <span className="text-red-600">Monday, June 22, 2020</span> It takes
            about <span className="text-red-600">3 minutes</span> to read.
          </p>
          <div className="rounded-lg overflow-hidden w-full h-auto flex justify-center">
            <img className="w-full" src={card} alt="" />
          </div>
          <div className="w-full py-6">
            <h1 className="text-red-600 text-2xl font-primary font-bold">
              #Exercises #Infomation
            </h1>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-lg">
              Do you train enough? Do you train more than necessary? These are
              questions that most people who have been in a certain period of
              their lives ask themselves when facing difficulty falling asleep.
              Answering this question is a bit challenging because when you
              start delving into questions like these, you realize that the
              fundamental principle is 'Show me, tell me.' This is a good signal
              that allows you to know yourself, indicating that you lack the
              desire to improve mentally and physically. In this article, we
              will discuss this topic in detail and provide you with figures
              (something most people want to hear). We won't keep you in the
              general framework but rather provide detailed information! Follow
              along with me; by the end of the article, you'll be more excited
              to get back to training and work on the methods we'll present to
              you. If you're not interested, just follow and pay attention to
              each point we discuss. The article will be divided into four
              sections
            </p>
          </div>
          <div className="px-3 text-gray-500">
            <li className="text-lg">
              The first section explains what the exercise volume is.
            </li>
            <li className="text-lg">
              The second section details how we can increase the exercise volume
              between each session.
            </li>
            <li className="text-lg">
              The third section provides the number of sets that can be done for
              each muscle per week to avoid overtraining, as increasing exercise
              volume is more important than increasing intensity.
            </li>
            <li className="text-lg">
              The fourth point discusses how we can manipulate the exercise
              volume to achieve the maximum possible muscle gain.
            </li>
          </div>
          <div className="w-full py-6">
            <h1 className="text-black text-2xl font-primary font-bold">
              What is the exercise volume
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-lg">
              The exercise volume, in essence, is the result of this equation:
              (Weight × Number of Repetitions × Number of Sets). Let's take a
              squat exercise as an example to make it easier to understand. For
              instance, in this exercise, we perform 3 sets, each consisting of
              10 repetitions, and we can lift 60 kilograms in each set. So, (60
              × 10 × 3 = 1800)
            </p>
          </div>
          <div className="h-auto w-full mt-8">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-lg">
              In short, the exercise volume, which we achieved here, is
              represented by this equation (weight × number of repetitions ×
              number of sets). Applying this to all the exercises we performed
              in that session, let's say, for example, during leg day, we did 5
              different exercises, each yielding a volume of 1800. So, when we
              multiply these five exercises by 1800, we get a total volume of
              9000! Therefore, on leg day, we worked with a total exercise
              volume of 9000. Now, why bother with these calculations? The
              answer is simple. When you go through that first year, at least,
              your body will enter a phase of rapid muscle building, regardless
              of how you trained it. The key is to consistently provide your
              muscles with more than you gave them in the previous session. This
              is where you need to respect the rule that says if you want your
              muscle to grow continuously, give it more than you gave it in the
              last session. So, pay attention during the session, calculate the
              volume, and in the next session, for that specific muscle, make
              sure you do more than last time. It's that simple, right?!
            </p>
          </div>
          <div className="w-full mt-3">
            <h1 className="text-2xl font-primary font-bold">
              How can we increase the volume between each session?
            </h1>
            <p className="text-gray-500 text-lg mt-3">
              Very easy! Here you have three methods: either increase the number
              of repetitions, or the number of sets, or increase the weight. The
              most important thing is not to recommend increasing the number of
              sets because it's not the best method. Instead, increasing
              repetitions and weight is the best thing you can do, and this is
              what is called "progressive overload.
            </p>
          </div>
          <div className="h-auto w-full mt-8">
            <img src={bg_2} alt="" className="w-full" />
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-lg">
              So, to clarify the concept further, let's say you can increase a
              bit in each set. For example, you can add half a kilogram or a
              kilogram. Even if you get a little bit, it's okay. Over time, when
              I tell you that your body, in these conditions, recognizes the
              difference, trust me. Let's give you an example for better
              understanding. Suppose on Monday, you have a chest workout with 5
              different exercises, each consisting of 4 sets, and each set has
              10 repetitions. Let's assume the exercise volume came out to be
              10,000. Now, when you go next time to train your chest, you should
              aim to reach, let's say, 10,100 in the exercise volume. So, for
              the first couple of exercises, try to increase the number of
              repetitions or the weight, getting closer to that number you set
              in your mind when you calculated the exercise volume. This way,
              you ensure that your chest is on an upward trajectory. Apply this
              approach to all muscles, both small and large.
            </p>
          </div>
          <div className="w-full mt-3">
            <h1 className="text-2xl font-primary font-bold">
              The number of sets you do for each muscle
            </h1>
            <p className="text-gray-500 text-lg mt-3">
              is relative because it depends on the individual and how each
              person responds to sets. However, the typical range is from 10
              sets per session to 20 sets per session. You might ask, "How do I
              know the right number for me?" Well, I'll tell you: try it out.
              Some people with naturally strong muscles that grow easily may
              need fewer sets, while stubborn muscles might require more sets.
              So, start experimenting until you find the number that suits you.
              The key is not to go below 10 sets and try not to exceed 20 sets
              per week for each muscle. It's essential to find the balance that
              works for you during each week.
            </p>
          </div>
          <div className="w-full mt-3 mb-6">
            <h1 className="text-2xl font-primary font-bold">
              How can we manipulate the exercise volume to achieve the maximum
              possible muscle gain?
            </h1>
            <p className="text-gray-500 text-lg mt-3">
              There is a technique that people who have succeeded before use, as
              we mentioned earlier, a technique that keeps their muscles
              constantly challenged to grow. They follow a specific training
              program, let's say for six weeks. In the first week, they start
              with just ten sets per muscle per week. Then, in the second week,
              they increase it to twelve sets per muscle per week. After the
              third week, they raise it to fourteen sets per muscle per week,
              and so on until they reach twenty sets per muscle per week. After
              that, they decrease the number of sets gradually while increasing
              the weight that they were lifting in their exercises. They repeat
              the cycle, and this way, they respect the principle of increasing
              the exercise volume in each session. It makes things easier for us
              to follow our progress in addition to the increase in muscle
              strength over time. So, now we've learned what "volume" is, how to
              calculate it, and how to utilize it to achieve the maximum
              possible muscle gain. Now, with this information and these
              numbers, all you have to do is apply them to yourself, experiment,
              correct mistakes, and keep refining until it becomes easy for you.
              Ensure that you are on the right track, and remember, it doesn't
              happen overnight; it's about dedicating time and effort to
              continuously improve and face challenges. This is the beauty of
              this sport - the more we increase, the more we learn, and the more
              we face things that make us reassess, turn around, search, and
              evolve even more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Volume;
