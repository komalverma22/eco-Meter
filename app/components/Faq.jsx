import { ChevronDown } from "lucide-react";
import React from "react";

const Faq = () => {
  const DATA = [
  {
    question: `What is Ecometer?`,
    answer: `<p>Ecometer is your personal climate companion — an app that makes climate action personal, measurable, and achievable for everyone.</p>
             <p>Track your daily activities and see their impact on the planet in real-time.</p>`,
  },
  {
    question: `How does it work?`,
    answer: `<p>You log your activities: From your commute, meals, energy usage, and purchases.</p><br/>
             <p>Ecometer calculates your carbon footprint: Using scientifically-backed metrics to show your impact.</p><br/>
             <p>Get actionable insights: Personalized tips and suggestions to reduce emissions.</p><br/>
             <p>See progress: Track your improvements and contributions towards a greener planet.</p>`,
  },
  {
    question: `Why use Ecometer?`,
    answer: `<p>Because taking climate action can feel overwhelming. Ecometer simplifies it.</p>
             <br/>
             <p>Understand your impact, set realistic goals, and see measurable change. Every small action adds up.</p>
             <p>Make sustainable living a habit, not a chore.</p>`,
  },
  {
    question: `Our Promise`,
    answer: `<i>We promise to make climate action accessible, personal, and fun.</i>
             <br/><br/>
             <p>With Ecometer, you don’t just track emissions — you make a tangible difference.</p>
             <p>We provide clear, actionable guidance, a supportive community, and meaningful rewards for sustainable choices.</p>
             <p>Your journey towards a greener lifestyle is our priority.</p>`,
  },
];


  return (
    <div>
      <div id="faq" className="flex flex-col md:flex-row text-green-800">
        <div className="flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl md:text-6xl text-center font-against font-bold my-10">
            Frequently Asked Questions
          </h1>

          <h3>
            Everything you need to know about our product and service. If you
            cannot find the answer to your question, please contact us and we
            will get back to you as soon as possible.
          </h3>
        </div>

        <div className="m-auto flex w-full flex-col px-[6vw] py-10 text-green">
          {DATA.map((item, index) => (
            <details
              key={index}
              className="group border-b px-2 py-4 last:border-b-transparent mb-2"
            >
              <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                <h2 className="hover:underline-none cursor-pointer font-bold tracking-[0.1rem]">
                  {item.question}
                </h2>

                <div>
                  <ChevronDown className="h-5 transition duration-300 group-open:-rotate-180" />
                </div>
              </summary>

              <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
