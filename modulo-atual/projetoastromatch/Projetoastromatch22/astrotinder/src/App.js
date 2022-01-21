import React, { useState } from 'react'
import Post from './components/Post/Post';
import styled from "styled-components"


const AppContainer = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Post
        id={'01'}
        nomeUsuario={'Carol Danvers '}
        idade={'26'}
        fotoPost={'https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp'}
        bio={'Olá tinder'}

        id={'02'}
        nomeUsuario={'Anitta'}
        idade={'26'}
        fotoPost={'https://ajufest.com.br/wp-content/uploads/2021/10/anitta2-1.png'}
        bio={'Olá tinder'}

        id={'03'}
        nomeUsuario={'Iza'}
        idade={'31'}
        fotoPost={'https://s2.glbimg.com/md5SDAFp-HyAHH0-Fe79pspdZvo=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2019/c/A/jbikFZRSaV8lXr8m97LA/cantora-iza-lembra-cabelo-alisado.jpg'}
        bio={'Olá tinder'}

        id={'04'}
        nomeUsuario={'João Gomes'}
        idade={'19'}
        fotoPost={'https://yt3.ggpht.com/2oag8uIbbVKss6OY143QEcPrN9OavBmy8x-bRxxhuEEycmSGZ1qJVfnVEF31sNB3mUFDH6CG=s900-c-k-c0x00ffffff-no-rj'}
        bio={'Olá tinder'}        

        id={'05'}
        nomeUsuario={'Whindersson'}
        idade={'27'}
        fotoPost={'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3128262:1630064924/image.jpg?h=630&q=0.6&w=1200&$p$h$q$w=f76cc5e'}
        bio={'Olá tinder'}    

      />
    </AppContainer>
  );
}


export default App;
