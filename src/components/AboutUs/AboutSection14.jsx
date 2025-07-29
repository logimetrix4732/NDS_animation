import React from "react";
import DrawerModal from "../DrawerModal";
import chairmanImg from "../../Images/AboutUsImg/DSC_1321_1_new.jpg";
import chairmanImg1 from "../../Images/AboutUsImg/DSC_1329_1.jpg";
import "./AboutSection.css";
import { useMediaQuery, useTheme } from "@mui/material";
import ChairmanModal from "../ChairmanModal";

const ChairmanSection = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const chairmanMessage = {
    title: "Chairman’s Message",
    subtext:
      "As the largest producer and consumer of dairy in the world, India’s pole position is well established. The efforts of last five - six decades, centered around making India successful and self-reliant focused on innovation, operational excellence, scale, capacity building and digitisation. ",
    content: [
      "Looking back at the work done in the sector is comforting but it does not entitle us to rest. Increasingly there are newer themes emerging that compel us to play a bigger role in the global dairy landscape and set benchmarks for the industry, whether it is productivity enhancement through genetic improvement or converting the challenge of greenhouse gas emissions into the next big opportunity. As we rally these ideas, I believe that NDDB Dairy Services (NDS) is well placed to play a decisive role in how the industry shapes over the next 25 years. From its humble beginnings in 2009, in just fourteen years NDS has managed to transform itself to the changing needs. Starting with just two verticals of facilitating Producer Organizations and Productivity Enhancement Services, today the mandate of NDS has expanded to supply of Animal Nutrition products, implementation of Artificial Insemination (AI)/ Embryo Transfer (ET) projects and initiatives around sustainability.",
      "As on 31st March 2024, the 21 MPOs facilitated by NDS were covering over 24000 villages in 155 districts spread across ten States, having a membership base of 10.05 lakh and procuring an average volume of around 47 lakh kg per day of milk during the year. With a firm commitment to inclusion and women led development, 15 out of the 21 MPOs have an all-women membership and all the producer–Directors on their respective Boards are women. The chairperson of 17 of the 21 MPOs are women and women members constitute 74% of the total membership base of all the MPOs put together. Plans are also in place to cover an additional 7000 villages next year increasing the milk procurement by 8 lakh litres per day from an additional 2 lakh members, 1.56 lakh of whom will be women.",
      "NDS also played a pivotal role in facilitating 12 of these MPOs to promote Fodder Plus (FPOs). These FPOs collectively enrolled over 2,000 members across 430 villages, with women comprising 34% of the total membership with over 1,100 acres dedicated to fodder production.",
      "The Member-owned and member-controlled organizations facilitated by NDS are offering farmers the best path to a better life. It is worth highlighting that the work of these Organizations are now garnering attention on the world stage. At the International Dairy Federation World Dairy Summit, USA 2023 Maahi MPO's work was shortlisted in the category Innovation in Sustainable Farming Practices. Asha and Shreeja MPOs were shortlisted in the Innovation in Women Empowerment in the Dairy Sector with Shreeja, the world’s largest women organization, winning the award.",
      "In addition, the positive impact of NDS on the lives of women dairy farmers was further highlighted by the inclusion of Asha, Sakhi, Paayas, and Shreeja MPOs as case studies in the IDF’s Women in Dairy Report. Through the impactful interventions, over 3000 women dairy farmers achieved financial independence and the name “Lakhpati Didis”.",
      "In the coming years renewed focus will be on strengthening the infrastructure for procurement of quality milk. The consumer preferences in India are fast changing. Demand for traceability for food items and sustainably produced food is increasing. It is imperative that farmers are made future ready to adapt to this requirement. Democratization of dairy knowledge is another focus area which will help the farmers in choosing the right solution and the technologies for increasing productivity and ensuring sustainability in animal husbandry practices.",
      "At the other end of the spectrum, under the SAG brand, the semen stations of NDS together sold 47.32 million frozen semen doses. With an objective to promote the indigenous breeds in the country, 9.1 million semen doses were from 17 different indigenous breeds of cattle and 14 million semen doses were from seven different buffalo breeds. Rahuri Semen Station was ranked first amongst the semen stations in the country in the evaluation by the Central Monitoring Unit, DAHD, Government of India.",
      "I'm proud to share that, on average, a high genetic merit calf is born every two seconds in the country using SAG semen. This has led to increased animal productivity, contributing not only to the economic empowerment of farmers but also playing a crucial role in mitigating climate change. These efforts are closely aligned with the Government of India's broader objective of doubling farmers' incomes",
      "NDS has expanded its efforts in implementing Productivity Enhancement activities under the Rashtriya Gokul Mission spanning across various regions including Varanasi and Meerut in Uttar Pradesh, Motihari in Bihar, Vidarbha-Marathwada region of Maharashtra, Sheopur district in Madhya Pradesh and new areas like Jharkhand, Rohilkhand & Braj region, Gorakhpur, Rayalseema, Mayurbhanj, Washim, and Yavatmal regions. These projects entail a wide range of activities such as facilitating animal induction, establishing AI delivery network and establishing pregnancies using sex-sorted semen doses/ IVF embryos.",
      "Building on its ongoing initiatives, during the financial year NDS ventured into supply of high-quality Cattle Feed under its flagship SAG brand. Launched on the 14th Foundation Day of NDS, the initiative will benefit over 10 lakh dairy farmers.",
      "NDS has undertaken crucial efforts to strengthen the Central Cattle Breeding Farms located in Alamadhi, Tamil Nadu; Andeshnagar, Uttar Pradesh; and Dhamrod, Gujarat. These farms are driving progressive genetic enhancement in cows and buffaloes, utilizing scientifically validated methods to enhance milk production, and producing and distributing superior pedigreed animals. ",
      "It’s important that actions we take today to address our needs should not jeopardize the future ecosystem. Sustainability in dairy farming is therefore not just an option but a necessity of the future and which will enable us to build a more resilient and thriving dairy industry. NDS has also made significant progress toward promoting sustainable dairying with a focus on climate change mitigation. The implementation of various genetic improvement programmes has resulted in increased productivity and lower Green House Gas emissions per kg of milk. Further, effective dung and organic waste management techniques are being adopted by the semen stations to produce biogas for various on-site energy needs while also helping prevent environmental pollution.  The MPOs are also advocating the adoption of low-cost balloon digester-based biogas plants at their members backyard, effectively lowering greenhouse gas emissions and diminishing reliance on traditional energy sources. ",
      "Another landmark achievement is the commissioning of India’s first Cow Sanctuary, dedicated to the conservation and preservation of indigenous breeds. Located in Muzaffarnagar district, Uttar Pradesh, this sanctuary was established this year under the Rashtriya Gokul Mission, Government of India. The construction of a BioCNG plant with a capacity of 5000 CuM is underway at the sanctuary demonstrating our commitment to clean and renewable energy. ",
      "NDS has over the years put in place an eco-system that is farmer centric and provides responsible value growth to the farmers. We stand committed to cause of the small and marginal dairy farmers and their sustainable development.",
    ],
  };

  return (
    <React.Fragment>
      <ChairmanModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={chairmanMessage.title}
        content={chairmanMessage.content}
        subtext={chairmanMessage.subtext}
        width="60%"
        image={chairmanImg1}
      />
      <div className="chairman-banner">
        <img
          src={chairmanImg}
          alt="Chairman"
          className="chairman-image"
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "cover", // or "contain"
          }}
        />
        <div className="chairman-overlay">
          <h2 className="chairman-title">Dr. Meenesh Shah</h2>
          <p className="chairman-subtext">
            As the largest producer and consumer of dairy in the world, India’s
            pole position is well established. The efforts of last five - six
            decades, centered around making India successful and self-reliant
            focused on innovation, operational excellence, scale, capacity
            building and digitisation.
          </p>
          <button className="chairman-button" onClick={handleClickOpen}>
            Full Profile
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChairmanSection;
