import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fgig7-1.fna.fbcdn.net/v/t31.18172-8/22382207_1604775152919818_498861733615934412_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEwXUpA70HjmCdYy0zdIIDVjEqU6YGesLSMSpTpgZ6wtIb0q5eom8yz6A6j36b8A95_s1x_rtml1kW43ao5lxfQ&_nc_ohc=0us_Zha-MEkAX_nAACO&_nc_ht=scontent.fgig7-1.fna&oh=00_AT-aobDfBdASvm-5hYhLn8XQFwbp08DgvoPMA2AyLfBB6A&oe=62769F2D" 
          nome="Evelly Sales" 
          descricao="Oi, meu nome é Evelly. Sou aluna na turma joy da Labenu. Adoro viajar, conhecer culturas/vivencias diferentes e aprender coisas novas no curso."
        />
        
        <ImagemButton 
          imagem="https://freepikpsd.com/file/2019/10/58262_plus-png-Transparent-Images.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://alfabrasil.com.br/wp-content/uploads/2018/03/LOGO-IBGE.jpg" 
          nome="Instituto Brasileiro de Geografia e Estatística (IBGE)" 
          descricao="Estagiária de Geotecnologias!" 
        />
        
        <CardGrande 
          imagem="https://seasdih.duquedecaxias.rj.gov.br/pss/tmp/assets/69f432c2/owKVlT1c_400x400.jpg" 
          nome="Secretaria de Urbanismo (PMDC)" 
          descricao="Estagiária de Geoprocessamento" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg" 
          texto= <a href="https://www.linkedin.com/in/evelly-sales-6683a3211" target="blank">Linkedin</a>
        />        

        <ImagemButton 
          imagem="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" 
          texto= <a href="https://github.com/future4code/Evelly-Sales" target="blank">GitHub</a> 
        />        
      </div>
    </div>
  );
}

export default App;
