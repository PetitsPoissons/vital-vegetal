// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Style & Images
import M from 'materialize-css';
import vegan from '../../assets/vegan.jpeg';
import cows1 from '../../assets/cows1.jpeg';
import factoryFarming1 from '../../assets/factory-farming1.jpeg';
import factoryFarming2 from '../../assets/hog-farm2.jpeg';
import methaneEmissions from '../../assets/methane-emissions.png';
import waterPollution from '../../assets/water-pollution.jpeg';
import lettuces1 from '../../assets/lettuces1.jpeg';
import oneWorld from '../../assets/one-world.jpeg';

const WhyVeganPage = () => {
  useEffect(() => {
    let parallaxEl = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxEl);
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={vegan}
            alt="Vegan sign in blue plate"
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <h3 className="header">Why Vegan?</h3>
          <p className="flow-text">
            Every year since 2009 in Yulin, Guangxi, China, there has been an
            event called the lychee and dog meat festival. In preparation for
            this event, thousands of dogs are kept in concrete pens. Many are
            tagged, have their tails and ears cut off, and have scars and
            bruises from going insane and attacking each other. In these areas,
            this is their life, never to see the light of day until the time of
            their death. They are raped, abused, and tortured needlessly.
          </p>
          <p className="flow-text">
            In many cosmetic and medical industries we hear about animal
            testing, performing experiments that scare and often kill other
            sentient beings. Naturally, there are large movements with millions
            participating against this sort of thing, and all over social media
            we see posts and petitions bashing this behavior and exploitation,
            leading to improvements and change. After all, how can it be okay to
            hurt innocent animals, who just want to live their lives?
          </p>
          <p className="flow-text">
            Let’s switch this situation a little. Instead of the monkeys and
            rabbits used as an object for experiment, instead of dogs kept in
            cages and mutilated by us and each other, envision a different
            animal: a cow. Or a pig, or a chicken, exploited and murdered for a
            fifteen minute meal you’ll forget about in no time.
          </p>
          <p className="flow-text">
            Suddenly social media is quiet, suddenly this is okay. But what
            difference is there really?
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={cows1} alt="Tagged dairy cows" className="parallax-img" />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            <span id="hello">Hello</span>, my name is Marielle Williamson, and I
            am vegan. I’m not going to deny the fact that animal flesh and
            secretions taste good, they really do. That was the hardest part of
            switching from vegetarian to vegan. I used to love my mom’s cream
            puffs, having cheese and pastries with my french family, and
            ordering a big fat cheeseburger behind my mom’s back when I would go
            out to lunch with my dad. I saw this as food, good food, and an
            enjoyable moment, and didn’t think about the process. The murder.
          </p>
          <p className="flow-text">
            Most people would say they are against animal abuse. We’ve seen this
            through petitions for cruelty free products, lowering the use of
            plastic straws, and increased demand for more “ethical” labels like
            free-range, pasture raised, etc. But what if these labels were just
            a curtain covering what is really happening?
          </p>
          <p className="flow-text">
            I was vegetarian for around four years, with the sole reason being
            that the concept of killing an animal for food felt wrong. Around
            six months ago, I transitioned to vegan after finding out just how
            horrid these industries were to animals. I loved cheese, eggs,
            chocolate, ice cream, you name it. But I had to really ask myself,
            what valid reason do I have as an individual for supporting such an
            industry?
          </p>
          <p className="flow-text">
            The first I thought of was taste. People eat meat and animal
            products because they get pleasure from the taste. But does taste
            justify encouraging abusive industries? We could compare it to
            another sense; hearing. If someone prefers the sound of an animal
            screaming while being slaughtered over the sound of a lawn mower,
            for instance, could we also consider that acceptable?
            <br />
            Keep in mind these are individuals, with the capacity to feel and to
            love. Are the 15 minutes of pleasure we get from an animal-based
            meal worth more than the well-being of the animal itself?
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={factoryFarming1}
            alt="Factory farming for milk production"
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            But, you don’t need to kill an animal for milk and eggs, right?
            While that is technically true, these companies treat animals as
            objects and machines, and exploit them for their products until they
            are all eventually sent to slaughter.
          </p>
          <p className="flow-text">
            Cows are mammals and need to be pregnant to produce milk. This is
            why farmers use a process called artificial insemination to forcibly
            impregnate a cow. Only once she gives birth, she is separated from
            her infant usually less than 48 hours after birth, and the calf is
            sent to slaughter if they are male, and if female, go through the
            same lifelong invasive procedures as their mother until slaughter.
            Similarly in the egg industry male chicks grow to be smaller than
            females and cannot produce eggs, therefore are deemed useless and
            gassed or macerated in a grinder on their first days of life.
          </p>
          <p className="flow-text">
            This isn’t well known, as these dairy industries work with the
            government to promote their product and hide the slaughter. Once I
            found out about this, I was left wondering what else was hidden from
            us.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={factoryFarming2}
            alt="Industrial hog farm"
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            For those less concerned about the well-being of animals,
            considering we are in fact omnivores and one might call it “the
            circle of life”, we can think about our planet.
          </p>
          <p className="flow-text">
            In October 2018, the intern governmental panel released a statement
            saying that in order to remain at or below the 1.5 degree celsius
            increase, greenhouse gas emission needed to be reduced by 45 percent
            before 2020, and net 0 by 2050.
          </p>
          <p className="flow-text">
            Animal agriculture produces at least 14.5% of total greenhouse gas
            emissions, which is more than all forms of transportation combined,
            according to a 2016 study by the United States food and Agriculture
            organization in correspondence with Wageningen University. Most of
            this comes from methane, as well as nitrous oxide which is three
            times more powerful at trapping heat in earth’s atmosphere than
            carbon dioxide.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={methaneEmissions}
            alt="Graphique showing livestock-based methane emissions in the U.S."
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            Consuming these products is damaging our planet on the earth’s
            surface, in the sky, and in the ocean. It takes at least 2,000
            gallons of water to produce one pound of beef, so you technically
            save more water not eating one steak than not showering for 5
            months. Animal farming, including fish, is the number one cause of
            water pollution and our dying oceans.
          </p>
          <p className="flow-text">
            Something more to think about is the amount of land it takes to not
            only hold animals, but to grow food to feed them. Currently two
            thirds of the land we use to grow crops is then fed to livestock
            that we consume, when we could eat the plants ourselves and as a
            result save land and lives. If we are able to feed 80 billion farm
            animals, but cannot feed 7.8 billion people, something needs to be
            changed.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={waterPollution}
            alt="Pipes dumping soiled water"
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            On the other hand, if our ancestors had not hunted for food, we
            wouldn't be alive today. We need the milk for strong bones, and
            steak for its iron, right?
          </p>
          <p className="flow-text">
            While eating animal products has kept our ancestors alive, it fell
            into the concept of necessity. The same way lions kill gazelles and
            sharks kill fish, our ancestors needed to hunt in order to live.
            People living in developed countries with easy access to markets and
            food don’t need to eat these products in order to survive.
            Consequently, the harm we cause towards animals and the environment,
            as well as ourselves, is needless.
          </p>
          <p className="flow-text">
            The American Dietetic Association, which is one of the largest
            bodies of nutrition professionals, has made the statement that a
            whole foods plant-based diet is “healthy, safe, and nutritionally
            adequate for all stages of life including pregnancy and infancy”.
            They also, along with the British Dietetic Association, stated that
            not only is it beneficial, but helps reverse illnesses and increases
            longevity. These bodies of health have over 100,000 certified
            practitioners. Other research has shown that consumption of meat and
            animal products are associated with leading diseases, including
            diabetes, high cholesterol, and heart disease. As for needing
            calcium and iron, protein and omegas, we can turn to plants, the
            original source. Some of earth’s strongest animals like gorillas and
            bulls are herbivores, and they don't seem to be protein deficient.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={lettuces1}
            alt="Rows of lettuces"
            className="parallax-img"
          />
        </div>
      </div>
      <div className="section white">
        <div className="row container why-vegan">
          <p className="flow-text">
            As new information is coming out, more people are switching to a
            plant-based diet from finding out that the things we’re told growing
            up, the lies published by the media for profit are misleading and
            disingenuous. This even goes into schools advertising milk, when
            behind the scenes are supported by a government that works with the
            dairy industry and fast food companies.
          </p>
          <p className="flow-text">
            People want change, and we’ve seen it over time. For example, stores
            have been using less plastic straws in an attempt to “save the
            turtles”, even though in reality the greatest polluter in our oceans
            are fish nets. This is still a step in the right direction, and as
            an individual you can do your part, even if it takes time and is
            hard at first.
          </p>
          <p className="flow-text">
            So, instead of asking ourselves, why vegan? Try asking yourself, why
            not vegan? What explanation is there for supporting an industry that
            is abusive towards others, damaging to our health and killing our
            planet? I truly hope you’ve taken away some inspiration from my
            project, and start thinking about ways to make more ethical choices.
            Keep in mind, animal products aren’t only in food! They can be in
            cosmetics, clothes, and decor. For more information, you can look at
            the list of videos/documentaries on my page, and I wish you the best
            of luck on your journey! Remember, a little goes a long way.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={oneWorld}
            alt="One world activist sign"
            className="parallax-img"
          />
        </div>
      </div>
    </>
  );
};

export default WhyVeganPage;
