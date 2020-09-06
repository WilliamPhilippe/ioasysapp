import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import {
  MdStarBorder,
  MdEventSeat,
  MdLocationOn,
  MdContentPaste,
  MdInbox,
  MdPersonAdd,
  MdArrowBack,
} from 'react-icons/md';

import { FaCodepen } from 'react-icons/fa';

import api from '../../services/api';

import { compare } from '../../utils/compare';

import Form from '../../components/Search';

import {
  Container,
  SideContainer,
  Avatar,
  Info,
  Details,
  Item,
  RepoContainer,
  Repository,
  ItemRepo,
  Loading,
  Back,
} from './styles';

export default function Profile({ match, history }) {
  const { user } = match.params;

  const [details, setDetails] = useState({});
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);

      try {
        const response = await api.get(`/users/${user}/repos`);

        setRepos(response.data.sort(compare));

        const detailsResponse = await api.get(`/users/${user}`);
        setDetails(detailsResponse.data);
      } catch (err) {
        history.push('/');
      }

      setLoading(false);
    }

    loadRepos();
  }, [history, user]);

  /**
   * Função responsável por comparar a filtragem dos repositórios.
   * @param {object} item
   */
  function searchFilter(item) {
    return item.name.toLowerCase().includes(searchValue) || !searchValue;
  }

  return (
    <Container>
      {loading ? (
        <Loading>
          <FaCodepen size={32} />
        </Loading>
      ) : (
        <>
          <SideContainer>
            <Avatar>
              <img src={details.avatar_url} alt="avatar" />
            </Avatar>
            <Info>
              <p>{details.name}</p>
              <span>{details.bio}</span>
            </Info>
            <Details>
              {details.company && (
                <Item>
                  <MdEventSeat size={25} />
                  <span>{details.company}</span>
                </Item>
              )}
              {details.location && (
                <Item>
                  <MdLocationOn size={25} />
                  <span>{details.location}</span>
                </Item>
              )}
              <Item>
                <MdContentPaste size={25} />
                <span>{details.public_gists}</span>
              </Item>
              <Item>
                <MdInbox size={25} />
                <span>{details.public_repos}</span>
              </Item>
              <Item>
                <MdPersonAdd size={25} />
                <span>{details.followers}</span>
              </Item>
            </Details>
            <Back onClick={() => history.push('/')}>
              <MdArrowBack size={28} />
            </Back>
          </SideContainer>
          <RepoContainer>
            <Form
              value={searchValue}
              set={setSearchValue}
              placeholder="Search a repository..."
            />
            {repos.filter(searchFilter).map(item => (
              <Repository key={item.name}>
                <p>
                  <a href={item.html_url}>{item.name}</a>
                </p>
                {item.description && <span>{item.description}</span>}
                <ItemRepo>
                  <MdStarBorder size={16} />
                  <span>{item.stargazers_count}</span>
                </ItemRepo>
              </Repository>
            ))}
          </RepoContainer>
        </>
      )}
    </Container>
  );
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
