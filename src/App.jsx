import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Logo from "./assets/images/logo.png";
import Menu from "./components/Menu";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Kilian from "./assets/images/kilian-logo.png";
import Creed from "./assets/images/creed-logo.png";
import DeMarly from "./assets/images/de-marly-logo.png";
import LV from "./assets/images/lv-logo.png";
import Xerjoff from "./assets/images/xerjoff-logo.png";
import Nishane from "./assets/images/nishane-logo.png";
import CreedAventus from "./assets/images/creed-aventus.png";
import xAlexandria from "./assets/images/x-alexandria.png";
import xNaxos from "./assets/images/x-naxos.png";
import xAccento from "./assets/images/x-accento.png";
import LouisVuitton from "./assets/images/loius-vuitton.png";
import CreedPerfume from "./assets/images/creed-img.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import fLogo from "./assets/images/footer-logo.png";
import fPayment from "./assets/images/footer-payment-options.png"

function App() {
  return (
    <>
      {/* Header Section Start  */}
      <div id="header_section">
        <Container>
          <Flex className={"py-4 justify-between items-center"}>
            <div className="w-1/4">
              <Image imgSrc={Logo} imgAlt={"logo"} className={'max-w-[270px]'}/>
            </div>
            <Flex className={"w-1/2 justify-center space-x-12 font-primary"}>
              <Menu mText={"Düfte"} />
              <Menu mText={"Über Uns"} />
              <Menu mText={"Blog"} />
            </Flex>
            <div className="w-1/4 flex items-center justify-end space-x-6 text-black text-2xl">
              <CiUser />
              <IoCartOutline />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Section End  */}

      {/* Hero Section Start  */}
      <div
        id="hero_section"
        className={
          "pt-48 pb-32 bg-heroBackground bg-no-repeat bg-cover bg-center font-primary text-white"
        }
      >
        <Container>
          <Heading
            as={"h1"}
            text={"Ihr exklusiver Anbieter von Luxus- Parfümproben!"}
            className={"max-w-lg mb-3 font-semibold text-6xl leading-[76px]"}
          />
          <Heading
            as={"p"}
            text={
              "Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist."
            }
            className={"max-w-lg mb-4 leading-7"}
          />
          <Button
            bText={"Jetzt einkaufen"}
            className={"px-8 py-3 bg-white text-black font-medium rounded-md"}
          />
        </Container>
      </div>
      {/* Hero Section End  */}

      {/* Brand Promotion Section Start  */}
      <div id="brand_section">
        <Container className={"py-12"}>
          <Flex className={"items-center justify-between"}>
            <Image imgSrc={Kilian} imgAlt={"Kilian logo"} />
            <Image imgSrc={LV} imgAlt={"LV logo"} />
            <Image imgSrc={Creed} imgAlt={"Creed logo"} />
            <Image imgSrc={Xerjoff} imgAlt={"Xerjoff logo"} />
            <Image imgSrc={DeMarly} imgAlt={"DeMarly logo"} />
            <Image imgSrc={Nishane} imgAlt={"Neshane logo"} />
          </Flex>
        </Container>
      </div>
      {/* Brand Promotion Section End  */}

      {/* Top-4 Section Start  */}
      <div id="top4_section" className="font-primary text-center">
        <Container>
          <Heading
            as={"h2"}
            text={"Unsere Top 4 Mini-Flacons"}
            className={"mb-14 font-semibold text-4xl"}
          />
          <Flex className={"mb-16"}>
            <Image imgSrc={CreedAventus} imgAlt={"Creed Aventus Purfume"} />
            <Image imgSrc={xAlexandria} imgAlt={"xAlexandria Purfume"} />
            <Image imgSrc={xNaxos} imgAlt={"xNaxos Purfume"} />
            <Image imgSrc={xAccento} imgAlt={"xAccento Purfume"} />
          </Flex>
        </Container>
      </div>
      {/* Top-4 Section End  */}

      {/* Maison Section Start  */}
      <div
        id="maison_section"
        className={
          "pt-24 pb-36 bg-maisonBackground bg-no-repeat bg-cover bg-center font-primary text-white"
        }
      >
        <Container>
          <Heading
            as={"h3"}
            text={"MAISON FRANCIS KUhRKDJIAN"}
            className={"max-w-sm mb-4 font-semibold text-3xl leading-[38px]"}
          />
          <Heading
            as={"p"}
            text={
              "Entdecke die Welt von Maison Francis Kurkdjian mit unseren edlen Duftproben. Erlebe die einzigartigen Düfte und die Exklusivität unserer Marke in kompakten Proben. Genieße den Luxus und die Kunst der Parfümherstellung, bevor du dich für deinen Favoriten entscheidest."
            }
            className={"max-w-lg mb-5 leading-7"}
          />
          <Button
            bText={"ZU MFK"}
            className={"px-8 py-3 bg-white text-black font-medium rounded-md"}
          />
        </Container>
      </div>
      {/* Maison Section End  */}

      {/* Maison Bottom Section Start  */}
      <div id="maison_bottom_section" className={"-mt-2 mb-44 font-primary"}>
        <Container>
          <Flex className={"justify-center space-x-12"}>
            <div className="louis_vuitton relative">
              <Image imgSrc={LouisVuitton} imgAlt={"LouisVuitton purfume"} />
              <div className="perfume_details p-7 bg-white text-black absolute bottom-[-77px] left-10 right-10 drop-shadow-shyam">
                <Heading
                  as={"h4"}
                  text={"LOUIS VUITTON"}
                  className={"mb-3 font-semibold text-xl"}
                />
                <Heading
                  as={"p"}
                  text={
                    "Entdecke Louis Vuitton in kleinen Proben. Teste den Luxus, bevor du dich für das Original entscheidest."
                  }
                  className={"mb-3 text-sm text-333 leading-7"}
                />
                <Button
                  bText={"ZU LOUIS VUITTON"}
                  className={
                    "px-8 py-3 text-white bg-black font-medium rounded-md"
                  }
                />
              </div>
            </div>
            <div className="creed relative">
              <Image imgSrc={CreedPerfume} imgAlt={"CreedPerfume purfume"} />
              <div className="perfume_details p-7 bg-white text-black absolute bottom-[-77px] left-10 right-10 drop-shadow-shyam">
                <Heading
                  as={"h4"}
                  text={"CREED"}
                  className={"mb-3 font-semibold text-xl"}
                />
                <Heading
                  as={"p"}
                  text={
                    "Entdecke Louis Vuitton in kleinen Proben. Teste den Luxus, bevor du dich für das Original entscheidest."
                  }
                  className={"mb-3 text-sm text-333 leading-7"}
                />
                <Button
                  bText={"ZU CREED"}
                  className={
                    "px-8 py-3 text-white bg-black font-medium rounded-md"
                  }
                />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Maison Bottom Section End  */}

      {/* FAQ Section Start  */}
      <div id="faq_section" className={"mb-20 font-primary"}>
        <Container>
          <Heading
            as={"h3"}
            text={"FAQ"}
            className={"mb-14 font-semibold uppercase text-center text-4xl"}
          />
          <div className="faq_item font-semibold text-333">
            <Flex
              className={
                "py-4 px-6 border-t-2 border-DDD justify-between items-center "
              }
            >
              <Heading
                as={"p"}
                text={"Sind die Düfte original?"}
                className={""}
              />
              <div className="faq_icon text-xl">
                <MdKeyboardArrowDown />
              </div>
            </Flex>
            <Flex
              className={
                "py-4 px-6 border-y-2 border-DDD justify-between items-center "
              }
            >
              <Heading
                as={"p"}
                text={"Wie werden die Duftproben verpackt?"}
                className={""}
              />
              <div className="faq_icon text-xl">
                <MdKeyboardArrowDown />
              </div>
            </Flex>
            <Flex
              className={
                "py-4 px-6 border-b-2 border-DDD justify-between items-center "
              }
            >
              <Heading
                as={"p"}
                text={"Haben die Parfümproben einen Zerstäuber?"}
                className={""}
              />
              <div className="faq_icon text-xl">
                <MdKeyboardArrowDown />
              </div>
            </Flex>
            <Flex
              className={
                "py-4 px-6 border-b-2 border-DDD justify-between items-center "
              }
            >
              <Heading
                as={"p"}
                text={"Wie oft kann ich eine Parfümprobe sprühen?"}
                className={""}
              />
              <div className="faq_icon text-xl">
                <MdKeyboardArrowDown />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* FAQ Section End  */}

      {/* Footer Section Start  */}
      <div id="footer_section" className={"bg-black font-primary text-white"}>
        <Container>
          <Flex className={"justify-between py-16"}>
            <div className="footer_logo">
              <Image imgSrc={fLogo} imgAlt={"Logo"} />
            </div>
            <div className="hilfe_part">
              <Heading
                as={"h4"}
                text={"HILFE"}
                className={"mb-3 font-semibold uppercase text-xl"}
              />
              <Heading as={"p"} text={"FAQ"} className={"mb-1"} />
              <Heading as={"p"} text={"Rückgaberecht"} className={""} />
            </div>
            <div className="umtern_part">
              <Heading
                as={"h4"}
                text={"UNTERNEHMEN"}
                className={"mb-3 font-semibold uppercase text-xl"}
              />
              <Heading as={"p"} text={"Kontakt"} className={"mb-1"} />
              <Heading as={"p"} text={"Über Uns"} className={""} />
            </div>
            <div className="recht_part">
              <Heading
                as={"h4"}
                text={"RECHTLICHES"}
                className={"mb-3 font-semibold uppercase text-xl"}
              />
              <Heading as={"p"} text={"Impressum"} className={"mb-1"} />
              <Heading as={"p"} text={"Datenschutzerklärung"} className={""} />
            </div>
            <div className="unser_part">
              <Heading
                as={"h4"}
                text={"UNSER ZIEL"}
                className={"mb-3 font-semibold uppercase text-xl"}
              />
              <Heading
                as={"p"}
                text={
                  "Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist."
                }
                className={"max-w-48"}
              />
            </div>
          </Flex>
          <Flex className={'justify-between items-center pb-11'}>
            <Heading
              as={"h4"}
              text={"DUFTSAMPLES © 2023 . All Rights Reserved."}
              className={""}
            />
            <Image imgSrc={fPayment} imgAlt={'Payment options images'}/>
          </Flex>
        </Container>
      </div>
      {/* Footer Section End  */}
    </>
  );
}

export default App;
