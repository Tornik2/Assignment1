import "./MainContent.css";
import { Product } from "../Product/Product";

const data = {
  hipnosis: {
    name: "hypnosis",
    description:
      "American writer, poet and essayist Howard Phillips Lovecraft (1890-1937) wrote in the genres of horror, mysticism and fantasy. He is considered one of the founders of the fantasy genre.",
    src: "/assets/Hipnosis.png",
  },
  legendborn: {
    name: "Legendnorn",
    description:
      "I love the feeling of a magical world existing just beneath the surface of our own and this story gave me everything I wanted: incredible characters, ancient lore and secret societies ",
    src: "/assets/legend.jpg",
  },
  salim: {
    name: "Salim-Slot",
    description:
      "Salims Lot is a small American town in New England, where strange things happen - after sunset, it seems to be possessed by evil spirits, people disappear one after another.",
    src: "/assets/salim.jpg",
  },
};

export function Content() {
  return (
    <main className="main_content">
      <Product
        src={data.hipnosis.src}
        name={data.hipnosis.name}
        description={data.hipnosis.description}
      />
      <Product
        src={data.legendborn.src}
        name={data.legendborn.name}
        description={data.legendborn.description}
      />
      <Product
        src={data.salim.src}
        name={data.salim.name}
        description={data.salim.description}
      />
    </main>
  );
}
