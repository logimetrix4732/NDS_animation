import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

// Slide Transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Styled Dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    background: "#fff",
    overflow: "hidden",
    maxHeight: "90vh",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    overflowY: "auto",
    scrollBehavior: "smooth",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
    justifyContent: "flex-end",
  },
}));

const AboutSection14 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-imgbox12 img-box3">
                <div
                  className="img1 wow fadeInRight"
                  style={{ marginLeft: "280px" }}
                >
                  <img src="assets/img/normal/ab_12_1.jpg" alt="About" />
                </div>
                <div className="img2 wow fadeInLeft">
                  <img src="assets/img/normal/ab_12_2.jpg" alt="About" />
                </div>
                <div className="img3 text-center text-md-end wow fadeInUp">
                  <img src="assets/img/normal/ab_12_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area about-12-titlebox mb-10 pe-xxl-1 me-xxl-1">
                <h2 className="sec-title mb-10 text-anime-style-3">
                  Chairman’s Message
                </h2>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
                  As the largest producer and consumer of dairy in the world,
                  India’s pole position is well established. The efforts of last
                  five - six decades, centered around making India successful
                  and self-reliant focused on innovation, operational
                  excellence, scale, capacity building and digitisation.
                </p>
                <p className="sec-text  wow fadeInUp" data-wow-delay=".2s">
                  Looking back at the work done in the sector is comforting but
                  it does not entitle us to rest. Increasingly there are newer
                  themes emerging that compel us to play a bigger role in the
                  global dairy landscape and set
                </p>
              </div>
              <div className="about-12-item-wrap">
                <p className="about-item_text wow fadeInUp about-ellipsis">
                  benchmarks for the industry, whether it is productivity
                  enhancement through genetic improvement or converting the
                  challenge of greenhouse gas emissions into the next big
                  opportunity. As we rally these ideas, I believe that NDDB
                  Dairy Services (NDS) is well placed to play a decisive role in
                  how the industry shapes over the next 25 years. From its
                  humble beginnings in 2009, in just fourteen years NDS has
                  managed to transform itself to the changing needs. Starting
                  with just two verticals of facilitating Producer Organizations
                  and Productivity Enhancement Services, today the mandate of
                  NDS has expanded to supply of Animal Nutrition products...
                </p>
                <div
                  className="mt-20 wow fadeInLeft th-btn btn-2 style5 th-icon"
                  data-wow-delay=".4s"
                  onClick={handleClickOpen}
                >
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle className="title-area about-12-titlebox mb-10 pe-xxl-1 me-xxl-1">
          Chairman’s Message
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            As the largest producer and consumer of dairy in the world, India’s
            pole position is well established. The efforts of last five - six
            decades, centered around making India successful and self-reliant
            focused on innovation, operational excellence, scale, capacity
            building and digitisation.
          </Typography>
          <Typography gutterBottom>
            Looking back at the work done in the sector is comforting but it
            does not entitle us to rest. Increasingly there are newer themes
            emerging that compel us to play a bigger role in the global dairy
            landscape and set benchmarks for the industry, whether it is
            productivity enhancement through genetic improvement or converting
            the challenge of greenhouse gas emissions into the next big
            opportunity. As we rally these ideas, I believe that NDDB Dairy
            Services (NDS) is well placed to play a decisive role in how the
            industry shapes over the next 25 years. From its humble beginnings
            in 2009, in just fourteen years NDS has managed to transform itself
            to the changing needs. Starting with just two verticals of
            facilitating Producer Organizations and Productivity Enhancement
            Services, today the mandate of NDS has expanded to supply of Animal
            Nutrition products, implementation of Artificial Insemination (AI)/
            Embryo Transfer (ET) projects and initiatives around sustainability.
          </Typography>
          <Typography gutterBottom>
            As on 31st March 2024, the 21 MPOs facilitated by NDS were covering
            over 24000 villages in 155 districts spread across ten States,
            having a membership base of 10.05 lakh and procuring an average
            volume of around 47 lakh kg per day of milk during the year. With a
            firm commitment to inclusion and women led development, 15 out of
            the 21 MPOs have an all-women membership and all the
            producer–Directors on their respective Boards are women. The
            chairperson of 17 of the 21 MPOs are women and women members
            constitute 74% of the total membership base of all the MPOs put
            together. Plans are also in place to cover an additional 7000
            villages next year increasing the milk procurement by 8 lakh litres
            per day from an additional 2 lakh members, 1.56 lakh of whom will be
            women.
          </Typography>
          <Typography gutterBottom>
            NDS also played a pivotal role in facilitating 12 of these MPOs to
            promote Fodder Plus (FPOs). These FPOs collectively enrolled over
            2,000 members across 430 villages, with women comprising 34% of the
            total membership with over 1,100 acres dedicated to fodder
            production.
          </Typography>
          <Typography gutterBottom>
            The Member-owned and member-controlled organizations facilitated by
            NDS are offering farmers the best path to a better life. It is worth
            highlighting that the work of these Organizations are now garnering
            attention on the world stage. At the International Dairy Federation
            World Dairy Summit, USA 2023 Maahi MPO's work was shortlisted in the
            category Innovation in Sustainable Farming Practices. Asha and
            Shreeja MPOs were shortlisted in the Innovation in Women Empowerment
            in the Dairy Sector with Shreeja, the world’s largest women
            organization, winning the award.
          </Typography>
          <Typography gutterBottom>
            In addition, the positive impact of NDS on the lives of women dairy
            farmers was further highlighted by the inclusion of Asha, Sakhi,
            Paayas, and Shreeja MPOs as case studies in the IDF’s Women in Dairy
            Report. Through the impactful interventions, over 3000 women dairy
            farmers achieved financial independence and the name “Lakhpati
            Didis”.
          </Typography>
          <Typography gutterBottom>
            In the coming years renewed focus will be on strengthening the
            infrastructure for procurement of quality milk. The consumer
            preferences in India are fast changing. Demand for traceability for
            food items and sustainably produced food is increasing. It is
            imperative that farmers are made future ready to adapt to this
            requirement. Democratization of dairy knowledge is another focus
            area which will help the farmers in choosing the right solution and
            the technologies for increasing productivity and ensuring
            sustainability in animal husbandry practices.
          </Typography>
          <Typography gutterBottom>
            At the other end of the spectrum, under the SAG brand, the semen
            stations of NDS together sold 47.32 million frozen semen doses. With
            an objective to promote the indigenous breeds in the country, 9.1
            million semen doses were from 17 different indigenous breeds of
            cattle and 14 million semen doses were from seven different buffalo
            breeds. Rahuri Semen Station was ranked first amongst the semen
            stations in the country in the evaluation by the Central Monitoring
            Unit, DAHD, Government of India.
          </Typography>
          <Typography gutterBottom>
            I'm proud to share that, on average, a high genetic merit calf is
            born every two seconds in the country using SAG semen. This has led
            to increased animal productivity, contributing not only to the
            economic empowerment of farmers but also playing a crucial role in
            mitigating climate change. These efforts are closely aligned with
            the Government of India's broader objective of doubling farmers'
            incomes.
          </Typography>
          <Typography gutterBottom>
            NDS has expanded its efforts in implementing Productivity
            Enhancement activities under the Rashtriya Gokul Mission spanning
            across various regions including Varanasi and Meerut in Uttar
            Pradesh, Motihari in Bihar, Vidarbha-Marathwada region of
            Maharashtra, Sheopur district in Madhya Pradesh and new areas like
            Jharkhand, Rohilkhand & Braj region, Gorakhpur, Rayalseema,
            Mayurbhanj, Washim, and Yavatmal regions. These projects entail a
            wide range of activities such as facilitating animal induction,
            establishing AI delivery network and establishing pregnancies using
            sex-sorted semen doses/ IVF embryos.
          </Typography>
          <Typography gutterBottom>
            Building on its ongoing initiatives, during the financial year NDS
            ventured into supply of high-quality Cattle Feed under its flagship
            SAG brand. Launched on the 14th Foundation Day of NDS, the
            initiative will benefit over 10 lakh dairy farmers.
          </Typography>
          <Typography gutterBottom>
            NDS has undertaken crucial efforts to strengthen the Central Cattle
            Breeding Farms located in Alamadhi, Tamil Nadu; Andeshnagar, Uttar
            Pradesh; and Dhamrod, Gujarat. These farms are driving progressive
            genetic enhancement in cows and buffaloes, utilizing scientifically
            validated methods to enhance milk production, and producing and
            distributing superior pedigreed animals.
          </Typography>
          <Typography gutterBottom>
            It’s important that actions we take today to address our needs
            should not jeopardize the future ecosystem. Sustainability in dairy
            farming is therefore not just an option but a necessity of the
            future and which will enable us to build a more resilient and
            thriving dairy industry. NDS has also made significant progress
            toward promoting sustainable dairying with a focus on climate change
            mitigation. The implementation of various genetic improvement
            programmes has resulted in increased productivity and lower Green
            House Gas emissions per kg of milk. Further, effective dung and
            organic waste management techniques are being adopted by the semen
            stations to produce biogas for various on-site energy needs while
            also helping prevent environmental pollution. The MPOs are also
            advocating the adoption of low-cost balloon digester-based biogas
            plants at their members backyard, effectively lowering greenhouse
            gas emissions and diminishing reliance on traditional energy
            sources.
          </Typography>
          <Typography gutterBottom>
            Another landmark achievement is the commissioning of India’s first
            Cow Sanctuary, dedicated to the conservation and preservation of
            indigenous breeds. Located in Muzaffarnagar district, Uttar Pradesh,
            this sanctuary was established this year under the Rashtriya Gokul
            Mission, Government of India. The construction of a BioCNG plant
            with a capacity of 5000 CuM is underway at the sanctuary
            demonstrating our commitment to clean and renewable energy.
          </Typography>
          <Typography gutterBottom>
            NDS has over the years put in place an eco-system that is farmer
            centric and provides responsible value growth to the farmers. We
            stand committed to cause of the small and marginal dairy farmers and
            their sustainable development.
          </Typography>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>

      <StyledDrawer
        anchor="right" // use "left" for left-side drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" component="div">
            Chairman’s Message
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ maxHeight: "80vh", overflowY: "auto", pr: 1 }}>
          <Typography gutterBottom>
            As the largest producer and consumer of dairy in the world, India’s
            pole position is well established...
          </Typography>
          <Typography gutterBottom>
            Looking back at the work done in the sector is comforting but it
            does not entitle us to rest...
          </Typography>
          {/* ⬇️ Add more sections as needed */}
        </Box>
      </StyledDrawer>
    </>
  );
};

export default AboutSection14;
