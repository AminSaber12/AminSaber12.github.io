import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src='images/airrow.png'
              text='A project created using HTML, CSS and JS'
              label='Airrow'
              path={{ pathname: "https://github.com/Asabe041/AminSaber/tree/master/Airrow%20Website" }}
            />
            <CardItem
              src='images/android1.png'
              text='My Android Booking Application Developped using Java Android Studio and Firebase Database'
              label='Android App'
              path={{ pathname: "https://github.com/Asabe041/AminSaber/tree/master/Android%20Studio%20App" }}
            />
            <CardItem
              src='images/java.png'
              text='The Java Projects I developped over the years'
              label='Java'
              path={{ pathname: "https://github.com/Asabe041/AminSaber/tree/master/Java%20Applications" }}
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/python.png'
              text='My Python applications I worked on during university'
              label='Python'
              path={{ pathname: "https://github.com/Asabe041/AminSaber/tree/master/Python%20Applications" }}
            />
            <CardItem
              src='images/autocad.png'
              text='Progression of the website I have developped over the years'
              label='Websites'
              path={{ pathname: "https://github.com/Asabe041/AminSaber/tree/master/UI" }}
            />
          </ul>
        </div>
      </div>
  );
}

export default Cards;