import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import Accordion from 'components/accordion/Accordion';
import { Section, Container, CenteredTitle, Content } from './style';

const accordionItems = [
  {
    id: 0,
    title: <h1>Remote Entwickler f&uuml;r Deine Agentur</h1>,
    content: (
      <Paragraph color="inherit">
        L&auml;ngst erg&auml;nzen Remote Entwickler sinnvoll alle m&ouml;glichen Projekte bei Unternehmen und Start-Ups. Warum auch nicht? Waren fr&uuml;her Remote Entwickler eher eine Ausnahme, arbeiten heute zahlreiche Agenturen und Unternehmen nach diesem Modell. Die weltweite Vernetzung hat die besten Voraussetzungen daf&uuml;r geschaffen: ein mobiles, ortsungebundenes und zeitunabh&auml;ngiges Team aus den besten Entwicklern k&uuml;mmert sich um Deine Projekte - und das zu angenehm niedrigen Kosten. Ob Web Entwickler Agentur, Software Entwickler Agentur oder eine App Entwickler Agentur: IT Outsourcing liegt im Trend. Remote Work wird in den USA bereits von 2,6 % der Besch&auml;ftigten angeboten - in Deutschland ist es allerdings noch weniger. Das bedeutet aber nicht, dass Du keine Remote Entwickler f&uuml;r Deine Agentur findest - wir stellen Dir ein auf Deine individuellen Anforderungen abgestimmtes Team zusammen, das sich ausschlie&szlig;lich um Dein Projekt k&uuml;mmert. Erweitere Dein Team zusammen mit uns!
      </Paragraph>
    ),
  },
  {
    id: 1,
    title: <h2>Remote Entwickler f&uuml;r Deine Web Agentur</h2>,
    content: (
      <Paragraph color="inherit">
        Remote Entwickler erg&auml;nzen Dein Team nicht nur kurzfristig, wenn Dir Ressourcen fehlen. Auch dauerhaft erg&auml;nzen Web Entwickler Deine Agentur aus der Ferne. Aber warum sollte Deine Web Agentur mit einem Remote Entwickler arbeiten? Nun, wir w&uuml;ssten da ein paar Gr&uuml;nde: Web Entwickler mit spezifischen Kenntnissen findest Du nicht so einfach. Und die, die Du findest, sind vielleicht nicht vor Ort ans&auml;ssig und wollen nicht umziehen. Vielleicht gibt es in Deiner Web Developer Agentur auch einfach keinen Platz f&uuml;r noch ein B&uuml;ro und noch ein Team. Es gibt also viele Gr&uuml;nde. Und es gibt ein paar Gr&uuml;nde, die speziell f&uuml;r Remote Entwickler und Entwickler Teams aus unserem Netzwerk sprechen.
        <br />
        Unsere Entwickler f&uuml;r Web Agenturen unterst&uuml;tzen Dich sowohl Backend als auch Frontend. Wir finden f&uuml;r Dich Spezialisten f&uuml;r alle g&auml;ngigen Programmiersprachen und einige, die gar nicht so g&auml;ngig sind - denn wir sind mehrsprachig. Ob Angular, Node JS, Vue JS oder React f&uuml;r Frontend - Dein Team ist innerhalb von zwei bis vier Wochen f&uuml;r Dich zusammengestellt. Dir geht es um das Backend? Wir bauen Dir ein Team f&uuml;r PHP, Java oder DOT.NET auf. Nutze unsere Kontaktm&ouml;glichkeiten: Das erste Beratungsgespr&auml;ch ist kostenlos. Wir kl&auml;ren auch bei hier nicht aufgef&uuml;hrten Programmiersprachen und anderen W&uuml;nschen, ob und was wir f&uuml;r Dich tun k&ouml;nnen.
      </Paragraph>
    ),
  },
  {
    id: 2,
    title: <h3>Remote Entwicklicker f&uuml;r E-Commerce Agenturen</h3>,
    content: (
      <>
        <Paragraph color="inherit">
          Alle Remote Entwickler, die wir vermitteln, haben wenigstens drei Jahre Berufserfahrung. Das sind sehr gut bis herausragend qualifizierte Fachkr&auml;fte, die sich ihre Lorbeeren auf den Gebieten Magento und Shopify, WooCommerce und Shopware bereits verdient haben. Wir bringen Dich mit Experten f&uuml;r Deine Magento Entwickler Agentur zusammen, die die verschiedenen Versionen von Magento kennen, sich mit unterschiedlichen Frameworks auskennen und mit nicht nur einem Web Server arbeiten k&ouml;nnen.
          <br />
          Konzeption, Planung, Erstellung und Pflege - Deine Shopify Agentur bietet alles, was das Herz begehrt? Das ist fein. Aber was tust Du, wenn Dir Entwickler fehlen? Wir stellen das perkfete Team f&uuml;r Deine Shopify Entwickler Agentur zusammen. Von der Konzeption der Ma&szlig;nahmen &uuml;ber Shopify UX/CRO und mehr ist alles m&ouml;glich. Denn wir arbeiten mit erfahrenen Shopify Entwicklern, die auf Remote Work spezialisiert sind.
        </Paragraph>
        <Paragraph color="inherit">
          Mehrsprachige Shops, Anbindung an externe Dienste, vollwertiges responsives Design und mehr - WooCommerce bietet unglaubliche M&ouml;glichkeiten. Gerade kleine und mittelst&auml;ndische Unternehmen betreuen ihren Internetauftritt gerne selbst und k&ouml;nnen &uuml;ber ein begrenztes Budget mit WooCommerce viel anfangen. Remote Experten f&uuml;r Deine WooCommerce Agentur &uuml;bernehmen jedoch nicht nur kleine Projekte. Aber vielleicht brauchst Du ja auch niemanden f&uuml;r Deine WooCommerce Entwickler Agentur, sondern willst ein Projekt mit Shopware umsetzen? Expandieren ist immer gut! Aber deshalb musst Du nicht gleich eine Shopware Entwickler Agentur aufbauen. Lass uns erst einmal ein Remote Entwickler Team f&uuml;r Dich zusammenstellen!
        </Paragraph>
      </>
    ),
  },
  {
    id: 3,
    title: <h3>Remote Teams f&uuml;r App Agenturen</h3>,
    content: (
      <Paragraph color="inherit">
        Kein Unternehmen kommt heutzutage ohne Pr&auml;senz im Web aus. Vom Onlineshop &uuml;ber die Internetpr&auml;senz und soziale Netzwerke bis hin zu Ratgebern, kleinen und sehr speziellen Netzwerken muss alles auf dem Smartphone funktionieren. Wer sucht da schon Inhalte im Browser? Die eigene App ist die L&ouml;sung. Ob f&uuml;r iOS oder Android - wir stellen Dir Dein Team f&uuml;r Deine App Agentur zusammen. Denn warum solltest Du mit angestellten Entwicklern arbeiten, wenn Remote so viel einfacher ist? Wir haben Dein Team, das genau auf Deine Bed&uuml;rfnisse und Deine App Agentur abgestimmt ist. Experten auf verschiedenen Gebieten, die au&szlig;er iOS und Android auch Flutter und React beherrschen, arbeiten zusammen an Deinem Projekt.
        <br />
        Wir stellen individuelle Teams f&uuml;r die SEO Agenturen zusammen
        <br />
        Keywords en masse und dann l&auml;uft der Laden? So stellte man sich SEO vor zehn Jahren etwa vor. Heute wissen wir: So einfach ist es nicht. Denn nat&uuml;rlich m&uuml;ssen Apps, Webseiten, die Homepage und Landingpages nicht nur f&uuml;r Suchmaschinen optimiert sein, sondern f&uuml;r Deine Kunden und Kundinnen. Deine SEO Agentur ben&ouml;tigt hervorragend ausgebildete Fachleute, die sich best&auml;ndig fortbilden und SEO bei der Entwicklung von Backend, Frontend und vor allem im E-Commerce umsetzen k&ouml;nnen. Ganz egal, ob Du Dein Team in der etablierten Agentur aufstocken willst oder SEO Entwickler f&uuml;r Dein Start-Up ben&ouml;tigst: Deine Experten und Expertinnen findest Du bei uns - zu attraktiven Tagess&auml;tzen wie auch interessanten Projektkosten.
      </Paragraph>
    ),
  },
  {
    id: 4,
    title: <h3>UI/UX Entwickler f&uuml;r Deine Werbeagentur</h3>,
    content: (
      <Paragraph color="inherit">
        Der Kunde steht im Mittelpunkt, und am Ende z&auml;hlt nur, was Deine Nutzer und Nutzerinnen sehen, lesen, h&ouml;ren. Das ist ungef&auml;hr das Prinzip, das hinter einer guten Marketing-Strategie steckt. Aber was sehen, lesen und h&ouml;ren die alle eigentlich? Ist das immer das, was sie sehen, lesen und h&ouml;ren wollen? Stichwort UI und UX: Keine Web Developer Agentur darf die User Experience (kurz UX) heute au&szlig;er Acht lassen. Denn UX ist mehr als der sichtbare Teil eines Internetauftritts: Es ist das gesamte Erlebnis, das Deine Kunden und Kundinnen in der Interaktion mit Deinem Unternehmen haben. UX beeinflusst vom ersten Kennenlernen &uuml;ber das Auffinden bestimmter Inhalte bis hin zur Abhandlung von Reklamationen jede Interaktion. Nat&uuml;rlich kommst Du in Deiner Software Developer Agentur nicht ohne Spezialisten f&uuml;r UI und UX aus! Erweitere das Team Deiner Software Developer Agentur mit Remote Entwicklern, die auf WordPress und Webdesign spezialisiert sind. Das ist IT Outsourcing auf einem hohen Niveau - wir bringen Dich mit Remote Entwicklern zusammen, die Experten auf ihrem Gebiet sind.
      </Paragraph>
    ),
  },
  {
    id: 5,
    title: <h3>Auch PR Agenturen brauchen Entwickler</h3>,
    content: (
      <>
        <Paragraph color="inherit">
          Kommunikation ist alles: Das ist nicht nur in der Werbung so, sondern in jeder PR Agentur. Public Relations ist die Abteilung in Unternehmen, die f&uuml;r die Information der &Ouml;ffentlichkeit, der Kundschaft, den gesamten Auftritt nach au&szlig;en verantwortlich ist. Deine PR Agentur will ein neues Team aufbauen oder ein bestehendes Team aufstocken: Sprich uns einfach an! Im Chat mit unseren Experten oder per E-Mail kl&auml;ren wir gemeinsam, ob wir Spezialisten f&uuml;r Webdesign und Websites vermitteln k&ouml;nnen, die Dein Team sinnvoll erg&auml;nzen. Du gibst Deinen Onlineshop nicht aus der Hand, wenn Du einen Remote Entwickler oder dien ganzes Team von Entwicklern mit dem Projekt betraust! Denn nat&uuml;rlich lassen sich Remote Teams ganz wunderbar steuern.
        </Paragraph>
        <Paragraph color="inherit">
          <strong>Experten aus jedem Fachbereich</strong>
          <br />
          Dass eine Shopware Agentur ihr Team mit Remote Entwicklern erg&auml;nzt, ist die eine Sache. E-Commerce Entwickler f&uuml;r Agenturen, Start-Ups und Unternehmen sind schon eine ganze Weile mit Remote Work vertraut. Aber was ist mit anderen Spezialisten? Wir vermitteln Dir bei Bedarf nat&uuml;rlich nicht nur Remote Entwickler. Wir finden f&uuml;r Dich Project Manager und Product Owner. Wir vernetzen Dich mit Ihrem neuen Scrum Master und bringen neben Software Engineers und UI/UX Designers auch Mobile Developers in Dein Team! Teams f&uuml;r Quality assurance, f&uuml;r Business Analytics und Solutions Architects stellen wir f&uuml;r Dein Unternehmen zusammen.
          <br />
          Du brauchst f&uuml;r Dein Unternehmen nat&uuml;rlich nicht irgendwelche IT Experten und Programmierer. Du suchst gezielt nach Experten f&uuml;r Angular oder React, f&uuml;r Tue JS und Node JS, wenn Du ein Team f&uuml;r das Frontend zusammenstellst. Teile uns einfach mit, welche Programmiersprachen Deine neuen Experten beherrschen sollten! Neben Frontend und Backend (PHP, Java, DOT.NET) arbeiten wir auch mit Entwicklern f&uuml;r Mobile (Android, iOS, React Native und Flutter) zusammen. Deine Sprache ist nicht dabei? Nun, Python, C++ und Ruby k&ouml;nnen wir ebenfalls bieten - und bei Bedarf noch weitere!
        </Paragraph>
        <Paragraph color="inherit">
          Warum k&ouml;nnen wir Dir Teams in so vielen Fachgebieten derart kosteng&uuml;nstig zusammenstellen? Das ist ganz einfach: Wir suchen Dir keine Freelancer in Deutschland. Sondern wir arbeiten mit Agenturen in Osteuropa zusammen, die ihre eigenen Angestellten f&uuml;r jedes Fachgebiet haben. Das sind die Experten, die wir vermitteln - Dein zuk&uuml;nftiges Entwickler Team! Und mit wem d&uuml;rfen wir Dich nun bekannt machen?
        </Paragraph>
      </>
    ),
  },
];

function Seo() {
  return (
    <>
      <Section id="seo">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Entwickler für Agenturen</Heading2>
          </CenteredTitle>
          <Content data-aos-duration="600" data-aos-delay="200">
            <Accordion accordionItems={accordionItems} allowMultiple />
          </Content>
        </Container>
      </Section>
    </>
  );
}

export default Seo;
