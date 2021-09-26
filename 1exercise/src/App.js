import React from 'react';
import Header from './components/Header';
import MainNews from './components/MainNews';
import MostReadArticle from './components/MostReadArticle';
import NewsNotification from './components/NewsNotification';

function App() {

  const NewsNotificationData = [
    {
      topic: 'KAUPUNKI: ',
      body: 'Töölöön suunnitellussa kerrostalossa on asukkaiden oma leffateatteri ja viinikellari – Taloon on jo 2 500 ennakkovaraajaa'
    },

    {
      topic:  'PAIVAN TIMANTTI: ',
      body: 'Matkustus helpottui rokotusten myötä, mutta voiko alle 12-vuotiaan rokottamattoman lapsen kanssa lähteä ulkomaille? – Nämä asiat kannattaa nyt huomioida matkustettaessa'
    },

    {
      topic: 'MAINOS: ',
      body: 'HS Digi sisältää kaikki Hesarin herkut digitaalisessa muodossa: timanttijutut, upeat erikoisartikkelit, HS Live -nettikonsertit, podcastit, ääneen luetut jutut, näköislehdet ja uutisarkiston. Tilaus päättyy automaattisesti. '
    }

  ];

  const MostReadArticleData =[
    {
      number: '1',
      text: 'Rokotteista kieltäytynyt perusterve mies kuoli koronavirukseen – Nyt leski kertoo kaiken ”turhasta kuolemasta"'
    },
    {
      number: '2',
      text: 'Asukas löysi panssaroidun Mersun omalta auto­paikaltaan – Kesken poliisitehtävän alkoi suukopu siitä, miten virkavalta saa pysäköidä'
    },
    {
      number: '3',
      text: 'Naapurin tupakoiva mummo savusti vuorijuoksija Susanna Saapungin ulos asunnosta: ”Ei siellä kämpässä voinut enää olla”'
    },
    {
      number: '4',
      text: 'Fyysinen kirja on uhattuna: Nyt kirja-alan ammattilaiset kertovat, miksi printin katoamisen seuraukset ovat kohtalokkaat'
    }
];
  
  return (
    <div>

    
      <Header/>

      

      {
      NewsNotificationData.map(element =>  <NewsNotification topic = {element.topic} body = {element.body} />)

      }
    
      <tr>
         <td>   
           <MainNews />
        </td>
        
          <td>
         {
            MostReadArticleData.map(article =>  <MostReadArticle number = {article.number} text = {article.text} />)
          }
          </td>
    
      </tr>
         
    
      

  


    </div>
  );
}

export default App;
