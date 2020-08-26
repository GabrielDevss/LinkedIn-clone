import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>Rastreador de Carga  - </span>
      Protege sua carga em todo o Brasil. Bateria para até 90 dias.
    </Container>
  );
};

export default AdBanner;
