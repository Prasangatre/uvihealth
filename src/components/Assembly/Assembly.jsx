import React from "react";
import DescriptionCards from "../Cards/DescriptionCards/DescriptionCards";
import Remidies from "../Remidies/Remidies";
import image1 from "./image1.svg";
import checkcircle from "./check-circle.svg";
import food from "./food-345 1.svg";
import xcircle from "./x-circle.svg";
import image2 from "./image2.svg";
import avoid from "./avoid1.svg";
import plus from "./plus2.svg";
import alcohol from "./alcohol3.svg";
import image3 from "./image3.svg";
import i31 from "./i31.svg";
import i32 from "./i32.svg";
import i33 from "./i33.svg";
import i4 from "./i4.svg";
import i41 from "./i41.svg";
import i42 from "./i42.svg";
import i43 from "./i43.svg";
import i5 from "./i5.svg";
import i51 from "./i51.svg";
import i52 from "./i52.svg";
import i53 from "./i53.svg";
const Assembly = () => {
  return (
    <>
      {/* Passing Props to different Components */}
      <DescriptionCards
        imagePath={image1}
        boldheading="Inflammation "
        description="Auto-immune conditions or chronic infections can lead to inflammation in the body. Your body releases anti-bodies 
that attack the thyroid cells, causing it to make less thyroid hormone leading to hypothyroidism."
        percentage="66"
        circulartext="Moderate"
      />

      <Remidies
        imagePath1={checkcircle}
        imagePath2={xcircle}
        imagePath3={food}
        Text1="Add anti-
inflammatory foods"
        Text2="Practice elimination 
diet under guidance"
        Text3="Eat nutrient
dense foods"
      />

      <DescriptionCards
        imagePath={image2}
        boldheading="Gut Health"
        description="Irritable bowel, diarrhoea, food intolerances or constipation are the biggest signs of leaky gut, i.e. presence of microbes in the digestive tract. Gut health and thyroid are closely inter-connected as your gut houses the most immune cells in body"
        percentage="33"
        circulartext="Mild"
      />

      <Remidies
        imagePath1={avoid}
        imagePath2={plus}
        imagePath3={alcohol}
        Text1="Avoid Dairy
Products"
        Text2="Cut processed/ high 
sugar foods"
        Text3="Eat nutrient
dense foods"
      />

      <DescriptionCards
        imagePath={image3}
        boldheading="Metabolic Stress"
        description="Irritable bowel, diarrhoea, food intolerances or constipation are the biggest signs of leaky gut, i.e. presence of microbes in the digestive tract. Gut health and thyroid are closely inter-connected as your gut houses the most immune cells in body"
        percentage="90"
        circulartext="Severe"
      />

      <Remidies
        imagePath1={i31}
        imagePath2={i32}
        imagePath3={i33}
        Text1="Practice deep
breathing / meditation"
        Text2="Do yoga & strength
excercises"
        Text3="Sleep 7-8 hours to 
keep stress in check"
      />

      <DescriptionCards
        imagePath={i4}
        boldheading="Nutritional Deficiencies"
        description="Common nutritional deficiencies of Vitamin D, Vitamin B12, Vitamin A, Vitamin B2, Vitamin C, Magnesium, or Zinc can contribute to severity of hypothyroidism."
        percentage="57"
        circulartext="Moderate"
      />
      <Remidies
        imagePath1={i41}
        imagePath2={i42}
        imagePath3={i43}
        Text1="Add supplements
to your diet"
        Text2="Include magnesium
rich food"
        Text3="Improve dietary
fibre intake"
      />

      <DescriptionCards
        imagePath={i5}
        boldheading="Genetics & Environment"
        description="Genetic factors play a role in more than 75% of the thyroid cases. Moreover, exposure to toxins like mercury, fluoride
and fertilizers have been found to affect thyroid function
by recruiting antibodies to attack the thyroid"
        percentage="58"
        circulartext="Moderate"
      />
      <Remidies
        imagePath1={i51}
        imagePath2={i52}
        imagePath3={i53}
        Text1="Limit Toxin
Exposure"
        Text2="Cut down 
plastic use"
        Text3="Sleep 7-8 hours to 
keep stress in check"
      />
    </>
  );
};

export default Assembly;
