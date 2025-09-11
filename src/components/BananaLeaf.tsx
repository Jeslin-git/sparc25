"use client";
import React from "react";
import "./banana.css";

// Import images
import leaf from "../components/banana-leaf.png";
import choruSambar from "../components/chorusambar.png";
import pazham from "../components/pazham.png";
import sarkaraUpperi from "../components/sarkaraupperi.png";
import chips from "../components/chips.png";
import mangoPickle from "../components/mangopickle.png";
import injipuli from "../components/injipuli.jpeg";
import pappadam from "../components/pappadam.png";
import uppu from "../components/salt.jpeg";
import thoran from "../components/cabbage.png";
import kalan from "../components/kalan.jpeg";
import pulissery from "../components/pulissery.png"
import olan from "../components/olan.png";
import aviyal from "../components/aviyal.jpeg";
import cucumberkichadi from "../components/cucumberkichadi.png";
import beetrootPachadi from "../components/beetrootpachadi.png";
import erissery from "../components/erissery.jpeg";
import semiyaPayasam from "../components/semiya.jpeg";
import adaPradhaman from "../components/ada.jpeg";
import rasam from "../components/rasam.jpeg";
import moru from "../components/moru.jpeg";
import sambar from "../components/sambar.png";
import pineapplepachadi from "../components/pineapplepachadi.png";
import parippu from "../components/parippu.png";
import palada from "../components/palada.png";
import vadukapuli from "../components/vadukapuli.png";
import ghee from "../components/ghee.png";
import vendakkapachadi from "../components/vendakkapachadi.png"
import kootucurry from "../components/kootucurry.png";


// Dish details
const dishInfo = {
  choruSambar: {
     name: "Matta Rice",
    category: "Staple",
    ingredients: ["Kerala red rice, water,salt"],
    significance:
      "The hearty base of the sadhya. Kerala matta rice is prized for its nutty flavor and cultural centrality to festive meals.",
  },
  pazham: {
     name: "Nenthran Pazham",
    category: "Fruit",
    ingredients: ["ripe plantain(kerala nendran banana)"],
    significance:
      "Sweet banana eaten with pappadam and ghee, a classic combo.",
  },
  sarkaraUpperi: {
   name: "Sharkara Varatti",
    category: "Crunch",
    ingredients: ["banana, jaggery, dry ginger, cardamom"],
    significance:
      "Jaggery-coated chips,sweet crunch symbolizing festivity.",
  },
  chips: {
     name: "Upperi (Banana Chips)",
    category: "Crunch",
    ingredients: ["raw banana, coconut oil, salt (Thin fried Nendran banana slices.)"],
    significance:
      "Iconic starter,crisp, golden and irresistible.Crunchy snack that begins the feast.",
    
  },
  mangoPickle: {
     name: "Mango Pickle",
    category: "Achar",
    ingredients: ["raw mango, chilli, mustard, sesame oil"],
    significance:
      "Sharp, nostalgic bite that sparks the spread.",
  },
  injipuli: {
    name: "Inji Puli (Puliyinchi)",
    category: "Achar",
    ingredients: ["ginger, tamarind, jaggery, green chilli"],
    significance:
      "Fiery-sweet ginger relish,awakens appetite and aids digestion.",
  },
  pappadam: {
    name: "Pappadam",
    category: "Crunch",
    ingredients: ["urad flour, salt, oil"],
    significance:
      "Puffed crisp served alongside rice,joyfully crushed into curries.",
  },
  uppu: {
    name: "Uppu (Salt)",
    category: "Seasoning",
    ingredients: "Rock salt.",
    significance: "Served for balance in taste.",
  },
  thoran: {
    name: "Thoran (Cabbage/Beans)",
    category: "Stir-fry",
    ingredients: ["cabbage/beans, grated coconut, mustard, green chilli"],
    significance:
      "A dry side dish, adds texture and flavor, coconut-laced stir-fry,offers texture and freshness.",
   
  },
  kalan: {
    name: "Kalan (Kurukku Kalan)",
    category: "Yoghurt-based",
    ingredients: ["raw plantain/yam, curd, pepper, fenugreek"],
    significance:
      "Thick, sour-hot yoghurt curry,its intensity balances sweeter items.",
  },
  olan: {
    name: "Olan",
    category: "Mild Curry",
    ingredients: ["ash gourd, cowpeas, coconut milk, coconut oil"],
    significance:
      "Subtle and fragrant,represents restraint and balance in the feast.",
  },
  aviyal: {
    name: "Avial",
    category: "Thick Curry",
    ingredients: ["mixed vegetables, coconut, curd, coconut oil, curry leaves"],
    significance:
      "A signature Kerala medley,celebrates harmony by uniting many vegetables in one dish.Represents unity in diversity.",
  },
  beetrootPachadi: {
    name: "Beetroot Kichadi",
    category: "Yoghurt-based",
    ingredients: ["beetroot, curd, mustard, curry leaves"],
    significance:
      "Vibrant colour on the leaf,contrasts textures and tastes.",
  },
  erissery: {
    name: "Erissery",
    category: "Thick Curry",
    ingredients: ["pumpkin, cowpeas, coconut, roasted coconut"],
    significance:
      "Comforting pumpkin-cowpea curry,often garnished with roasted coconut for crunch.Represents tradition and health.",
  },
  semiyaPayasam: {
    name: "Semiya Payasam",
    category:"Dessert",
    ingredients: ["Vermicelli, milk, sugar, cashew, ghee."],
    significance: "A sweet dessert marking festivity.",
  },
  adaPradhaman: {
    name: "Ada Pradhaman",
    category: "Dessert",
    ingredients: ["rice ada, jaggery, coconut milk, cashew"],
    significance:
      "Deep, caramel notes,often served alongside other payasams.Royal payasam, most important dessert.",
    
  },
  rasam: {
    name: "Rasam",
    category: "Curry",
    ingredients: ["tamarind, tomato, pepper, cumin, garlic"],
    significance:
      "A tangy, peppery digestive,often sipped at the end to refresh the palate.",
    
  },
  moru: {
    name: "Sambharam (Spiced Buttermilk)",
    category: "Beverage",
    ingredients: ["buttermilk, ginger, green chilli, curry leaves"],
    significance:
      "Cooling drink served towards the end of a heavy feast,restorative and herbal.",
  },
  sambar: {
    name: "Sambar",
    category: "Curry",
    ingredients: ["toor dal, tamarind, mixed vegetables, sambar powder, curry leaves"],
    significance:
      "A lentil-vegetable stew that binds the feast with aroma and warmth.Signature Kerala curry, tangy and nutritious.",
  },
    
  
  pulissery: {
    name: "Pulissery (Moru Curry)",
    category: "Yoghurt-based",
    ingredients: ["buttermilk, spices, coconut"],
    significance:
      "A lighter yoghurt curry that cools and grounds the meal.",
  },
  kootucurry: {
    name: "Kootu Curry",
    category: "Thick Curry",
    ingredients: ["chana, yam/plantain, coconut, pepper"],
    significance:
      "Spiced, semi-dry curry signifying prosperity and earthiness.",
  },
    ghee: {
    name: "Ghee",
    category: "Side",
    ingredients: ["clarified butter"],
    significance:
      "A drizzle on rice with parippu marks the ceremonial first bites.",
    },
    vadukapuli: {
  name: "Vadukapuli Achar",
  category: "Achar",
  ingredients: ["Vadukapuli (wild lemon), chilli, mustard seeds, asafoetida, salt, ginger, green chilli"],
  significance:
    "A tangy and spicy pickle made with wild lemon, served in Kerala sadyas to enhance flavors and aid digestion.",
},
  parippu: {
    name: "Parippu (Moong Dal)",
    category: "Curry",
    ingredients: ["split moong dal, ghee, jeera, green chilli, turmeric"],
    significance:
      "Traditionally the first curry eaten with rice and ghee ,symbolizes simplicity and abundance.",
  },
  palada: {
    name: "Palada Payasam",
    category: "Dessert",
    ingredients: ["rice ada, milk, sugar, cardamom"],
    significance:
      "Silken milk-based payasam often the star dessert of Onam.",
  },
  pineapplepachadi: {
    name: "Pineapple Pachadi",
    category: "Yoghurt-based",
    ingredients: ["pineapple, curd, coconut, mustard, jaggery"],
    significance:
      "Sweet-tangy pachadi symbolizing celebration and joy.",
  },
    cucumberkichadi: {
   name: "Kichadi (Cucumber)",
    category: "Yoghurt-based",
    ingredients: ["cucumber, curd, mustard, coconut"],
    significance:
      "Cool, mustard-perfumed yoghurt dish,adds gentle sharpness.",
  },
vendakkapachadi: {
  name: "Vendakka Pachadi",
  category: "Yogurt-based",
  ingredients: ["ladies finger (okra), curd, coconut, green chilies, curry leaves, mustard seeds"],
  significance:
    "A tangy and mildly spiced yogurt-based dish where fried okra adds a unique flavor and texture. Served during Onam Sadya, Vendakka Pachadi balances the richness of curries with its cooling and slightly sour taste, symbolizing harmony in flavors.",
},



  



};

const CATEGORIES = [
  "Staple",
  "Curry",
  "Thick Curry",
  "Mild Curry",
  "Yoghurt-based",
  "Stir-fry",
  "Achar",
  "Crunch",
  "Fruit",
  "Beverage",
  "Dessert",
  "Side",
];

function Dish({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const info = dishInfo[alt as keyof typeof dishInfo] ?? {
    name: alt,
    ingredients: "N/A",
    culture: "N/A",
     category: "Uncategorized",
  };

return (
  <div className={`dish-container ${className || ""}`}>
      <img src={src} alt={alt} className={`dish ${className || ""}`} />
      <div className="tooltip">
        <h3>{info.name}</h3>
        <p>
          <b>Ingredients:</b> {info.ingredients}
        </p>
        <p>
          <b>Category:</b> {info.category}
        </p>
        <p>
          <b>Cultural Significance:</b> {info.significance}
        </p>
      </div>
    </div>
);
}

// Banana Leaf Layout
function BananaLeaf() {
  return (
    <section
  className="py-16 px-4 sm:px-6 lg:px-8"
  style={{
    backgroundColor: "#FFCC00",
    backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
>
 

    
      <div className="leaf-container relative">
        <img src={leaf} alt="banana-leaf" className="leaf-bg" />

        {/* Center */}
        <Dish src={choruSambar} alt="choruSambar" className="center" />

        {/* Left */}
        <Dish src={pazham} alt="pazham" className="pazham" />
        <Dish src={sarkaraUpperi} alt="sarkaraUpperi" className="sarkaraUpperi" />
        <Dish src={chips} alt="chips" className="chips" />
        <Dish src={mangoPickle} alt="mangoPickle" className="mangoPickle" />
        <Dish src={injipuli} alt="injipuli" className="injipuli" />
        <Dish src={pappadam} alt="pappadam" className="pappadam" />
        <Dish src={uppu} alt="uppu" className="uppu" />
        <Dish src={ghee} alt="ghee" className="ghee" />
         <Dish src={vadukapuli} alt="vadukapuli" className="vadukapuli" />

        {/* Top row */}
        <Dish src={thoran} alt="thoran" className="thoran" />
        <Dish src={kalan} alt="kalan" className="kalan" />
        <Dish src={olan} alt="olan" className="olan" />
        <Dish src={aviyal} alt="aviyal" className="aviyal" />
        <Dish src={beetrootPachadi} alt="beetrootPachadi" className="beetrootPachadi" />
        <Dish src={erissery} alt="erissery" className="erissery" />
        <Dish src={cucumberkichadi} alt="cucumberkichadi" className="cucumberkichadi" />
        <Dish src={pineapplepachadi} alt="pineapplepachadi" className="pineapplepachadi" />
        <Dish src={parippu} alt="parippu" className="parippu" />
        <Dish src={vendakkapachadi} alt="vendakkapachadi" className="vendakkapachadi" />
        <Dish src={kootucurry} alt="kootucurry" className="kootucurry" />
e
        {/* Payasams */}
        <Dish src={semiyaPayasam} alt="semiyaPayasam" className="semiyaPayasam" />
        <Dish src={adaPradhaman} alt="adaPradhaman" className="adaPradhaman" />
        <Dish src={palada} alt="palada" className="palada" />

        {/* Outside right */}
        <Dish src={rasam} alt="rasam" className="rasam" />
        <Dish src={moru} alt="moru" className="moru" />
        <Dish src={sambar} alt="sambar" className="sambar" />
        <Dish src={pulissery} alt="pulissery" className="pulissery" />
      </div>
    </section>
  );
}

export default BananaLeaf;
