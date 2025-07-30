import React from "react";
import AnimatedText from "../AnimatedText";
import DrawerModal from "../DrawerModal";
import { useMediaQuery, useTheme } from "@mui/material";
import DSC_3601 from "../../Images/NewInitiativeImg/DSC_3601.jpg";
import FVF02218 from "../../Images/NewInitiativeImg/FVF02218.JPG";
import FVF02761 from "../../Images/NewInitiativeImg/FVF02761.JPG";
import mangosgrowing from "../../Images/NewInitiativeImg/mangosgrowing.JPG";
const AboutSection10 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ClimateSustainability = {
    title: "Diversification through Agricultural Value Chains",
    content: [
      "NDS has established a robust doorstep delivery system for Artificial Insemination (AI) through a network of well-trained and certified AI technicians. These services are delivered using top-quality genetics and adhere to strict SOPs to ensure consistency and success in breeding outcomes. To further support reproductive efficiency, infertility management camps and calf shows are organised to regularly promote awareness and farmer engagement. All AI-related data including the registration of female calves born through AI, is systematically captured in the Bharat Pashudhan Application enabling traceability, recordkeeping and genetic tracking. ",
      "Recognising the potential of Embryo Transfer (ET) in accelerating genetic progress, NDS has taken a proactive role in promoting ET Technology which although in its early stages of adoption in India offers significantly faster genetic gains compared to conventional AI. At the state-of-the-art IVF laboratory established at Sabarmati Ashram Gaushala, embryos of various indigenous cattle breeds are produced through in-vivo and in-vitro techniques. These embryos are used both for producing high genetic merit breeding bulls for semen stations and for on-field transfer to farmer’s animals, enabling the birth of superior calves right at the doorstep. The successful field implementation of ET has not only demonstrated its feasibility but has also increased awareness and demand for embryos among progressive dairy farmers paving the way for wider adoption of advanced reproductive technologies in India’s dairy sector.",
    ],
  };
  return (
    <div className="bg-smoke overflow-hidden space">
      <DrawerModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={ClimateSustainability.title}
        content={ClimateSustainability.content}
        width="60%"
      />
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="title-area mt-50">
              <AnimatedText
                text="Diversification through Agricultural Value Chains"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
              <p className="sec-text mb-10 wow fadeInUp">
                Understanding the importance to ensure greater financial
                stability and resilience at the farmer household level, NDS is
                now looking beyond the dairy sector and venturing into select
                agricultural value chains that align with the existing
                livelihoods of the producer members of the MPOs supported by us.
                <br />
                <br />
                This initiatives aims to unlock additional income opportunities
                by linking farmers to better markets and value-added processing.
                In the initial phase, NDS has launched value chain development
                projects for mango and sunflower seeds in Andhra Pradesh,
                mustard in Rajasthan and maize in Bihar. These commodities have
                been identified based on local agricultural practices, farmer
                capabilities and market potential.
                <br />
                <br />
                The approach involves integrating farmers into a more structured
                and transparent supply chain where in MPOs will handle
                aggregation, NDS will oversee quality control and warehousing
                wherever required, and Mother Dairy will take charge of
                marketing and distribution. The overarching goal is to ensure
                that farmers benefit from fair and timely payments, better price
                realisation, and improved profitability.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-wrapp">
              <div className="img1 global-img wow fadeInLeft">
                <img
                  src={DSC_3601}
                  alt="Choose"
                  style={{
                    width: "312px",
                    height: "312px",
                    objectFit: "cover", // or "contain"
                  }}
                />
              </div>
              <div className="img1 global-img wow fadeInDown">
                <img
                  src={FVF02218}
                  alt="Choose"
                  style={{
                    width: "312px",
                    height: "312px",
                    objectFit: "cover", // or "contain"
                  }}
                />
              </div>
              <div className="img1 global-img wow fadeInUp">
                <img
                  src={FVF02761}
                  alt="Choose"
                  style={{
                    width: "312px",
                    height: "312px",
                    objectFit: "cover", // or "contain"
                  }}
                />
              </div>
              <div className="img1 global-img wow fadeInRight">
                <img
                  src={mangosgrowing}
                  alt="Choose"
                  style={{
                    width: "312px",
                    height: "312px",
                    objectFit: "cover", // or "contain"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection10;
