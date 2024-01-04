
import ComponentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

import { useState } from 'react';







function App() {

  
  

  const [selectedtopic,setselectedtopic] = useState();

  function handleSelect(selectedButton){
    
    setselectedtopic(selectedButton);
    
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} /> 
          ))}
          {/* <CoreConcept 
          {...CORE_CONCEPTS[0]}
          />
          <CoreConcept 
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcept 
          {...CORE_CONCEPTS[2]}
          />
          <CoreConcept 
          {...CORE_CONCEPTS[3]}
          /> */}
          </ul>
        </section>

        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedtopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedtopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedtopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedtopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>

        {!selectedtopic ? "Please select a topic" : 
        <div id="tab-content">

        <h3>{EXAMPLES[selectedtopic].title}</h3>
        <p>{EXAMPLES[selectedtopic].description}</p>
        <pre>
        <code>
        {EXAMPLES[selectedtopic].code}
        </code>
        </pre>

      </div>
      }
        
        
       
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
