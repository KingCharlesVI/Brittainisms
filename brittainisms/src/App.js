// src/App.js
import React from 'react';
import './App.css';  // Import the App.css file
import Accordion from './Accordion';

const frenchVocabulary = {
  cybersociété: [
    { french: 'Un nombre croissant', english: 'A growing number' },
    { french: 'Sûr la toile', english: 'Online' },
    { french: 'S\u2019échapper', english: 'To escape' },
  ],
  cinéma: [
    { french: 'Dès maintenant', english: 'From now on' },
    { french: 'Se porte bien', english: 'Flourishing' },
    { french: 'Passer à la réflexion', english: 'To push one to think' },
    { french: 'Nombriliste', english: 'Inward-looking'},
    { french: 'Combler le fossé', english: 'To bridge the gap'},
    { french: 'Rentable', english: 'Profitable'},

  ],
  diversité: [
    { french: 'Un ancêtre', english: 'An ancester' },
    { french: 'Une aubaine', english: 'A blessing' },
    { french: 'Une opportunité en or', english: 'A golden opportunity' },
    { french: 'Mon coloc', english: 'My shared accomodation'},
    { french: 'Sage comme une image', english: 'Good as gold'},
    { french: 'Ils se croient supérieurs', english: 'They feel superior'},
    { french: 'Remonter à', english: 'To hearken back to'},
    { french: 'De peur que', english: 'Out of fear that'},
    { french: 'Tout n\u2019est pas rose', english: 'It\u2019s not all rosy'},
    { french: 'Léguer', english: 'To hand down'},
    { french: 'Découler de', english: 'To stem from'},
    { french: 'Dans une mosaïque de minorités culturelles', english: 'In a mosaic of cultural minorities'},
    { french: 'jouir les libertés', english: 'To enjoy the liberties'},
    { french: 'Un creuset de haine', english: 'A melting pot of hatred'},
  ],
  patrimoine: [
    { french: 'Une gamme d\u2019activités', english: 'A range of activities' },
  ],
  marginalisés: [
    { french: 'Atteint de', english: 'Afflicted by' },
    { french: 'La toxicomanie', english: 'Drug addiction' },
    { french: 'Sceller', english: 'To seal' },
    { french: 'Sendetter', english: 'To get into debt'},
    { french: 'Atténuer', english: 'To alleviate'},
    { french: 'La précarité', english: 'Financial instability'},
    { french: 'On a du tout', english: 'We have all sorts'},
    { french: 'Une campagne de sensibilisation', english: 'An awareness campaign'},
    { french: 'Donner un coup de main', english: 'To give a helping hand'},
    { french: 'Ça peut arriver (à n\u2019importe qui)', english: 'That can happen (to anyone)'},
    { french: 'Mieux vaut prévenir que guérir', english: 'Better to prevent than to care for them'},
    { french: 'Venir en aide à quelqu\u2019un', english: 'To come to the aid of someone'},
    { french: 'Les moyens pour lutter contre quelque chose', english: 'The means to fight something'},
    { french: 'Une stratégie à plusieurs facettes', english: 'A multifacetted strategy'},
    { french: 'Il se peut que (+ subj.)', english: 'It is possible that'},
    { french: 'Tisser des liens', english: 'To weave/create links'},
    { french: 'Ce qui me saute aux yeux', english: 'What jumps out to me'},
    { french: 'Quelle que soit la raison', english: 'Whatever the reason'},
    { french: 'Le dialogue de sourds', english: 'The conversation of the deaf'},
    { french: 'Ruisseler', english: 'To trickle'},
  ],
  nine: [
    { french: 'Ça dépend de', english: 'It depends on' },
    { french: 'Un argument qui manque de poids', english: 'An argument lacking weight/substance' },
    { french: 'La loi ne discrimine pas', english: 'The law doesn\u2019t discriminate' },
    { french: 'On aurait dû y penser', english: 'One should\u2019ve thought of that'},
    { french: 'Intrinséquement lié à', english: 'Intrinsically linked to'},
    { french: 'La précarité', english: 'Financial instability'},
    { french: 'La situation va de mal en pris', english: 'The situation goes from bad to worse'},
    { french: 'S\u2019attender sur', english: 'To dwell on'},
    { french: 'Entourer les jeunes', english: 'To surround the young people'},
    { french: 'Les facteurs sociaux', english: 'The social factors'},
    { french: 'Le taux de récidive', english: 'The rate of re-offending'},
    { french: 'Irascible', english: 'Annoyed/angry'},
    { french: 'Le foyer', english: 'The home'},
  ],
  LaHaine: [
    { french: 'Je suis en train de (+ inf.)', english: 'I am in the process of' },
    { french: 'La péripétie', english: 'The incident'},
    { french: 'Être dans la surenchère', english: 'To be/go over the top'},
    { french: 'Se côtoyer avec', english: 'To rub shoulders with'},
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Brittainisms</h1>
      <Accordion title="Unit 2: Cybersociété" items={frenchVocabulary.cybersociété} />
      <Accordion title="Unit 4: Patrimoine" items={frenchVocabulary.patrimoine} />
      <Accordion title="Unit 6: Cinéma" items={frenchVocabulary.cinéma} />
      <Accordion title="Unit 7: Une société diverse" items={frenchVocabulary.diversité} />
      <Accordion title="Unit 8: Les marginalisés" items={frenchVocabulary.marginalisés} />
      <Accordion title="Unit 9: Nine" items={frenchVocabulary.nine} />
      <Accordion title="La Haine" items={frenchVocabulary.LaHaine} />
    </div>
  );
}

export default App;