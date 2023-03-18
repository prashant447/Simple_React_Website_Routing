
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/button';
// import {AppContext} from '../Context'
import { useGlobalContext } from '../Context';


const HeroSection = () => {
  const { name, image } = useGlobalContext();
  return (
    <>
      <Wrapper className='home'>
       < div className = "container grid grid-two-column">
           <div className='section-hero-data'>
            <p className='hero-top-data'>THIS IS ME</p>
            <h1 className='hero-heading'>{name}</h1>
            <p className='hero-para'> I'm {name} Shashank Mishra. A full stack developer and freelancer also I'm good at wordpress  </p>
            <Button className='btn hireme-btn'><NavLink to = "/contact">HIRE ME</NavLink></Button>
           </div>


           <div className='section-hero-image'>
            <picture>
                <img src= {image} alt="image" srcset="" className='hero-img' />
            </picture>
           </div>
       </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
     padding: 9rem 0;

     .home{
      background-color: #b6abff30;
     }
   
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
   
   
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 90%;
  }

  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }

`;

export default HeroSection


