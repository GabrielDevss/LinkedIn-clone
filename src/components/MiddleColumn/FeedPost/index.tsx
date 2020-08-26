import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  Rows,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://scontent.fvcp6-1.fna.fbcdn.net/v/t1.0-9/10534701_877935255567420_2638469105633166010_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeEAO0WWvrsoqVKotN1H72BfwAMbt_DzqynAAxu38POrKcpqHL6KzZLmiw3jUKjyoHuquk4BBQsztfWiAPaR6CZ_&_nc_ohc=twUDfnA5FUkAX_TKz-A&_nc_ht=scontent.fvcp6-1.fna&oh=7ba20bc24f322fafe91770350bbdbc26&oe=5F6A7257" alt="Avatar" />
          <Column>
            <h3>Alcides Neto</h3>
            <h4>Coordernador da Solfarma</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>

        <Rows className="heading">
          <Avatar src="https://scontent.fvcp6-1.fna.fbcdn.net/v/t1.0-9/15940521_1731263930232586_2220899096263139662_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeGmcJYIwParpS6zlPUerkFpL_6-GjL8diYv_r4aMvx2JuyFhpu4TK4P2A-KwMOStUBmdUvAAYTR-kFO7ZyCiH71&_nc_ohc=kt6-mDaX5JsAX8JJOmI&_nc_ht=scontent.fvcp6-1.fna&oh=9282dc30d2019279b2bb0e01bbddb2f6&oe=5F6B8EBE" alt="avatar" />
          <Column>
            <h3>Aislan Rodrigues</h3>
            <h4>Lider da empresa Solfarma</h4>
            <time>1 sem</time>
          </Column>
        </Rows>

        <PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Rocketseat Blog"
        />

        <Rows className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Rows>

        <Rows>
          <Separator />
        </Rows>

        <Rows className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Rows>
      </Container>
    </Panel>
  );
};

export default FeedPost;
