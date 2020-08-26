import React from 'react';

import {
 Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCicle,
  CaretDownIcon

} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
               <HomeIcon />
               <span>Início</span>
            </button>

            <button >
               <NotificationsIcon />
               <span>Notificações</span>
            </button>

            <button>
               <ProfileCicle src="https://github.com/GabrielDevss.png" />
               <span>Eu <CaretDownIcon />
               </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;