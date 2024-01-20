import React from 'react'
import './Home.css';
import { FundraiserItem } from '../Common/FundraiserItem';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate=useNavigate()

    const [currentFundraisers, setCurrentFundraisers] = React.useState([
        {
            id: 1,
            title: 'Annual Fundraiser',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/Rectangle.png',
            raised: 100,
            goal: 1000,
            daysLeft: 20,
            category: 'Education',
        },
        {
            id: 1,
            title: 'Annual Fundraiser',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/Rectangle.png',
            raised: 100,
            goal: 1000,
            daysLeft: 20,
            category: 'Education',
        },
        {
            id: 1,
            title: 'Annual Fundraiser',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/Rectangle.png',
            raised: 100,
            goal: 1000,
            daysLeft: 20,
            category: 'Education',
        }
    ]);

  return (
    <div className="fundraiser-container">
    <section className="hero padding hero-media" style={{zIndex:100}}>

<div className="max-width-lg">



            <div className="align-center max-width-sm space-bottom space-hero space-top">

                  <h1 className="title-h1">Building a more mindful &amp; compassionate world</h1>

                      <div className="paragraph-2x"><p>Meditation and mindfulness can greatly improve mental wellbeing and can have a transformative effect on all of us as individuals and on society as a whole.</p>
<p>Help us improve mental wellbeing by ensuring mindfulness and meditation resources are available to everyone, for free.</p></div>
    
  
                  <ul className="list-inline list--sm space-top-2x">

      
                              <li><a href="https://meditofoundation.org/meditations" className="button button-style-secondary full-width" role="button">Meditate for free</a></li>
        
      
                              <li><a onClick={()=>navigate('/')} className="button button-style-primary full-width" role="button" target="_blank">Donate</a></li>
        
      
    </ul>
  
</div>


                <div className="align-center max-width-sm">

                    
      <img className="full-width max-width-sm rounded" src="https://meditofoundation.org/media/pages/home/85f9e1db2c-1620759820/cover.png" srcset="https://meditofoundation.org/media/pages/home/85f9e1db2c-1620759820/cover-960x.png 960w, https://meditofoundation.org/media/pages/home/85f9e1db2c-1620759820/cover-1920x.png 1920w, https://meditofoundation.org/media/pages/home/85f9e1db2c-1620759820/cover-2880x.png 2880w" sizes="100vw" alt=""/>

    
  </div>



</div>
</section>
    <div className="section-2">
        <div className="section-2-title">
            Our Current Campaigns
        </div>
        <div className="current-campaigns-list">
            {currentFundraisers.map((fundraiser) => {
                return(
                    <FundraiserItem  data={fundraiser} />

                )
            }
            )}
        </div>
    </div>
    
          
    </div>
  )
}
