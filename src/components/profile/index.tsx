import React from 'react';
import useGithub from '../../hooks';
import * as S from './styled';

const Profile: React.FC = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Empresa:</h3>
            <span>{githubState.user.company || 'Não informado'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Localização:</h3>
            <span>{githubState.user.location || 'Não informado'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Redes:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <S.ContainerInfo>
            <div>
              <h4>Seguidores</h4>
              <span> {githubState.user.followers}</span>
            </div>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <div>
              <h4>Seguindo</h4>
              <span> {githubState.user.following}</span>
            </div>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <div>
              <h4>Gists</h4>
              <span> {githubState.user.public_gists}</span>
            </div>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <div>
              <h4>Repositórios</h4>
              <span> {githubState.user.public_repos}</span>
            </div>
          </S.ContainerInfo>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
