import Marquee from "./ui/marquee";

const referances = [
  {
    id: 1,
    brand: "TC. Saglık Bakanlığı",
  },
];

export default function ReferancesMarquee() {
  return (
    <div>
      <Marquee speed={0.5} direction="left">
        <div>
          Lorem ipsum, dolor sit Dolorem placeat incidunt animi et voluptatem
          ad, voluptas saepe! Alias obcaecati eligendi, corrupti quas
          perspiciatis magni nostrum sequi at tempore ex laborum similique a{" "}
        </div>
        <div>deneme</div>
        <div>deneme</div>
      </Marquee>
      <Marquee speed={0.5} direction="right">
        <div>melih</div>
        <div>
          Lorem ipsum, dolor sit Dolorem placeat incidunt animi et voluptatem
          ad, voluptas saepe! Alias obcaecati eligendi, corrupti quas
          perspiciatis magni nostrum sequi at tempore ex laborum similique a{" "}
        </div>
        <div>melih</div>
        <div>melih</div>
      </Marquee>
    </div>
  );
}
