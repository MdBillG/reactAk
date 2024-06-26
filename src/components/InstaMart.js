import React, { useState } from 'react';
import { Country_Value } from './constants';
import useCountry from '../utils/useCountry';

const Section = ({ name, description, isVisible, toggleVisibility }) => {
  return (
    <div className="lorem">
      <h2>{name}</h2>
      {isVisible ? (
        <button onClick={toggleVisibility}>
          Hide
        </button>
      ) : (
        <button onClick={toggleVisibility}>
          Show
        </button>
      )}
      {isVisible && <h4>{description}</h4>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [countryName,setCountryname] = useState('')

  const {country,handleChange,countyOptions} = useCountry()
  console.log('countryName',countryName);

  const toggleSection = (sectionName) => {
    setVisibleSection((prevVisibleSection) =>
      prevVisibleSection === sectionName ? null : sectionName
    );
  };

  const handleCountry=(e)=>{
setCountryname(e.target.value)
  }

  return (
    <>
      <Section
        name={'Vastav'}
        description={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
        isVisible={visibleSection === 'Vastav'}
        toggleVisibility={() => toggleSection('Vastav')}
      />

      <Section
        name={'Agneepath'}
        description={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
        isVisible={visibleSection === 'Agneepath'}
        toggleVisibility={() => toggleSection('Agneepath')}
      />


      <select value={countryName} onChange={handleCountry}> 
        <option >Select County Name</option>
        {Country_Value.map(x=><option key={x?.name} value={x?.name}>{x?.name} </option>)}
      </select>


      <select value={country} onChange={handleChange}>
      <option value="">select</option>
      {countyOptions}
      </select>
      InstaMar has thousands of lines
    </>
  );
};

export default InstaMart;
